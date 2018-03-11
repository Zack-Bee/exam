export const LOAD_QUESTIONS = "LOAD_QUESTIONS"
export default (questions, itemId) => ({
    type: LOAD_QUESTIONS,
    questions,
    itemId
})