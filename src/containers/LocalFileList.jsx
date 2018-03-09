import React, { Component } from "react"
import { connect } from "react-redux"
import ListItem from "material-ui/List/ListItem"
import LocalFileItem from "./LocalFileItem.jsx"
import Paper from "material-ui/Paper"
import RaisedButton from "material-ui/RaisedButton"
import FileUpload from "material-ui/svg-icons/file/file-upload"
import { cyan500 } from "material-ui/styles/colors"
import UploadBtn from "./Uploadbtn.jsx"

class LocalFileList extends Component {
    render() {
        console.log("render list")
        return (
            <ListItem primaryText="本地文件"
                initiallyOpen={true}
                primaryTogglesNestedList={true}
                nestedItems={[
                    ...this.props.localFiles.map((fileInfo) => (
                        <LocalFileItem fileName={fileInfo.fileName}
                            key={fileInfo.itemId} itemId={fileInfo.itemId}
                            file={fileInfo.file}
                            delIcon={true} />))
                    , <UploadBtn key={-1} />
                ]} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        localFiles: state.localFiles
    }
}

export default connect(mapStateToProps, null, null, { pure: false })(LocalFileList)