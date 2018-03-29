export const SET_LOCAL_FILE_QUESTIONS = "SET_LOCAL_FILE_QUESTIONS"
export default (questions, itemId) => ({
    type: SET_LOCAL_FILE_QUESTIONS,
    questions,
    itemId
})