import React, { Component } from "react"
import ReactDOM from "react-dom"
import reducer from "./reducers/index"
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import AppBar from "material-ui/AppBar"
import Paper from "material-ui/Paper"
import Pages from "./containers/Pages.jsx"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import "./css/index.css"

const store = createStore(reducer)

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <MuiThemeProvider>
                    <React.Fragment>
                        <AppBar />
                        <Pages />
                    </React.Fragment>
                </MuiThemeProvider>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("app"))

