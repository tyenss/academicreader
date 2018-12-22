import XLSX from "xlsx";
import React from 'react';
import ReactDOM from 'react-dom';
import questionAnswer from "./questionAnswer.js";
import QAPage from "../reactFiles/qaPage";

export default class excelReader
{
    constructor(workbook)
    {
        this.workbook=workbook;
        this.qaArray=[];
        this.counter=0;
        this.readExcel();
    }
    readExcel()
    {
        if (!(this.workbook===undefined))
        {
            let worksheet=this.workbook.Sheets[this.workbook.SheetNames[0]];
            let tempJSON=XLSX.utils.sheet_to_json(worksheet);
            // console.log(new questionAnswer(tempJSON[0].Questions,tempJSON[0].Answers));
            for (let i=0;i<tempJSON.length;i++)
            {
                let temp=new questionAnswer(tempJSON[i].Questions,tempJSON[i].Answers);
                this.qaArray.push(temp);
            }
        }

        // console.log(this.qaArray);

    }

    getQuestion()
    {
        let tempCount=this.counter;
        console.log(this.qaArray);
        return this.qaArray[tempCount].getQuestion();
    }

    getAnswer()
    {
        let tempCount=this.counter;
        return this.qaArray[this.counter].getAnswer();
    }

    getQuestionAnswer()
    {
        let temp={question:this.getQuestion(),answer:this.getAnswer()};
        this.counter++;
        return temp;
    }

}