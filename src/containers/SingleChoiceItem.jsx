import React from "react"
import { connect } from "react-redux"
import { red500 } from "material-ui/styles/colors"
import SingleChoiceItem from "../components/SingleChoiceItem.jsx"
import setSingleChoiceAnswer from "../actions/setSingleChoiceAnswer"
import { COMFIRM_ANSWER } from "../actions/comfirmAnswer"

const checkAnswer = (value, answer) => {
    return value === answer
}

const mapStateToProps = (state, ownProps) => {
    if (state.status === COMFIRM_ANSWER) {
        if (!checkAnswer(state.singleChoiceAnswer[ownProps.itemId],
            ownProps.answer[0])) {
            return {
                description: ownProps.description.replace(/(\( \))/,
                    `( ${ownProps.answer[0]} )`),
                style: { color: red500 }
            }
        }
    } else {
        return {}
    }
}

const mapDispatchToProps = (dispatch) => ({
    onChange(itemId, value) {
        dispatch(setSingleChoiceAnswer(itemId, value))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleChoiceItem)