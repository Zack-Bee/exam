import React from "react"
import { connect } from "react-redux"
import AppBar from "../components/AppBar.jsx"
import { SHOW_MAIN_PAGE } from "../actions/showMainPage"
import showMainPage from "../actions/showMainPage"
import showLoginForm from "../actions/showLoginForm"
import setUser, { ADMIN } from "../actions/setUser"
import setLocalFileQuestions from "../actions/setLocalFileQuestions"
import extractData from "../lib/extractData"

const mapStateToProps = (state, ownProps) => {
    const upload = () => {
        let localFiles = state.localFiles,
            uploadFiles = [],
            allPromise = []

        localFiles.forEach((fileInfo) => {
            if (!fileInfo.questions) {
                allPromise.push(extractData(fileInfo.file))
            } else {
                uploadFiles.push({
                    fileName: fileInfo.fileName,
                    questions: fileInfo.questions
                })
            }
        })
        console.log(state)
        Promise.all(allPromise).then((fileInfoArr) => {
            console.log(fileInfoArr)
            fileInfoArr = fileInfoArr.map((fileInfo) => ({
                fileName: fileInfo.fileName,
                questions: fileInfo
            }))
            console.log(fileInfoArr)            
            uploadFiles = uploadFiles.concat(fileInfoArr)
            console.log(uploadFiles)

            let xhr = new XMLHttpRequest()
            xhr.open("put", "./files")
            xhr.setRequestHeader("Content-Type", "application/json")
            xhr.addEventListener("readystatechange", () => {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status === 200) {
                        alert("上传成功")
                    } else {
                        alert("上传失败")
                    }
                    xhr = null
                }
            })
            xhr.send(JSON.stringify({index: uploadFiles}))
        })
    }

    if (state.status === SHOW_MAIN_PAGE) {
        if (state.user === ADMIN) {
            return {
                title: "你好管理员",
                isMainPage: true,
                isAdmin: true,
                upload
            }
        } else {
            return {
                title: "欢迎使用测试系统",
                isMainPage: true,
                isAdmin: false
            }
        }
    } else {
        return {
            title: state.fileName,
            isMainPage: false
        }
    }
}

const mapDispatchToProps = (dispatch) => ({
    login() {
        let password = prompt(),
            xhr = new XMLHttpRequest()
        xhr.open("post", "./login")
        // xhr.setRequestHeader("Content-Type", "application/json")
        xhr.send(password)
        xhr.addEventListener("readystatechange", () => {
            if ((xhr.readyState === XMLHttpRequest.DONE) &&
                (xhr.status === 200)) {
                console.log("login")
                dispatch(setUser(ADMIN))
                xhr = null
            }
        })
    },
    backMainPage() {
        dispatch(showMainPage())
    },
    didMount() {
        if (document.cookie) {
            dispatch(setUser(ADMIN))
        }
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(AppBar)