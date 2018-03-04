import { connect } from "react-redux"
import delLocalFile from "../actions/delLocalFile"
import FileItem from "../components/FileItem.jsx"

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => {

    },
    onIconButtonClick: () => {
        console.log(ownProps)
        dispatch(delLocalFile(ownProps.itemId))
    }
})

const LocalFileItem = connect(null, mapDispatchToProps, null, { pure: false })(FileItem)
export default LocalFileItem