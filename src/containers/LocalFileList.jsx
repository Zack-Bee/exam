import React, { Component } from "react"
import { connect } from "react-redux"
import ListItem from "material-ui/List/ListItem"
import LocalFileItem from "./LocalFileItem.jsx"
import Paper from "material-ui/Paper"
import RaisedButton from "material-ui/RaisedButton"
import UploadBtn from "./Uploadbtn.jsx"

class LocalFileList extends Component {
    render() {
        return (
            <ListItem primaryText="本地文件"
                initiallyOpen={true}
                primaryTogglesNestedList={true}
                nestedItems={[
                    ...this.props.localFiles.map((fileInfo) => (
                        <LocalFileItem fileName={fileInfo.fileName}
                            key={fileInfo.itemId} itemId={fileInfo.itemId}
                            file={fileInfo.file} delIcon={true}
                            questions={fileInfo.questions} />))
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

export default connect(mapStateToProps)(LocalFileList)