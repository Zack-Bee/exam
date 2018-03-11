import React, { Component } from "react"
import LocalFileList from "./LocalFileList.jsx"
import List from "material-ui/List/List"

export default class FilesPage extends Component {
    render() {
        return (
            <div style={{margin: "0 auto"}}>
                <List>
                    <LocalFileList />
                </List>
            </div>
        )
    }
}
