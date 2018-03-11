import { LOAD_QUESTIONS } from "../actions/loadQuestions"
import { SHOW_MAIN_PAGE } from "../actions/showMainPage"
import { ANALYSIS_DATA } from "../actions/analysisData"
import { LOAD_QUESTIONS_END } from "../actions/loadQuestionsEnd"

export default (status = SHOW_MAIN_PAGE, action) => {
    console.log(action)
    switch (action.type) {
        case LOAD_QUESTIONS: {
            return LOAD_QUESTIONS
        }
        case SHOW_MAIN_PAGE: {
            return SHOW_MAIN_PAGE
        }
        case ANALYSIS_DATA: {
            return ANALYSIS_DATA
        }
        case LOAD_QUESTIONS_END: {
            return LOAD_QUESTIONS_END
        }
        default: {
            return status
        }
    }
}