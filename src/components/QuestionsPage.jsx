import React, { Component } from 'react'
import RaisedButton from "material-ui/RaisedButton"
import DoneAll from "material-ui/svg-icons/action/done-all"
import SingleChoiceItem from "../containers/SingleChoiceItem.jsx"
import MultipleChoiceItem from "../containers/MultipleChoiceItem.jsx"
import GapFillingItem from "../containers/GapFillingItem.jsx"
import ArrowBack from "material-ui/svg-icons/navigation/arrow-back"


// 产生随机顺序的数组
const shuffle = (arr) => {
    let newArr = arr.slice()
    for (let i = newArr.length - 1; i > 0; i--) {
        let temp,
            randomIndex = Math.floor(Math.random() * (i + 1))
        temp = newArr[i]
        newArr[i] = newArr[randomIndex]
        newArr[randomIndex] = temp
    }

    return newArr
}


export default class QuestionsPage extends Component {
    render() {
        if ((this.props.currentQuestions.singleChoice.length +
            this.props.currentQuestions.multipleChoice.length +
            this.props.currentQuestions.gapFilling.length) === 0) {
            return (
                <div style={{textAlign: "center", marginTop: "10px"}}>
                    <RaisedButton labelPosition="before"
                        label="返回主页" icon={<ArrowBack />}
                        onClick={this.props.onBackHomeBtnClick} />
                </div>
            )
        } else {
            return (
                <div style={{ margin: "0 auto" }}>
                    <div>
                        {this.props.currentQuestions.singleChoice.length > 0 &&
                            <h2>单选题</h2>
                        }
                        {this.props.currentQuestions.singleChoice.map((questionInfo, index) => {
                            return (
                                <SingleChoiceItem key={questionInfo.id}
                                    itemId={questionInfo.id}
                                    comfirmAnswer={this.props.comfirmAnswer}
                                    answer={questionInfo.answer}
                                    description={questionInfo.description}
                                    choice={questionInfo.choice} />
                            )
                        })}
                    </div>
                    <div>
                        {this.props.currentQuestions.multipleChoice.length > 0 &&
                            <h2>多选题</h2>
                        }
                        {this.props.currentQuestions.multipleChoice.map((questionInfo, index) => {
                            return (
                                <MultipleChoiceItem key={questionInfo.id}
                                    itemId={questionInfo.id}
                                    comfirmAnswer={this.props.comfirmAnswer}
                                    answer={questionInfo.answer}
                                    description={questionInfo.description}
                                    choice={questionInfo.choice} />
                            )
                        })}
                    </div>
                    <div>
                        {this.props.currentQuestions.gapFilling.length > 0 &&
                            <h2>填空题</h2>
                        }
                        {this.props.currentQuestions.gapFilling.map((questionInfo,
                            index) => {
                            return (
                                <GapFillingItem key={questionInfo.id}
                                    itemId={questionInfo.id}
                                    comfirmAnswer={this.props.comfirmAnswer}
                                    answer={questionInfo.answer}
                                    description={questionInfo.description} />
                            )
                        })}
                    </div>
                    <div style={{ margin: "20px auto", textAlign: "center" }}>
                        {this.props.comfirmAnswer ?
                            <RaisedButton secondary={true}
                                labelPosition="before"
                                label="下一波题"
                                onClick={() => {
                                    this.props.onNextQuestionsBtnClick(
                                        this.props.currentQuestions
                                    )
                                }} />
                            : <RaisedButton
                                onClick={this.props.onComfirmAnswerBtnClick}
                                labelPosition="before"
                                primary={true} label="提交答案"
                                icon={<DoneAll />} />
                        }
                    </div>
                </div>
            )
        }
    }

    componentDidMount() {
        this.props.didMount()
    }
}
