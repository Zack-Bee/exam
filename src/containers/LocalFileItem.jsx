import { connect } from "react-redux"
import delLocalFile from "../actions/delLocalFile"
import FileItem from "../components/FileItem.jsx"
import analysisData from "../actions/analysisData"
import loadQuestions from "../actions/loadQuestions"
import setQuestions from "../actions/setQuestions"
import setFileName from "../actions/setFileName"
import extractData from "../lib/extractData"

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