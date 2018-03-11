import { ADD_LOCAL_FILE } from "../actions/addLocalFile"
import { DEL_LOCAL_FILE } from "../actions/delLocalFile"
import { LOAD_QUESTIONS } from "../actions/loadQuestions"
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
        case LOAD_QUESTIONS: {
            return localFiles.map((fileInfo) => {
                if (fileInfo.itemId === action.itemId) {
                    fileInfo.questions = action.questions
                }
                
                return fileInfo
            })
        }
        default: {
            return localFiles
        }
    }
}

export default localFiles