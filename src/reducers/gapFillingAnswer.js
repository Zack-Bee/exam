import { SET_GAP_FILLING_ANSWER } from "../actions/setGapFillingAnswer"
import { RESET_ANSER } from "../actions/resetAnser"

export default (gapFillingAnswer = {}, action) => {
    switch (action.type) {
        case SET_GAP_FILLING_ANSWER: {
            let answer = gapFillingAnswer[action.itemId]
            if (!answer) {
                answer = []
            }
            answer = answer.slice()
            answer[action.index] = action.value
            return Object.assign({}, gapFillingAnswer, {
                [action.itemId]: answer

            })
        }
        case RESET_ANSER: {
            return {}
        }
        default: {
            return gapFillingAnswer
        }
    }
}