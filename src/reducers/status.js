import { LOAD_QUESTIONS } from "../actions/loadQuestions"
import { SHOW_MAIN_PAGE } from "../actions/showMainPage"
import { ANALYSIS_DATA } from "../actions/analysisData"
import { LOAD_QUESTIONS_END } from "../actions/loadQuestionsEnd"
import { COMFIRM_ANSWER } from "../actions/comfirmAnswer"
import {SHOW_LOGIN_FORM} from "../actions/showLoginForm" 

export default (status = SHOW_MAIN_PAGE, action) => {
    console.log(action)
    switch (action.type) {
        case LOAD_QUESTIONS:
        case SHOW_MAIN_PAGE:
        case ANALYSIS_DATA:
        case LOAD_QUESTIONS_END:
        case COMFIRM_ANSWER:
        case SHOW_LOGIN_FORM: {
            return action.type
        }
        default: {
            return status
        }
    }
}