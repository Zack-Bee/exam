import React from "react"
import { connect } from "react-redux"
import AppBar from "../components/AppBar.jsx"
import { SHOW_MAIN_PAGE } from "../actions/showMainPage"
import showMainPage from "../actions/showMainPage"

const mapStateToProps = (state, ownProps) => {
    if (state.status === SHOW_MAIN_PAGE) {
        return {
            title: "欢迎使用测试系统",
            isMainPage: true
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

    },
    backMainPage() {
        dispatch(showMainPage())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(AppBar)