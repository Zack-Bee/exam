import React, { Component } from "react"
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'
import Divider from "material-ui/Divider"

export default class SingleChoiceItem extends Component {
    render() {
        return (
            <div style={{ margin: "10px 0" }}>
                <Divider />
                <p style={this.props.style}>{this.props.description}</p>
                <RadioButtonGroup
                    onChange={(event, value) => {
                        if (this.props.onChange) {
                            this.props.onChange(this.props.itemId, value)
                        }
                    }}
                    name={this.props.description}>
                    {this.props.choice.map((choice) => (
                        <RadioButton key={choice[0]}
                            style={{ paddingTop: "16px" }}
                            label={choice} value={choice[0]} />
                    ))}
                </RadioButtonGroup>
            </div>
        )
    }
}