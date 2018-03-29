import React from "react"
import { connect } from "react-redux"
import QuestionsPage from "../components/QuestionsPage.jsx"
import loadQuestionsEnd from "../actions/loadQuestionsEnd"
import comfirmAnswer from "../actions/comfirmAnswer"
import { COMFIRM_ANSWER } from "../actions/comfirmAnswer"
import loadQuestions from "../actions/loadQuestions"
import resetAnser from "../actions/resetAnser"
import addSolvedQuestions from "../actions/addSolvedQuestions"
import showMainPage from "../actions/showMainPage"
import resetSolvedQuestions from "../actions/resetSolvedQuestions"


const mapStateToProps = (state) => {
    console.log(state)
    return {
        currentQuestions: state.currentQuestions,
        comfirmAnswer: state.status === COMFIRM_ANSWER,
    }
}

const mapDispatchToProps = (dispatch) => ({
    didMount() {
        dispatch(loadQuestionsEnd())
    },
    onComfirmAnswerBtnClick() {
        dispatch(comfirmAnswer())
    },
    onNextQuestionsBtnClick(currentQuestions) {
        dispatch(addSolvedQuestions(currentQuestions))
        dispatch(loadQuestions())
        dispatch(loadQuestionsEnd())
    },
    onBackHomeBtnClick() {
        dispatch(showMainPage())
        dispatch(resetSolvedQuestions())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsPage)