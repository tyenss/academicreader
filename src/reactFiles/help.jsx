import React from "react";
import XLSX from "xlsx";
import excelReader from "../jsFiles/excelReader.js"
import QAPage from "../reactFiles/qaPage";
import ReactDOM from 'react-dom';
import global from "../jsFiles/globalVariables";


export default class FileChooser extends React.Component {
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return (
            <div id={"firstPage"}>
                <p>
                    Excel sheet must be layed out in the following manner:
                    <br/> Cell A1 must be labeled "Answers"
                    <br/> Cell A2 must be labeled "Questions"
                    <br/> The questions must be in the first column
                    <br/> The answers associated with a question must be in the second column
                    <br/> The sheet with the bonus questions must be named "Bonus", capitalization does not matter</p>
                <p>
                    If you want a randomized question list that is consistent among different sessions,
                    type the same seed, capitalization matters, between the sessions
                </p>


            </div>
        );
    }
}