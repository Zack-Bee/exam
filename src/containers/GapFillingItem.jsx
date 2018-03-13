import React from 'react'
import { connect } from "react-redux"
import GapFillingItem from "../components/GapFillingItem.jsx"
import setGapFillingAnswer from "../actions/setGapFillingAnswer"
import { COMFIRM_ANSWER } from "../actions/comfirmAnswer"
import TextField from 'material-ui/TextField/TextField';


const mapStateToProps = (state, ownProps) => {
    if (state.status === COMFIRM_ANSWER) {
        return {
            generateDescription(arr) {
                for (let i = 1, len = arr.length * 2 - 2; i < len; i+= 2) {

                    let answer = state.gapFillingAnswer[ownProps.itemId]
                    if (!answer) {
                        arr.splice(i, 0,
                            <TextField name={String(i)} key={i}
                                errorText={ownProps.answer[(i - 1) / 2]}/>)
                    } else if (answer[(i - 1) /2] !== 
                        ownProps.answer[(i - 1) / 2]) {
                        arr.splice(i, 0,
                            <TextField value={answer[(i - 1) / 2]} 
                                name={String(i)} key={i}
                                errorText={ownProps.answer[(i - 1) / 2]}/>)
                    } else {
                        arr.splice(i, 0, <TextField key={i} name={String(i)} 
                            value={answer}/>)
                    }
                }
                return arr
            }
        }
    } else {
        return {
            generateDescription(arr, onChange, itemId) {
                for (let i = 1, len = arr.length * 2 - 2; i < len; i+= 2) {
                    arr.splice(i, 0, <TextField key={i} onChange={(event, newValue) => {
                        if (onChange) {
                            onChange(itemId, newValue, (i - 1) / 2)
                        }
                    }} hintText="在此处输入答案"/>)
                }
                return arr
            }
        }
    }
}

const mapDispatchToProps = (dispatch) => ({
    onChange(itemId, value, index) {
        dispatch(setGapFillingAnswer(itemId, value, index))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(GapFillingItem)