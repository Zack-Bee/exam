import { ListItem } from "material-ui/List"
import React, { Component } from "react"
import FileIcon from "material-ui/svg-icons/editor/insert-drive-file"
import { blue500 } from "material-ui/styles/colors"
import IconButton from "material-ui/IconButton"
import Delete from "material-ui/svg-icons/action/delete"
import Divider from "material-ui/Divider"
import Paper from "material-ui/Paper"
import { red500 } from "material-ui/styles/colors"

class FileListItem extends Component {
    render() {
        console.log("render item")
        return (
            <Paper>
                <ListItem
                    onClick={() => {
                        if (this.props.onClick) {
                            this.props.onClick()
                        }
                    }}
                    style={{ textAlign: "center" }}
                    leftIcon={<FileIcon color={blue500} />}
                    primaryText={this.props.fileName}
                    rightIconButton={this.props.delIcon &&
                        (<IconButton onClick={() => {
                            if (this.props.onIconButtonClick) {
                                this.props.onIconButtonClick()
                            }
                        }}>
                            <Delete color={red500} />
                        </IconButton>)}>
                </ListItem>
            </Paper>
        )
    }
}

export default FileListItem