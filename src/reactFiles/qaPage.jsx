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

    //gets next question answer pair
    handleNext()
    {
        let temp=window.excelReader.getQuestionAnswer();
        this.setState(
            {
                question:temp.question,
                answer:temp.answer
            }
        )
    }

    //gets previous question answer pair
    handlePrevious()
    {
        let temp=window.excelReader.getQuestionAnswer();
        this.setState(
            {
                question:temp.question,
                answer:temp.answer
            }
        )
    }

    //Handles bonus questions and formats them
    handleBonus()
    {
        let temp=window.excelReader.getBonusQuestionAnswer();
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

    jumpToQuestion()
    {
        let number=document.getElementById("questionNumber").value;
        window.excelReader.counter=parseInt(number);
        this.handleNext();
    }

    render()
    {

        return(
            <div id={"qaPage"}>
                <p className={"qa"}>{this.state.question}</p>
                <p className={"qa"}>{this.state.answer}</p>
                <button onClick={this.handlePrevious.bind(this)}>Previous Question</button>
                <button onClick={this.handleNext.bind(this)}>Next Question</button>
                <button onClick={this.handleBonus.bind(this)}>Bonus Question</button>
                <button onClick={this.getTable.bind(this)}>QuestionList</button>
                {/*<button onClick={this.getTable.bind(this)}>QuestionList</button>*/}
                <form>
                    <input type={"text"} placeholder={"Go to question number"} id={"questionNumber"}></input>
                    <br/><input type="button" value="Submit" onClick={this.jumpToQuestion.bind(this)} id={"button"}/>
                </form>
            </div>
        );
    }
}