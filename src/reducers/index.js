import localFiles from "./localFiles"
import questions from "./questions"
import status from "./status"
import solvedQuestions from "./solvedQuestions"
import currentQuestions from "./currentQuestions"
import singleChoiceAnswer from "./singleChoiceAnswer"
import multipleChoiceAnswer from "./multipleChoiceAnswer"
import gapFillingAnswer from "./gapFillingAnswer"

export default (state = {}, action) => ({
    localFiles: localFiles(state.localFiles, action),
    questions: questions(state.questions, action),
    status: status(state.status, action),
    solvedQuestions: solvedQuestions(state.solvedQuestions, action),
    currentQuestions: currentQuestions(state, action),
    singleChoiceAnswer: singleChoiceAnswer(state.singleChoiceAnswer, action),
    multipleChoiceAnswer: multipleChoiceAnswer(state.multipleChoiceAnswer, action),
    gapFillingAnswer: gapFillingAnswer(state.gapFillingAnswer, action)
})