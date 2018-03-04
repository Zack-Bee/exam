export const ADD_LOCAL_FILE = "ADD_LOCAL_FILE"
export default (itemId, file, fileName) => ({
    type: ADD_LOCAL_FILE,
    itemId,
    file,
    fileName
})