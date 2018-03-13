import React from 'react'
import { connect } from "react-redux"
import addMultipleChoiceAnswer from "../actions/addMultipleChoiceAnswer"
import delMultipleChoiceAnswer from "../actions/delMultipleChoiceAnswer"
import MultipleChoiceItem from "../components/MultipleChoiceItem.jsx"
import { COMFIRM_ANSWER } from "../actions/comfirmAnswer"
import { red500 } from "material-ui/styles/colors"

const checkAnswer = (checked, answer) => {
    if (!checked) {
        return false
    }
    if (checked.length !== answer.length) {
        return false
    }
    let newChecked = checked.slice().sort(),
        newAnswer = answer.slice().sort()
    for (let i = 0, len = newChecked.length; i < len; i++) {
        if (newChecked[i] !== newAnswer[i]) {
            return false
        }
    }

    return true
}

const mapStateToProps = (state, ownProps) => {
    if (state.status === COMFIRM_ANSWER) {
        if (!checkAnswer(state.multipleChoiceAnswer[ownProps.itemId], 
            ownProps.answer)) {
            return {
                description: ownProps.description.replace(/(\( \))/,
                    `( ${ownProps.answer.join("、")} )`),
                style: {color: red500}
            }
        }
    } else {
        return {}
    }
}

const mapDispatchToProps = (dispatch) => ({
    onCheck(itemId, value, isInputChecked) {
        if (isInputChecked) {
            dispatch(addMultipleChoiceAnswer(itemId, value))
        } else {
            dispatch(delMultipleChoiceAnswer(itemId, value))
        }
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(MultipleChoiceItem)