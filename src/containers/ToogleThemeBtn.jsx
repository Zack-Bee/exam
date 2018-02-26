import React from "react"
import ToogleDayAndNightModeBtn from "../components/ToogleDayAndNightModeBtn.jsx"
import { connect } from "react-redux"
import { toogleTheme } from "../actions/toogleTheme"

const mapDispatchToProps = (dispatch, ownProps) => ({
    toogleTheme() {
        dispatch(toogleTheme)
    }
})

export default connect(null, mapDispatchToProps)(ToogleDayAndNightModeBtn)