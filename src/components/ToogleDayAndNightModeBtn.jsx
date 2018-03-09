import React, { Component } from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import Light from "material-ui/svg-icons/image/wb-sunny"
import Dark from "material-ui/svg-icons/image/brightness-2"
import { yellow500, cyan500, cyan700, blueGrey500 } from "material-ui/styles/colors"

class ToogleDayAndNightModeBtn extends Component {
    render() {
        console.log("render theme btn")
        return (
            <FloatingActionButton style={this.props.style}
                iconStyle={{ fill: this.state.iconColor }}
                backgroundColor={this.state.backgroundColor}
                onClick={() => {
                    this.toogleDayAndNight()
                    this.props.toogleTheme()
                }}>
                {this.state.mode === "light" ? <Light />
                    : <Dark />}
            </FloatingActionButton>
        )
    }

    constructor(props) {
        super(props)
        this.state = {
            mode: "light",
            backgroundColor: cyan500,
            iconColor: yellow500
        }

        this.toogleDayAndNight = this.toogleDayAndNight.bind(this)
    }

    toogleDayAndNight() {
        if (this.state.mode === "light") {
            this.setState({
                mode: "dark",
                backgroundColor: blueGrey500,
                iconColor: cyan700
            })
        } else {
            this.setState({
                mode: "light",
                backgroundColor: cyan500,
                iconColor: yellow500
            })
        }
    }
}

export default ToogleDayAndNightModeBtn