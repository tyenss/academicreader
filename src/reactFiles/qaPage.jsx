import React from "react";
import excelReader from "../jsFiles/excelReader.js";
import global from "../jsFiles/globalVariables";
import QaTable from "./qaTable";
import ReactDOM from "react-dom";

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
    }

    componentDidMount()
    {
        // window.excelReader.counter=0;
        this.handleNext();
    }

    handleNext()
    {
        // console.log(window.excelReader);
        let temp=window.excelReader.getQuestionAnswer();
        // console.log(temp);
        this.setState(
            {
                question:temp.question,
                answer:temp.answer
            }
        )
    }

    getTable()
    {
        ReactDOM.render(<QaTable/>,document.getElementById("root"));
    }

    render()
    {

        return(
            <div id={"qaPage"}>
                <p className={"qa"}>{this.state.question}</p>
                <p className={"qa"}>{this.state.answer}</p>
                <button onClick={this.handleNext.bind(this)}>Next Question</button>
                <button onClick={this.getTable.bind(this)}>QuestionList</button>
            </div>
        );
    }
}