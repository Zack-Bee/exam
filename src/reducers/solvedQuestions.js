import { ADD_SOLEVED_QUESTIONS } from "../actions/addSolvedQuestions"
import { RESET_SOLVED_QUESTIONS } from "../actions/resetSolvedQuestions"

export default (solvedQuestions = {
    singleChoice: [],
    multipleChoice: [],
    gapFilling: []
}, action) => {
    switch (action.type) {
        case ADD_SOLEVED_QUESTIONS: {
            return {
                singleChoice: [...solvedQuestions.singleChoice,
                ...action.solvedQuestions.singleChoice],
                multipleChoice: [...solvedQuestions.multipleChoice,
                ...action.solvedQuestions.multipleChoice],
                gapFilling: [...solvedQuestions.gapFilling,
                ...action.solvedQuestions.gapFilling]
            }
        }
        case RESET_SOLVED_QUESTIONS: {
            return {
                singleChoice: [],
                multipleChoice: [],
                gapFilling: []
            }
        }
        default: {
            return solvedQuestions
        }
    }
}