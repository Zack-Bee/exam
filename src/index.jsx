import React, { Component } from "react"
import ReactDOM from "react-dom"
import AppBar from "material-ui/AppBar"
import "./css/index.css"
import reducer from "./reducers/index"
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import ThemeProvider from "./containers/ThemeProvider.jsx"
import ToogleThemeBtn from "./containers/ToogleThemeBtn.jsx"
import FileList from "./components/FileList.jsx"
import Paper from "material-ui/Paper"

const store = createStore(reducer)

const style = {
    position: "fixed",
    right: 20,
    bottom: 20
};

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ThemeProvider>
                    <Paper zDepth={0}>
                        <ToogleThemeBtn style={style} />
                        <AppBar />
                        <FileList />
                    </Paper>
                </ThemeProvider>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("app"))

