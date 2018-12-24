import React from "react";
import excelReader from "../jsFiles/excelReader.js";
import global from "../jsFiles/globalVariables";

export default class QaTable extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    componentDidMount()
    {
        let x=window.excelReader.getArray();
        console.log(x);
        for (let i=0;i<x.length;i++)
        {
            let table=document.getElementById("table");
            let row=table.insertRow(i+1);
            let cell1=row.insertCell(0);
            let cell2=row.insertCell(1);
            cell1.innerHTML=x[i].question;
            cell2.innerHTML=x[i].answer;

        }
    }

    handleQaPage()
    {

    }

    render()
    {
        return(
            <div id={"qaTable"}>
                <table id={"table"}>
                    <tr id={"firstRow"}>
                        <th>Question</th>
                        <th>Answer</th>
                    </tr>
                </table>
                <button onClick={this.handleQaPage.bind(this)}>Go Back</button>
            </div>
        );
    }
}