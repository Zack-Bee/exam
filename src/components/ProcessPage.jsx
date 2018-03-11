import React, { Component } from "react"
import LinearProgress from "material-ui/LinearProgress"

const ProgressPage = ({ text, display = "none" }) => (
    <div className="cover" style={{
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        width: "100vw",
        height: "100vh",
        position: "fixed",
        zIndex: "3",
        top: "0",
        left: "0",
        display: display
    }}>
        <div style={{
            position: "absolute",
            left: "50%",
            width: "60vw",
            height: "20vh",
            top: "50%",
            transform: "translate(-50%, -50%)"
        }}>
            <p style={{
                color: "rgba(255, 255, 255, 0.8)",
                textAlign: "center"
            }}>{text}</p>
            <LinearProgress />
        </div>
    </div>
)

export default ProgressPage