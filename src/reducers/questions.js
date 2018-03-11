import { LOAD_QUESTIONS } from "../actions/loadQuestions"
import { SET_QUESTIONS } from "../actions/setQuestions"
export default (questions = {}, action) => {
    switch (action.type) {
        case SET_QUESTIONS: {
            return action.questions
        }

        default: {
            return questions
        }
    }
}