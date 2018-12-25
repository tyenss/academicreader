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
        this.shuffledQaArray=[];
        this.bonusQaArray=[];
        this.shuffledBonusQaArray=[];
        this.counter=0;
        this.readExcel();
    }
    readExcel()
    {
        if (!(this.workbook===undefined))
        {
            let counter=0;

            while (this.workbook.SheetNames[counter]!==undefined)
            {
                // console.log(this.workbook.SheetNames[counter]);
            let worksheet=this.workbook.Sheets[this.workbook.SheetNames[counter]];
                if (this.workbook.SheetNames==="Bonus")
                {
                    let tempJSON=XLSX.utils.sheet_to_json(worksheet);
                    for (let i=0;i<tempJSON.length;i++)
                    {
                        let temp=new questionAnswer(tempJSON[i].Questions,tempJSON[i].Answers);
                        this.bonusQaArray.push(temp);
                    }
                } else
                {
            let tempJSON=XLSX.utils.sheet_to_json(worksheet);
                // console.log(tempJSON[0].Questions);
                // console.log(new questionAnswer(tempJSON[0].Questions,tempJSON[0].Answers));
            for (let i=0;i<tempJSON.length;i++)
            {
                let temp=new questionAnswer(tempJSON[i].Questions,tempJSON[i].Answers);
                this.qaArray.push(temp);
                // console.log(this.qaArray);
            }
            // console.log(this.qaArray);
                }
                counter++;
            }
        }
        // console.log(this.qaArray);
    //
    // console.log(this.qaArray);
    }

    shuffleArray(seed)
    {
        let shuffleSeed = require('shuffle-seed');
        this.qaArray=shuffleSeed.shuffle(this.qaArray,seed);
        console.log(this.qaArray);
    }

    getQuestion()
    {
        return this.qaArray[this.counter].getQuestion();
    }

    getAnswer()
    {
        return this.qaArray[this.counter].getAnswer();
    }

    getQuestionAnswer()
    {
        if (this.counter>=this.qaArray.length)
        {
            alert("No more questions left");
        } else
        {
            let temp={question:this.getQuestion(),answer:this.getAnswer()};
            this.counter++;
            return temp;
        }
    }

    getArray()
    {
        return this.qaArray;
    }

}