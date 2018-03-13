export const SET_SINGLE_CHOICE_ANSWER = "SET_SINGLE_CHOICE_ANSWER"
export default (itemId, answer) => ({
    type: SET_SINGLE_CHOICE_ANSWER,
    itemId,
    answer
})