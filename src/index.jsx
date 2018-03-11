import React, { Component } from "react"
import ReactDOM from "react-dom"
import reducer from "./reducers/index"
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import AppBar from "material-ui/AppBar"
import Paper from "material-ui/Paper"
import ToogleThemeBtn from "./containers/ToogleThemeBtn.jsx"
import ThemeProvider from "./containers/ThemeProvider.jsx"
import Pages from "./containers/Pages.jsx"
import "./css/index.css"

const store = createStore(reducer)

const style = {
    position: "fixed",
    right: 20,
    bottom: 20,
    zIndex: 9998
};

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ThemeProvider>
                    <React.Fragment>
                        <ToogleThemeBtn style={style} store={store} />
                        <AppBar />
                        <Paper zDepth={0}><Pages /></Paper>
                    </React.Fragment>
                </ThemeProvider>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("app"))

