import React, { Component } from "react"
import Checkbox from 'material-ui/Checkbox'
import Divider from "material-ui/Divider"

export default class MultipleChoiceItem extends Component {
    render() {
        return (
            <div style={{margin: "10px 0"}}>
                <Divider/>
                <p>{this.props.description}</p>
                {this.props.choice.map((choice) => (
                    <Checkbox key={choice[0]} style={{ paddingTop: "16px" }} label={choice} />
                ))}
            </div>
        )
    }
}