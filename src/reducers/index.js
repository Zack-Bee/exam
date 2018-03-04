import { combineReducers } from "redux"
import theme from "./theme"
import localFiles from "./localFiles"

export default combineReducers({
    theme,
    localFiles
})