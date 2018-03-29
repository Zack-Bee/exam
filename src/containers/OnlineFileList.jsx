import React, { Component } from "react"
import { connect } from "react-redux"
import ListItem from "material-ui/List/ListItem"
import OnlineFileItem from "./OnlineFileItem.jsx"
import setOnlineFile from "../actions/setOnlineFile"
import { ADMIN } from "../actions/setUser"

class OnlineFileList extends Component {
    render() {
        return (
            <ListItem primaryText="云上文件"
                initiallyOpen={false}
                primaryTogglesNestedList={true}
                nestedItems={[
                    ...this.props.onlineFiles.map((fileInfo) => (
                        <OnlineFileItem fileName={fileInfo.fileName}
                            questions={fileInfo.questions}/>))
                ]} />
        )
    }

    componentDidMount() {
        if (this.props.didMount) {
            console.log("onlinelist mount")
            this.props.didMount()
        }
    }
}

const mapStateToProps = (state) => ({
    onlineFiles: state.onlineFiles
})

const mapDispatchToProps = (dispatch) => ({
    didMount() {
        let xhr = new XMLHttpRequest()
        xhr.open("get", "./files")
        xhr.addEventListener("readystatechange", () => {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200 || xhr.status === 304) {
                    let obj = JSON.parse(xhr.response)
                    console.log(typeof obj)
                    let files = []
                    for (let i in obj) {
                        files.push(obj[i])
                    }
                    console.log(files)
                    dispatch(setOnlineFile(files.map((fileName) => ({
                        fileName
                    }))))
                } else {
                    alert("请检查网络后再试")
                }
            }
        })
        xhr.send()
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(OnlineFileList)