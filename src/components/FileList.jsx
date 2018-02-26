import { List } from "material-ui/List"
import { Component } from "react"
import React from "react"
import FileListItem from "./FileListItem.jsx"
import Paper from "material-ui/Paper"
import RaisedButton from "material-ui/RaisedButton"
import FileUpload from "material-ui/svg-icons/file/file-upload"
import { cyan500 } from "material-ui/styles/colors"

const acceptType = ".docx"

let itemId = 0
const getItemId = () => (itemId++)

class FileList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            keys: [],
            fileInputs: []
        }
        this.deleteItem = this.deleteItem.bind(this)
    }

    render() {
        return (
            <List >
                {
                    this.state.keys.map((key, index) => (
                        <FileListItem fileInput={this.state.fileInputs[index]}
                            key={key}
                            itemId={key}
                            deleteItem={this.deleteItem} />
                    ))
                }
                <div style={{ textAlign: "center", paddingTop: 10 }}>
                    <RaisedButton label="上传文档"
                        icon={<FileUpload color={cyan500} />}
                        onClick={() => {
                            // console.log(this.state.fileInput)
                            // let form = document.getElementById("FileListForm")
                            // console.log(form)
                            // if (!form) {
                            //     form = document.createElement("form")
                            //     form.id = "FileListForm"
                            //     form.style.display = "none"
                            //     document.body.appendChild(form)
                            // }
                            let fileInput = document.createElement("input")
                            fileInput.type = "file"
                            fileInput.accept = acceptType
                            // form.appendChild(fileInput)
                            fileInput.click()
                            fileInput.onchange = () => {
                                if (fileInput.files[0]) {
                                    this.setState({
                                        keys: [...this.state.keys, getItemId()],
                                        fileInputs: [...this.state.fileInputs, fileInput]
                                    }, () => {
                                        console.log(this.state)
                                    })
                                }
                            }
                        }} />
                </div>
            </List >
        )
    }

    deleteItem(key) {
        let itemIndex
        let keys = this.state.keys.filter((value, index) => {
            if (key === value) {
                itemIndex = index
                return false
            }
            return true
        })
        let fileInputs = [...this.state.fileInputs]
        fileInputs.splice(itemIndex, 1)
        console.log(keys)
        console.log(fileInputs)
        this.setState({
            keys,
            fileInputs
        })
    }
}

export default FileList