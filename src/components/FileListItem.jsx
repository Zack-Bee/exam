import { ListItem } from "material-ui/List"
import React, { Component } from "react"
import FileIcon from "material-ui/svg-icons/editor/insert-drive-file"
import { blue500 } from "material-ui/styles/colors"
import IconButton from "material-ui/IconButton"
import Delete from "material-ui/svg-icons/action/delete"
import Divider from "material-ui/Divider"
import Paper from "material-ui/Paper"
import { red500 } from "material-ui/styles/colors"

const acceptType = ".doc, .docx"

class FileListItem extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log("render")
        return (
            <Paper>
                <ListItem
                    style={{ textAlign: "center" }}
                    leftIcon={<FileIcon color={blue500} />}
                    primaryText={this.props.fileInput.files[0].name}
                    rightIconButton={
                        <IconButton onClick={() => {
                            this.props.deleteItem(this.props.itemId)
                        }}>
                            <Delete color={red500} />
                        </IconButton>}>
                </ListItem>
            </Paper>
        )
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     if (this.props.itemId === nextProps.itemId) {
    //         return false
    //     } 
    //     return true
    // }
}

export default FileListItem