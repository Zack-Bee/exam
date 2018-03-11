import { CHANGE_THEME_TO_DARK, CHANGE_THEME_TO_LIGHT } from
    "../actions/toogleTheme.js"
import darkBaseTheme from "material-ui/styles/baseThemes/darkBaseTheme"
import getMuiTheme from "material-ui/styles/getMuiTheme"
import lightBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme"
import { TOOGLE_THEME } from "../actions/toogleTheme"

const lightTheme = getMuiTheme(lightBaseTheme)
const darkTheme = getMuiTheme(darkBaseTheme)

const theme = (theme = lightTheme, action) => {
    switch (action.type) {
        case TOOGLE_THEME: {
            return theme === lightTheme ? darkTheme : lightTheme
        }
        default: {
            return theme
        }
    }
}

export default theme