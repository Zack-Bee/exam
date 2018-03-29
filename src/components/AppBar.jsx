import React, { Component } from "react"
import AppBar from "material-ui/AppBar"
import ArrowBack from "material-ui/svg-icons/navigation/arrow-back"
import AccountCircle from "material-ui/svg-icons/action/account-circle"
import IconButton from "material-ui/IconButton"
import CloudUpload from "material-ui/svg-icons/file/cloud-upload"

export default class extends Component {
    render() {
        if (this.props.isMainPage) {
            if (this.props.isAdmin) {
                return (
                    <AppBar iconElementLeft={<IconButton><CloudUpload /></IconButton>}
                        title={<span>{this.props.title}</span>}
                        onLeftIconButtonClick={this.props.upload} />
                )
            } else {
                return (
                    <AppBar iconElementLeft={<IconButton><AccountCircle /></IconButton>}
                        title={<span>{this.props.title}</span>}
                        onLeftIconButtonClick={this.props.login} />
                )
            }
        } else {
            return (
                <AppBar iconElementLeft={<IconButton><ArrowBack /></IconButton>}
                    title={<span>{this.props.title}</span>}
                    onLeftIconButtonClick={this.props.backMainPage} />
            )
        }
    }

    componentDidMount() {
        if (this.props.didMount) {
            this.props.didMount()
        }
    }
}