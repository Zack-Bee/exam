import React, { Component } from "react"
import TextField from "material-ui/TextField"
import Divider from "material-ui/Divider"

export default class GapFillingItem extends Component {
    render() {
        return (
            <div style={{margin: "10px 0"}}>
                <Divider/>
                <div>
                    {this.props.generateDescription(
                        this.props.description.split("( )"), 
                        this.props.onChange, this.props.itemId)}
                </div>
            </div>
        )
    }
}