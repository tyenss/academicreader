import React from "react";
import XLSX from "xlsx";
import excelReader from "../jsFiles/excelReader.js"
import QAPage from "../reactFiles/qaPage";
import ReactDOM from 'react-dom';
import global from "../jsFiles/globalVariables";


export default class FileChooser extends React.Component {
    constructor(props) {
        super(props);
    }

    handleFiles() {
        window.excelReader = new excelReader();
        let e = document.getElementById("fileInput");
        let reader = new FileReader();
        reader.onload = function (e) {
            var oFile = XLSX.read(e.target.result, {type: 'array'});//, cellDates:true, cellStyles:true
            window.excelReader = new excelReader(oFile);
            if (document.getElementById("randomizerText").value!=="")
            {
                window.excelReader.shuffleArray(document.getElementById("randomizerText").value);
            }
            // console.log(window.excelReader);
            ReactDOM.render(<QAPage/>, document.getElementById("root"));
        }
        reader.readAsArrayBuffer(e.files[0]);
        // console.log(window.excelReader);

    }

    dropHandler(ev) {
        console.log('File(s) dropped');

        // Prevent default behavior (Prevent file from being opened)
        ev.preventDefault();

        if (ev.dataTransfer.items) {
            // Use DataTransferItemList interface to access the file(s)
            for (var i = 0; i < ev.dataTransfer.items.length; i++) {
                // If dropped items aren't files, reject them
                if (ev.dataTransfer.items[i].kind === 'file')
                {
                    var file = ev.dataTransfer.items[i].getAsFile();
                    console.log('... file[' + i + '].name = ' + file.name);
                }
            }
        } else {
            // Use DataTransfer interface to access the file(s)
            for (var i = 0; i < ev.dataTransfer.files.length; i++) {
                console.log('... file[' + i + '].name = ' + ev.dataTransfer.files[i].name);
            }
        }

        // Pass event to removeDragData for cleanup
        if (ev.dataTransfer.items) {
            // Use DataTransferItemList interface to remove the drag data
            ev.dataTransfer.items.clear();
        } else {
            // Use DataTransfer interface to remove the drag data
            ev.dataTransfer.clearData();
        }
    }

    dragOverHandler(ev)
    {
        console.log('File(s) in drop zone');

        // Prevent default behavior (Prevent file from being opened)
        ev.preventDefault();
    }

    render()
    {
        return (
            <div id={"firstPage"}>
                <h1>Get File</h1>
                <form id={"getPage"} ondrop={this.dropHandler.bind(this)} ondragover={this.dragOverHandler.bind(this)}>
                    <input type="file" name="file" accept={".xlsx,.xls,csv"} id={"fileInput"}></input>
                    <input type={"text"} placeholder={"Seed randomizer"} id={"randomizerText"}></input>
                    <br/><input type="button" value="Submit" onClick={this.handleFiles.bind(this)} id={"button"}/>
                </form>


            </div>
        );
    }
}