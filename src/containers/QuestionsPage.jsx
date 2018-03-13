import React from "react"
import { connect } from "react-redux"
import QuestionsPage from "../components/QuestionsPage.jsx"
import loadQuestionsEnd from "../actions/loadQuestionsEnd"
import comfirmAnswer from "../actions/comfirmAnswer"
import { COMFIRM_ANSWER } from "../actions/comfirmAnswer"
import loadQuestions from "../actions/loadQuestions"
import doItAgain, { DO_IT_AGAIN } from "../actions/doItAgain"
import resetAnser from "../actions/resetAnser"

const mapStateToProps = (state) => {
    console.log(state)
    return {
        currentQuestions: state.currentQuestions,
        comfirmAnswer: state.status === COMFIRM_ANSWER,
        isDoItAgain: state.status === DO_IT_AGAIN
    }
}

const mapDispatchToProps = (dispatch) => ({
    didMount() {
        dispatch(loadQuestionsEnd())
    },
    onComfirmAnswerBtnClick() {
        dispatch(comfirmAnswer())
    },
    doItAgain() {
        dispatch(resetAnser())
        dispatch(doItAgain())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsPage)