import React from 'react'
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import { connect } from "react-redux"

const mapStateToProps = (state) => ({
    muiTheme: state.theme
})

let ThemeProvider = ({muiTheme, children}) => (
    <MuiThemeProvider muiTheme={muiTheme}>
        {children}
    </MuiThemeProvider>
)

export default connect(mapStateToProps)(ThemeProvider)