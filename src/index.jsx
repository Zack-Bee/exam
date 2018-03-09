import React, { Component } from "react"
import ReactDOM from "react-dom"
import reducer from "./reducers/index"
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import AppBar from "material-ui/AppBar"
import Paper from "material-ui/Paper"
import { List, ListItem } from "material-ui/List"
import ToogleThemeBtn from "./containers/ToogleThemeBtn.jsx"
import ThemeProvider from "./containers/ThemeProvider.jsx"
import LocalFileList from "./containers/LocalFileList.jsx"
import "./css/index.css"

const store = createStore(reducer)

const style = {
    position: "fixed",
    right: 20,
    bottom: 20,
    zIndex: 2
};

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ThemeProvider>
                    <Paper zDepth={0}>
                        <ToogleThemeBtn style={style} store={store} />
                        <AppBar />
                        <List>
                            <LocalFileList/>
                        </List>
                    </Paper>
                </ThemeProvider>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("app"))

