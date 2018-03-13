import { SET_SINGLE_CHOICE_ANSWER } from "../actions/setSingleChoiceAnswer"
import { RESET_ANSER } from "../actions/resetAnser"

export default (singleChoiceAnswer = {}, action) => {
    switch (action.type) {
        case SET_SINGLE_CHOICE_ANSWER: {
            return Object.assign({}, singleChoiceAnswer, {
                [action.itemId]: action.answer
            })
        }
        case RESET_ANSER: {
            return {
                
            }
        }
        default: {
            return singleChoiceAnswer
        }
    }
}