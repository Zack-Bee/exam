import React, { Component } from "react"
import { connect } from "react-redux"
import LoadingPage from "./LoadingPage.jsx"
import QuestionsPage from "./QuestionsPage.jsx"
import FilesPage from "./FilesPage.jsx"
import { LOAD_QUESTIONS } from "../actions/loadQuestions"
import { SHOW_MAIN_PAGE } from "../actions/showMainPage"
import { ANALYSIS_DATA } from "../actions/analysisData"
import { LOAD_QUESTIONS_END } from "../actions/loadQuestionsEnd"
import { COMFIRM_ANSWER } from "../actions/comfirmAnswer"

class Pages extends Component {
    render() {
        return (
            <div style={{ margin: "0 15px" }}>
                {this.props.filesPage && <FilesPage />}
                {this.props.questionsPage && <QuestionsPage />}
                {this.props.loadingPage && <LoadingPage />}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    switch (state.status) {
        case ANALYSIS_DATA: {
            return {
                filesPage: true,
                questionsPage: false,
                loadingPage: true
            }
        }
        case LOAD_QUESTIONS: {
            return {
                filesPage: false,
                questionsPage: true,
                loadingPage: true
            }
        }
        case COMFIRM_ANSWER: 
        case LOAD_QUESTIONS_END: {
            return {
                filesPage: false,
                questionsPage: true,
                loadingPage: false
            }
        }
        case SHOW_MAIN_PAGE: {
            return {
                filesPage: true,
                questionsPage: false,
                loadingPage: false
            }
        }
        default: {
            return {
                filesPage: true,
                questionsPage: false,
                loadingPage: false
            }
        }
    }
}

export default connect(mapStateToProps)(Pages)