import { SET_ONLINE_FILE } from "../actions/setOnlineFile"
import { DEL_ONLINE_FILE } from "../actions/delOnlineFile"

export default (onlineFiles = [], action) => {
    switch (action.type) {
        case SET_ONLINE_FILE: {
            return [...action.onlineFiles]
        }
        case DEL_ONLINE_FILE: {
            return onlineFiles.filter((fileInfo) => (
                !(fileInfo.fileName === action.fileName)
            ))
        }
        default: {
            return onlineFiles
        }
    }
}