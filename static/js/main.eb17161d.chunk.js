(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t){},16:function(e,t,n){e.exports=n(41)},21:function(e,t,n){},28:function(e,t){},29:function(e,t){},39:function(e,t){},41:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(4),o=n.n(i),s=(n(21),n(2)),u=n(3),l=n(9),c=n(7),h=n(10),d=n(8),f=n.n(d),m=function(){function e(t,n){Object(s.a)(this,e),this.question=t,this.answer=n}return Object(u.a)(e,[{key:"getAnswer",value:function(){return this.answer}},{key:"getQuestion",value:function(){return this.question}}]),e}(),b=function(){function e(t){Object(s.a)(this,e),this.workbook=t,this.qaArray=[],this.shuffledQaArray=[],this.bonusQaArray=[],this.shuffledBonusQaArray=[],this.counter=0,this.bonusCounter=0,this.readExcel()}return Object(u.a)(e,[{key:"readExcel",value:function(){if(void 0!==this.workbook)for(var e=0;void 0!==this.workbook.SheetNames[e];){var t=this.workbook.Sheets[this.workbook.SheetNames[e]];if("Bonus"===this.workbook.SheetNames[e])for(var n=f.a.utils.sheet_to_json(t),r=0;r<n.length;r++){var a=new m(n[r].Questions,n[r].Answers);this.bonusQaArray.push(a)}else for(var i=f.a.utils.sheet_to_json(t),o=0;o<i.length;o++)if(void 0!==i[o].Questions&&void 0!==i[o].Answers&&""!==i[o].Questions&&""!==i[o].Answers){var s=new m(i[o].Questions,i[o].Answers);this.qaArray.push(s)}e++}}},{key:"shuffleArray",value:function(e){var t=n(30);this.qaArray=t.shuffle(this.qaArray,e)}},{key:"getQuestion",value:function(){return this.qaArray[this.counter].getQuestion()}},{key:"getAnswer",value:function(){return this.qaArray[this.counter].getAnswer()}},{key:"getQuestionAnswer",value:function(){if(!(this.counter>=this.qaArray.length))return this.counter++,console.log(this.counter),{question:this.getQuestion(),answer:this.getAnswer()};alert("No more questions left")}},{key:"getPreviousQuestionAnswer",value:function(){if(1===this.counter)alert("This is the first question");else{if(!(this.counter>=this.qaArray.length))return this.counter--,console.log(this.counter),{question:this.getQuestion(),answer:this.getAnswer()};alert("No more questions left")}}},{key:"getArray",value:function(){return this.qaArray}},{key:"getBonusArray",value:function(){return this.bonusQaArray}},{key:"getBonusQuestion",value:function(){return this.bonusQaArray[this.bonusCounter].getQuestion()}},{key:"getBonusAnswer",value:function(){return this.bonusQaArray[this.bonusCounter].getAnswer()}},{key:"getBonusQuestionAnswer",value:function(){if(!(this.bonusCounter>=this.bonusQaArray.length)){var e={question:this.getBonusQuestion(),answer:this.getBonusAnswer()};return this.bonusCounter++,e}alert("No more bonus questions left")}}]),e}(),w=function(e){function t(e){return Object(s.a)(this,t),Object(l.a)(this,Object(c.a)(t).call(this,e))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){if(!0===this.props.bool)for(var e=window.excelReader.getBonusArray(),t=0;t<e.length;t++){var n=document.getElementById("table").insertRow(t+1),r=n.insertCell(0),a=n.insertCell(1);r.innerHTML=e[t].question,a.innerHTML=e[t].answer}else for(var i=window.excelReader.getArray(),o=0;o<i.length;o++){var s=document.getElementById("table").insertRow(o+1),u=s.insertCell(0),l=s.insertCell(1);u.innerHTML=i[o].question,l.innerHTML=i[o].answer}}},{key:"handleQaPage",value:function(){o.a.render(a.a.createElement(v,null),document.getElementById("root"))}},{key:"render",value:function(){return a.a.createElement("div",{id:"qaTable"},a.a.createElement("table",{id:"table"},a.a.createElement("tbody",null,a.a.createElement("tr",{id:"firstRow"},a.a.createElement("th",null,"Question"),a.a.createElement("th",null,"Answer")))),a.a.createElement("button",{onClick:this.handleQaPage.bind(this),id:"button"},"Go Back"))}}]),t}(a.a.Component),v=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(c.a)(t).call(this,e))).state={question:"a",answer:"b"},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.handleNext()}},{key:"handleNext",value:function(){var e=window.excelReader.getQuestionAnswer();this.setState({question:e.question,answer:e.answer})}},{key:"handlePrevious",value:function(){var e=window.excelReader.getPreviousQuestionAnswer();void 0!==e&&this.setState({question:e.question,answer:e.answer})}},{key:"handleBonus",value:function(){var e=window.excelReader.getBonusQuestionAnswer();this.setState({question:e.question,answer:e.answer})}},{key:"getTable",value:function(e){o.a.render(a.a.createElement(w,{bool:e}),document.getElementById("root"))}},{key:"jumpToQuestion",value:function(){var e=document.getElementById("questionNumber").value;window.excelReader.counter=parseInt(e),this.handleNext()}},{key:"render",value:function(){return a.a.createElement("div",{id:"qaPage"},a.a.createElement("p",{className:"qa"},"Question",a.a.createElement("br",null),this.state.question),a.a.createElement("p",{className:"qa"},"Answer",a.a.createElement("br",null),this.state.answer),a.a.createElement("button",{onClick:this.handlePrevious.bind(this)},"Previous Question"),a.a.createElement("button",{onClick:this.handleNext.bind(this)},"Next Question"),a.a.createElement("button",{onClick:this.handleBonus.bind(this)},"Bonus Question"),a.a.createElement("button",{onClick:this.getTable.bind(this,!1)},"Get List of Lightning Questions"),a.a.createElement("button",{onClick:this.getTable.bind(this,!0)},"Get List of Bonus Questions"),a.a.createElement("form",null,a.a.createElement("input",{type:"text",placeholder:"Go to question number",id:"questionNumber"}),a.a.createElement("br",null),a.a.createElement("input",{type:"button",value:"Submit",onClick:this.jumpToQuestion.bind(this),id:"button"})))}}]),t}(a.a.Component),g=function(e){function t(e){return Object(s.a)(this,t),Object(l.a)(this,Object(c.a)(t).call(this,e))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"handleFiles",value:function(){window.excelReader=new b;var e=document.getElementById("fileInput"),t=new FileReader;t.onload=function(e){var t=f.a.read(e.target.result,{type:"array"});window.excelReader=new b(t),""!==document.getElementById("randomizerText").value&&window.excelReader.shuffleArray(document.getElementById("randomizerText").value),o.a.render(a.a.createElement(v,null),document.getElementById("root"))},t.readAsArrayBuffer(e.files[0])}},{key:"dropHandler",value:function(e){if(console.log("File(s) dropped"),e.preventDefault(),e.dataTransfer.items){for(var t=0;t<e.dataTransfer.items.length;t++)if("file"===e.dataTransfer.items[t].kind){var n=e.dataTransfer.items[t].getAsFile();console.log("... file["+t+"].name = "+n.name)}}else for(var r=0;r<e.dataTransfer.files.length;r++)console.log("... file["+r+"].name = "+e.dataTransfer.files[r].name);e.dataTransfer.items?e.dataTransfer.items.clear():e.dataTransfer.clearData()}},{key:"dragOverHandler",value:function(e){console.log("File(s) in drop zone"),e.preventDefault()}},{key:"render",value:function(){return a.a.createElement("div",{id:"firstPage"},a.a.createElement("h1",null,"Get File"),a.a.createElement("form",{id:"getPage",ondrop:this.dropHandler.bind(this),ondragover:this.dragOverHandler.bind(this)},a.a.createElement("input",{type:"file",name:"file",accept:".xlsx,.xls,csv",id:"fileInput"}),a.a.createElement("input",{type:"text",placeholder:"Seed randomizer",id:"randomizerText"}),a.a.createElement("br",null),a.a.createElement("input",{type:"button",value:"Submit",onClick:this.handleFiles.bind(this),id:"button"})))}}]),t}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,2,1]]]);
//# sourceMappingURL=main.eb17161d.chunk.js.map