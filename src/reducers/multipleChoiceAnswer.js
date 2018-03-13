import { DEL_MULTIPLE_CHOICE_ANSWER } from "../actions/delMultipleChoiceAnswer"
import { ADD_MULTIPLE_CHOICE_ANSWER } from "../actions/addMultipleChoiceAnswer"
import { RESET_ANSER } from "../actions/resetAnser"

export default (multipleChoiceAnswer = {}, action) => {
    switch (action.type) {
        case DEL_MULTIPLE_CHOICE_ANSWER: {
            let answer = multipleChoiceAnswer[action.itemId].filter((value) => (
                !(value === action.value)
            )) 
            return Object.assign({}, multipleChoiceAnswer, {
                [action.itemId]: answer
            })
        }
        case ADD_MULTIPLE_CHOICE_ANSWER: {
            let itemId = action.itemId,
                answer = multipleChoiceAnswer[itemId]
            if (!answer) {
                answer = []
            }
            return Object.assign({}, multipleChoiceAnswer, {
                [itemId]: [...answer, action.value]
            })
        }
        case RESET_ANSER: {
            return {}
        }
        default: {
            return multipleChoiceAnswer
        }
    }
}