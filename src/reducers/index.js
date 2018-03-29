import localFiles from "./localFiles"
import questions from "./questions"
import status from "./status"
import solvedQuestions from "./solvedQuestions"
import currentQuestions from "./currentQuestions"
import singleChoiceAnswer from "./singleChoiceAnswer"
import multipleChoiceAnswer from "./multipleChoiceAnswer"
import gapFillingAnswer from "./gapFillingAnswer"
import fileName from "./fileName"
import onlineFiles from "./onlineFiles"
import user from "./user"

export default (state = {}, action) => ({
    localFiles: localFiles(state.localFiles, action),
    questions: questions(state.questions, action),
    status: status(state.status, action),
    solvedQuestions: solvedQuestions(state.solvedQuestions, action),
    currentQuestions: currentQuestions(state, action),
    singleChoiceAnswer: singleChoiceAnswer(state.singleChoiceAnswer, action),
    multipleChoiceAnswer: multipleChoiceAnswer(state.multipleChoiceAnswer, action),
    gapFillingAnswer: gapFillingAnswer(state.gapFillingAnswer, action),
    fileName: fileName(state.fileName, action),
    onlineFiles: onlineFiles(state.onlineFiles, action),
    user: user(state.user, action)
})