import React, { Component } from "react"
import AppBar from "material-ui/AppBar"
import ArrowBack from "material-ui/svg-icons/navigation/arrow-back"
import AccountCircle from "material-ui/svg-icons/action/account-circle"
import IconButton from "material-ui/IconButton"

export default class extends Component {
    render() {
        if (this.props.isMainPage) {
            return (
                <AppBar iconElementLeft={<IconButton><AccountCircle /></IconButton>}
                    title={<span>{this.props.title}</span>}
                    onLeftIconButtonClick={this.props.loginIn} />
            )
        } else {
            return (
                <AppBar iconElementLeft={<IconButton><ArrowBack /></IconButton>}
                    title={<span>{this.props.title}</span>}
                    onLeftIconButtonClick={this.props.backMainPage} />
            )
        }
    }
}