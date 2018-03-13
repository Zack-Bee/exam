export const DEL_MULTIPLE_CHOICE_ANSWER = "DEL_MULTIPLE_CHOICE_ANSWER"
export default (itemId, value) => ({
    type: DEL_MULTIPLE_CHOICE_ANSWER,
    itemId,
    value
})
