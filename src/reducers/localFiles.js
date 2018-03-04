import { ADD_LOCAL_FILE } from "../actions/addLocalFile"
import { DEL_LOCAL_FILE } from "../actions/delLocalFile"
const localFiles = (localFiles = [], action) => {
    switch (action.type) {
        case ADD_LOCAL_FILE: {
            return [
                ...localFiles,
                {
                    file: action.file,
                    fileName: action.fileName,
                    itemId: action.itemId
                }
            ]
        }
        case DEL_LOCAL_FILE: {
            return localFiles.filter((fileInfo) => (
                action.itemId !== fileInfo.itemId
            ))
        }
        default: {
            return localFiles
        }
    }
}

export default localFiles