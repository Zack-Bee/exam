import React, { Component } from "react"
import { connect } from "react-redux"
import List from "material-ui/List/List"
import LocalFileItem from "./LocalFileItem.jsx"
import Paper from "material-ui/Paper"
import RaisedButton from "material-ui/RaisedButton"
import FileUpload from "material-ui/svg-icons/file/file-upload"
import { cyan500 } from "material-ui/styles/colors"
import UploadBtn from "./Uploadbtn.jsx"

class LocalFileList extends Component {
    render() {
        return (
            <React.Fragment>
                <List>
                    {this.props.localFiles.map((fileInfo) => (
                        <Paper key={fileInfo.itemId}>
                            <LocalFileItem fileName={fileInfo.fileName}
                                itemId={fileInfo.itemId} delIcon={true} />
                        </Paper>
                    ))}
                </List>
                <UploadBtn />
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    localFiles: state.localFiles
})

export default connect(mapStateToProps)(LocalFileList)