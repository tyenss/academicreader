import React from "react";
import excelReader from "../jsFiles/excelReader.js";
import global from "../jsFiles/globalVariables";

export default class QAPage extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state=
        {
            question:"a",
            answer:"b"
        };
        this.handleNext();
    }

    handleNext()
    {
        // console.log(window.excelReader);
        let temp=window.excelReader.getQuestionAnswer();
        console.log(temp);
        this.setState(
            {
                question:temp.question,
                answer:temp.answer
            }
        )
    }

    render()
    {

        return(
            <div>
                <p>{this.state.question}</p>
                <p>{this.state.answer}</p>
                <button onClick={this.handleNext.bind(this)}>Next Question</button>
            </div>
        );
    }
}