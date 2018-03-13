import React from "react"
import { connect } from "react-redux"
import QuestionsPage from "../components/QuestionsPage.jsx"
import loadQuestionsEnd from "../actions/loadQuestionsEnd"
import comfirmAnswer from "../actions/comfirmAnswer"
import { COMFIRM_ANSWER } from "../actions/comfirmAnswer"
import loadQuestions from "../actions/loadQuestions"
import resetAnser from "../actions/resetAnser"

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
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsPage)