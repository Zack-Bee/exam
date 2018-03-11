import React from "react"
import { connect } from "react-redux"
import QuestionsPage from "../components/QuestionsPage.jsx"
import loadQuestionsEnd from "../actions/loadQuestionsEnd"

const mapStateToProps = (state) => {
    console.log(state)
    return {
        currentQuestions: state.currentQuestions
    }
}

const mapDispatchToProps = (dispatch) => ({
    didMount: () => {
        dispatch(loadQuestionsEnd())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsPage)