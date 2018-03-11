import React, { Component } from 'react'
import SingleChoiceItem from "./SingleChoiceItem.jsx"
import MultipleChoiceItem from "./MultipleChoiceItem.jsx"
import GapFillingItem from "./GapFillingItem.jsx"

let itemId = 0
const getItemId = () => (itemId++)

export default class QuestionsPage extends Component {
    render() {
        return (
            <div style={{ margin: "0 auto" }}>
                <h2>单选题</h2>
                {this.props.currentQuestions.singleChoice.map((questionInfo) => (
                    <SingleChoiceItem key={getItemId()} description={questionInfo.description}
                        choice={questionInfo.choice} />
                ))}
                <h2>多选题</h2>
                {this.props.currentQuestions.multipleChoice.map((questionInfo) => (
                    <MultipleChoiceItem key={getItemId()} description={questionInfo.description}
                        choice={questionInfo.choice} />
                ))}
                <h2>填空题</h2>
                {this.props.currentQuestions.gapFilling.map((questionInfo) => (
                    <GapFillingItem key={getItemId()} description={questionInfo.description} />
                ))}
            </div>
        )
    }

    componentDidMount() {
        console.log("did mount")
        console.log("did mount")
        console.log("did mount")
        console.log("did mount")
        console.log("did mount")
        console.log("did mount")
        console.log(this.props.didMount)
        this.props.didMount()
    }
}
