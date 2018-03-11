import React, { Component } from "react"
import { connect } from "react-redux"
import RaisedButton from "material-ui/RaisedButton"
import FileUpload from "material-ui/svg-icons/file/file-upload"
import { cyan500 } from "material-ui/styles/colors"
import addLocalFile from "../actions/addLocalFile"
import Paper from "material-ui/Paper"

const acceptType = ".docx"
let itemId = 0
const getItemId = () => (itemId++)

class UploadBtn extends Component {
    render() {
        return (
            <div style={{ textAlign: "center", paddingTop: 10 }}>
                <RaisedButton label="选择本地文档"
                    icon={<FileUpload color={cyan500} />}
                    onClick={this.props.onClick} />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    onClick: () => {
        let fileInput = document.createElement("input")
        fileInput.type = "file"
        fileInput.accept = acceptType
        // form.appendChild(fileInput)
        fileInput.click()
        fileInput.onchange = () => {
            if (fileInput.files[0]) {
                dispatch(addLocalFile(getItemId(), fileInput.files[0],
                    fileInput.files[0].name))
            }
        }
    }
})

export default connect(null, mapDispatchToProps)(UploadBtn)