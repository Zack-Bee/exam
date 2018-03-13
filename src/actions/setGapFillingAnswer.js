export const SET_GAP_FILLING_ANSWER = "SET_GAP_FILLING_ANSWER"
export default (itemId, value, index) => ({
    type: SET_GAP_FILLING_ANSWER,
    itemId,
    value,
    index
})