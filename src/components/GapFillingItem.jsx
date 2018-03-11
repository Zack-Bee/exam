import React, { Component } from "react"
import TextField from "material-ui/TextField"
import Divider from "material-ui/Divider"

const insertTextField = (arr) => {
    for (let i = 1, len = arr.length * 2 - 2; i < len; i+= 2) {
        arr.splice(i, 0, <TextField hintText="在此处输入答案"/>)
    }
    return arr
}

export default class extends Component {
    render() {
        return (
            <div style={{margin: "10px 0"}}>
                <Divider/>
                <div>
                    {insertTextField(this.props.description.split("( )"))}
                </div>
            </div>
        )
    }
}