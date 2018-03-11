import { LOAD_QUESTIONS } from "../actions/loadQuestions"
import { LOAD_QUESTIONS_END } from "../actions/loadQuestionsEnd"

const getRandomIndex = (length) => (
    Math.floor(Math.random() * length)
)

const getUnsolvedQuestions = (questions, solvedQuestions) => ({
    singleChoice: questions.singleChoice.filter((question) => (
        !solvedQuestions.singleChoice.includes(question)
    )),
    multipleChoice: questions.multipleChoice.filter((question) => (
        !solvedQuestions.multipleChoice.includes(question)
    )),
    gapFilling: questions.gapFilling.filter((question) => (
        !solvedQuestions.gapFilling.includes(question)
    ))
})

const getQuestions = (currentQuestions, unsolvedQuestions) => {
    if (unsolvedQuestions.singleChoice.length > 0) {
        let index = getRandomIndex(unsolvedQuestions.singleChoice.length)
        let removedQuestion = unsolvedQuestions.singleChoice.splice(index, 1)
        currentQuestions.singleChoice.push(...removedQuestion)
    }
    if (unsolvedQuestions.multipleChoice.length > 0) {
        let index = getRandomIndex(unsolvedQuestions.multipleChoice.length)
        let removedQuestion = unsolvedQuestions.multipleChoice.splice(index, 1)
        currentQuestions.multipleChoice.push(...removedQuestion)
    }
    if (unsolvedQuestions.gapFilling.length > 0) {
        let index = getRandomIndex(unsolvedQuestions.gapFilling.length)
        let removedQuestion = unsolvedQuestions.gapFilling.splice(index, 1)
        currentQuestions.gapFilling.push(...removedQuestion)
    }
}

export default (state, action) => {
    switch (action.type) {
        case LOAD_QUESTIONS: {
            let currentQuestions = {
                singleChoice: [],
                gapFilling: [],
                multipleChoice: []
            }
            let questions = state.questions
            let solvedQuestions = state.solvedQuestions
            let unsolvedQuestions = getUnsolvedQuestions(questions, solvedQuestions)
            while (((currentQuestions.singleChoice.length +
                currentQuestions.multipleChoice.length +
                currentQuestions.gapFilling.length) < 30) &&
                ((unsolvedQuestions.singleChoice.length +
                    unsolvedQuestions.multipleChoice.length +
                    unsolvedQuestions.gapFilling.length) !== 0)) {
                getQuestions(currentQuestions, unsolvedQuestions)
            }
            console.log(currentQuestions)

            return currentQuestions
        }
        case LOAD_QUESTIONS_END: {
            return state.currentQuestions
        }
        default: {
            return state.currentQuestions
        }
    }
}