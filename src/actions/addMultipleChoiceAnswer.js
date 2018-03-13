export const ADD_MULTIPLE_CHOICE_ANSWER = "ADD_MULTIPLE_CHOICE_ANSWER"
export default (itemId, value) => ({
    type: ADD_MULTIPLE_CHOICE_ANSWER,
    itemId,
    value
})