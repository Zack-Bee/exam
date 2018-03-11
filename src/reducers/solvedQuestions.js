export default (solvedQuestions = {
    singleChoice: [],
    multipleChoice: [],
    gapFilling: []
}, action) => {
    switch (action.type) {
        default: {
            return {
                singleChoice: [],
                multipleChoice: [],
                gapFilling: []
            }
        }
    }
}