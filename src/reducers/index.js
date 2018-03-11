import localFiles from "./localFiles"
import questions from "./questions"
import status from "./status"
import solvedQuestions from "./solvedQuestions"
import currentQuestions from "./currentQuestions"

export default (prevState = {}, action) => ({
    localFiles: localFiles(prevState.localFiles, action),
    questions: questions(prevState.questions, action),
    status: status(prevState.status, action),
    solvedQuestions: solvedQuestions(prevState.solvedQuestions, action),
    currentQuestions: currentQuestions(prevState, action)
})