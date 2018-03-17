import { SET_FILE_NAME } from "../actions/setFileName"
export default (fileName = "", action) => {
    switch (action.type) {
        case SET_FILE_NAME: {
            return action.fileName
        }
        default: {
            return fileName
        }
    }
}