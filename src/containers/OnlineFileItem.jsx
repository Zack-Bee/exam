import React from "react"
import { connect } from "react-redux"
import FileItem from "../components/FileItem.jsx"
import { ADMIN } from "../actions/setUser"
import delOnlineFile from "../actions/delOnlineFile"
import downloadFile from "../actions/downloadFile"
import setQuestions from "../actions/setQuestions"
import setFileName from "../actions/setFileName"
import loadQuestions from "../actions/loadQuestions"

const mapStateToProps = (state) => ({
    delIcon: state.user === ADMIN
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onIconButtonClick() {
        let xhr = new XMLHttpRequest()
        xhr.open("delete", `./files/${ownProps.fileName}`)
        xhr.addEventListener("readystatechange", () => {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    dispatch(delOnlineFile(ownProps.fileName))
                } else {
                    alert("出错了")
                }
                
                xhr = null
            }
        })
        xhr.send()        
    },
    onClick() {
        dispatch(downloadFile())
        if (ownProps.questions) {
            dispatch(setQuestions(questions))
            dispatch(setFileName(ownProps.fileName))
            dispatch(loadQuestions(questions, ownProps.itemId))
        } else {
            let xhr = new XMLHttpRequest()
            xhr.open("get", `./files/${ownProps.fileName}`)
            xhr.addEventListener("readystatechange", () => {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if ((xhr.status === 200) || (xhr.status === 304)) {
                        let questions = JSON.parse(xhr.response)
                        console.log(questions)
                        dispatch(setQuestions(questions))
                        dispatch(setFileName(ownProps.fileName))
                        dispatch(loadQuestions(questions))
                    } else {
                        alert("请检查网络链接后重试")
                    }

                    xhr = null
                }
            })
            xhr.send()            
        }
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(FileItem)