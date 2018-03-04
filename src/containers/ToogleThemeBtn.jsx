import React from "react"
import ToogleDayAndNightModeBtn from "../components/ToogleDayAndNightModeBtn.jsx"
import { connect } from "react-redux"
import { toogleTheme } from "../actions/toogleTheme"

const mapDispatchToProps = (dispatch, ownProps) => ({
    toogleTheme() {
        console.log(ownProps.store.getState())
        dispatch(toogleTheme)
    }
})

export default connect(null, mapDispatchToProps, null, {pure: false})(ToogleDayAndNightModeBtn)