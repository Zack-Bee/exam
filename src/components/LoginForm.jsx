import React, { Component } from "react"
import TextField from 'material-ui/TextField/TextField'

class LoginForm extends Component {
    render() {
        return (
            <div style={{
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                width: "100vw",
                height: "100vh",
                position: "fixed",
                zIndex: "3",
                top: "0",
                left: "0"
            }}>
                <div style={{
                    position: "absolute",
                    left: "50%",
                    width: "60vw",
                    height: "20vh",
                    top: "50%",
                    transform: "translate(-50%, -50%)"
                }}> 
                    <TextFiled/>
                    <TextFiled/>
                </div>
            </div>
        )
    }
}