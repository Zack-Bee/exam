import { connect } from "react-redux"
import delLocalFile from "../actions/delLocalFile"
import FileItem from "../components/FileItem.jsx"
import JSZip from "jszip"
import analysisData from "../actions/analysisData"
import loadQuestions from "../actions/loadQuestions"
import setQuestions from "../actions/setQuestions"
import setFileName from "../actions/setFileName"

const removeSpace = (str) => (
    str.replace(/\s/g, "")
)

// 找出文档中有下划线的标志, 为填空题答案提供$$作为区分标志
const addIdentifierForUnderline = (xml) => {
    let underlineTags = xml.getElementsByTagName("w:u")
    for (let i = 0, len = underlineTags.length; i < len; i++) {
        if (underlineTags[i].getAttribute("w:val") === "single") {
            let ans = underlineTags[i].parentElement.nextElementSibling
            if (ans) {
                let noSpacedAns = removeSpace(ans.innerHTML)
                if (noSpacedAns) {
                    ans.innerHTML = `$${noSpacedAns}$`
                }
            }
        }
    }
}

// 找出xml中的w:t tag, 即文字, 进行拼接得到text
const getTextFromXML = (xml) => {
    let textTags = xml.getElementsByTagName("w:t")
    let text = ""
    for (let i = 0, len = textTags.length; i < len; i++) {
        text += textTags[i].innerHTML
    }

    // 将文本中的题号前加上\n, 便于分割题目
    text = text.replace(/(\d+、)/g, "\n$1")

    return text
}

// 从文本中将选择题提取出来
const getChoiceFromText = (text) => {
    let choiceRegExp = /\d*、.*[\(（].+[\)）].+(?:[A-Z]、.+(?!\d+、))+/g,
        choice = [],
        choiceArray,
        questions = {
            singleChoice: [],
            multipleChoice: []
        },
        singleChoiceId = 0,
        multipleChoiceId = 0

    while (choiceArray = choiceRegExp.exec(text)) {
        choice.push(choiceArray[0])
    }

    // 将answer, choice, description提取出来
    choice = choice.map((str) => {
        let questionInfo = {}
        str = str.replace(/[(（](.+)[)）]/, (match, p1) => {
            questionInfo.answer = removeSpace(p1).split("、")
            p1 = removeSpace(p1)
            if (p1.length > 1 && (p1.indexOf("、") < 0)) {
                questionInfo.answer = removeSpace(p1).split("")
            } else {
                questionInfo.answer = removeSpace(p1).split("、")

            }
            return "( )"
        })
        str = str.replace(/([A-Z]、)/g, "\n$1")
        let arr = str.split("\n")
        questionInfo.description = arr[0]
        questionInfo.choice = arr.slice(1).map((str) => (str.trim()))
        return questionInfo
    })

    // 去除不合理的题目
    choice = choice.filter((questionInfo) =>
        ((questionInfo.answer.length < 10) &&
            (questionInfo.choice.length < 15) &&
            (questionInfo.description.length < 80))
    )
    choice.forEach((questionInfo) => {
        if (questionInfo.answer.length === 1) {
            questionInfo.id = singleChoiceId++
            questions.singleChoice.push(questionInfo)
        } else {
            questionInfo.id = multipleChoiceId++
            questions.multipleChoice.push(questionInfo)
        }
    })

    return questions
}

const getGapFillingFromText = (text) => {
    let gapFilling = [],
        gapFillingArray,
        gapFillingRegExp = /\d+、(?:.+\$.+\$.*)+/g,
        gapFillingId = 0

    while (gapFillingArray = gapFillingRegExp.exec(text)) {
        gapFilling.push(gapFillingArray[0])
    }
    gapFilling = gapFilling.map((str) => {
        str = removeSpace(str)
        str = str.replace(/\$\$/g, "")
        let questionInfo = {}
        questionInfo.answer = []
        let regExp = /\$(.+?)\$/
        str = str.replace(/\$(.+?)\$/g, (match, p1) => {
            questionInfo.answer.push(p1.trim())

            return "( )"
        })
        questionInfo.description = str
        questionInfo.id = gapFillingId++
        return questionInfo
    })

    return { gapFilling }
}

const removeQuestionNumber = (str) => (str.replace(/^\d+、/, ""))

const getQuestionFromText = (text) => {
    let questions = Object.assign({}, getChoiceFromText(text), getGapFillingFromText(text))
    questions.gapFilling = questions.gapFilling.map((questionInfo) => {
        questionInfo.description = removeQuestionNumber(questionInfo.description)
        return questionInfo
    })
    questions.multipleChoice = questions.multipleChoice.map((questionInfo) => {
        questionInfo.description = removeQuestionNumber(questionInfo.description)
        return questionInfo
    })
    questions.singleChoice = questions.singleChoice.map((questionInfo) => {
        questionInfo.description = removeQuestionNumber(questionInfo.description)
        return questionInfo
    })
    return questions
}

// 从docx文件中提取题目信息
let extractData = (file) => (
    new Promise((resolve, reject) => {
        let zip = new JSZip()
        zip.loadAsync(file).then(() => {
            let doc = zip.file("word/document.xml")
            doc.async("string").then((content) => {
                let parser = new DOMParser()
                let xml = parser.parseFromString(content, "application/xml")
                addIdentifierForUnderline(xml)
                let text = getTextFromXML(xml)
                let questions = getQuestionFromText(text)
                resolve(questions)
            })
        })
    })
)

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick() {
        console.log(ownProps)
        dispatch(analysisData(ownProps.itemId))
        if (ownProps.questions) {
            dispatch(setQuestions(ownProps.questions))
            dispatch(setFileName(ownProps.fileName))
            dispatch(loadQuestions(ownProps.questions, ownProps.itemId))
        } else {
            extractData(ownProps.file).then((questions) => {
                dispatch(setQuestions(questions))
                dispatch(setFileName(ownProps.fileName))
                dispatch(loadQuestions(questions, ownProps.itemId))
            })
        }
    },
    onIconButtonClick() {
        dispatch(delLocalFile(ownProps.itemId))
    }
})

const LocalFileItem = connect(null, mapDispatchToProps)(FileItem)
export default LocalFileItem