import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainPage from './reactFiles/mainPage';
import * as serviceWorker from './serviceWorker';
import XLSX from "xlsx";


// document.addEventListener('DOMContentLoaded', function()
// {
    ReactDOM.render(<MainPage />, document.getElementById('root'));
//     document.getElementById("fileInput").change(function(e)
//     {
//         let reader = new FileReader();
//         reader.readAsArrayBuffer(e.target.files[0]);
//         reader.onload = function(e)
//         {
//             var data = new Uint8Array(reader.result);
//             var wb = XLSX.read(data,{type:'array'});
//             alert(wb);
//             XLSX.utils.sheet_to_json(wb);
//             //var htmlstr = XLSX.write(wb,{sheet:"sheet no1", type:'binary',bookType:'html'});
//
//         }
//     });
//     // your code goes here
// }, false);




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
