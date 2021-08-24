import{R as e,r as t,a,b as n}from"./vendor.6a8a3904.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const a of e)if("childList"===a.type)for(const e of a.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();function l(a){console.log("calling piechart"),console.log("props",a.data);let n=e.createRef(null),l={width:a.width?a.width:200,height:a.height?a.height:200,padding:a.padding?a.padding:50};const r=[...a.data];let c=d3.pie().sort(null).value((e=>e.value)),s=d3.arc().innerRadius(0).outerRadius(Math.min(l.width,l.height)/2-1);return t.exports.useEffect((function(){if(!n.current||!r)return;d3.select(n.current).append("g").attr("id","pieChart-"+a.name).attr("class","chart-content").attr("transform",`translate(\n      ${l.width/2+l.padding},\n      ${l.height/2+l.padding})`)}),[]),t.exports.useEffect((function(){if(console.log("update effect"),!n.current||!r)return;const e=d3.sum(r,(e=>e.value));100-e>0&&r.push({name:"$empty",value:100-e,color:"#7f8187"});const t=c(r);d3.select("#pieChart-"+a.name).selectAll("path").data(t).join("path").on("mouseover",((e,t)=>function(e,t){if("$empty"==t.data.name)return;let n=d3.pointer(e);d3.select(e.currentTarget).transition().duration(200).attr("transform","scale(1.1)");const l=d3.select("#pieChart-"+a.name);l.select("#chart-tooltip").remove(),l.append("text").attr("x",n[0]).attr("y",n[1]-20).attr("fill","fill",function(e){let t=0;for(let a=1;a<e.length;a+=2){t+=parseInt(`0x${e[a]}${e[a+1]}`)}return t/=3,t}(t.data.color)>150?"#000000":"#ffffff").attr("text-anchor","middle").attr("id","chart-tooltip").text(`${t.data.name} ${t.data.value.toFixed(2)}%`)}(e,t))).on("mouseout",((e,t)=>function(e,t){if("$empty"==t.data.name)return;d3.select(e.currentTarget).transition().duration(200).attr("transform","scale(1)");d3.select("#pieChart").select("#chart-tooltip").remove()}(e,t))).transition().duration(500).attr("fill",(e=>e.data.color)).attr("transform",(e=>"$empty"==e.data.name?"scale(0.95)":"")).attr("d",s)}),[a.data,n.current]),e.createElement("svg",{className:"pie-chart",width:l.width+2*l.padding,height:l.height+2*l.padding,ref:n})}const r=["Medical","StudentFees","State","Tuition","ResearchGrants","PellGrants","Dorms","Gifts"];function c(e){return r.indexOf(e)}function s(e){return Number(e)}function i(t){const n=e=>{""==e.target.value&&(e.target.value=0)},l=e=>{e.target.value=Number(e.target.value),0==e.target.value&&(e.target.value="")},r=e=>{e.target.value=Number(e.target.value),0==e.target.value?e.target.style.color="#808080":e.target.style.color="white",t.parentUpdate(e.target.id,Number(e.target.value))};return e.createElement(e.Fragment,null,e.createElement("div",{class:"catcont"},e.createElement("span",{class:"category"},"Function"),e.createElement("span",{class:"category",id:"top"}," Percentage(%)")),e.createElement("div",{class:"labelAndInputContainer"},e.createElement("div",{class:"functionAndCircle"},e.createElement("div",{class:"functionCircleMedical"}),e.createElement("div",{class:"input-boxRev"},e.createElement("span",{class:"input"},"Medical Center"),e.createElement("div",{"data-tip":!0,"data-for":"global",class:"infocircle"},e.createElement("p",{class:"infoTipText"},"i"))),e.createElement(a,{id:"global",className:"tool"},e.createElement("p",null,"A large, not-for-profit regional medical center, including multiple hospitals, labs and clinics. Income comes from patients, medical insurance companies, and government programs like medicare."))),e.createElement("div",{className:"textInputContainer"},e.createElement("input",{type:"number",value:s(t.data[c("Medical")].value),className:"textInputBox",id:"Medical",onChange:r,onClick:l,onBlur:n}),e.createElement("span",null,"%"))),e.createElement("div",{class:"labelAndInputContainer"},e.createElement("div",{class:"functionAndCircle"},e.createElement("div",{class:"functionCircleSF"}),e.createElement("div",{class:"input-boxRev"},e.createElement("span",{class:"input"},"Student Fees"),e.createElement("div",{"data-tip":!0,"data-for":"global2",class:"infocircle"},e.createElement("p",{class:"infoTipText"},"i"))),e.createElement(a,{id:"global2",className:"tool"},e.createElement("p",null,"Fees are dedicated to specific services, such as athletic facilities, bus service (UNITRANS), student organizations, the CoHo and Student Community Center, etc."))),e.createElement("div",{class:"textInputContainer"},e.createElement("input",{type:"number",value:s(t.data[c("StudentFees")].value),className:"textInputBox",id:"StudentFees",onChange:r,onClick:l,onBlur:n}),e.createElement("span",null,"%"))),e.createElement("div",{class:"labelAndInputContainer"},e.createElement("div",{class:"functionAndCircle"},e.createElement("div",{class:"functionCircleSOC"}),e.createElement("div",{class:"input-boxRev"},e.createElement("span",{class:"input"},"State of California"),e.createElement("div",{"data-tip":!0,"data-for":"global4",class:"infocircle"},e.createElement("p",{class:"infoTipText"},"i"))),e.createElement(a,{id:"global4",className:"tool"},e.createElement("p",null,"General funds given by the taxpayers of California, appropriated annualy by the state legislature. General funds are not dedicated to specific services."))),e.createElement("div",{class:"textInputContainer"},e.createElement("input",{type:"number",value:s(t.data[c("State")].value),className:"textInputBox",id:"State",onChange:r,onClick:l,onBlur:n}),e.createElement("span",null,"%"))),e.createElement("div",{class:"labelAndInputContainer"},e.createElement("div",{class:"functionAndCircle"},e.createElement("div",{class:"functionCircleTuition"}),e.createElement("div",{class:"input-boxRev"},e.createElement("span",{class:"input"},"Tuition "),e.createElement("div",{"data-tip":!0,"data-for":"global3",class:"infocircle"},e.createElement("p",{class:"infoTipText"},"i"))),e.createElement(a,{id:"global3",className:"tool"},e.createElement("p",null,"Students pay tuition to attend the University. Non-California residents pay about twice as much as residents.  Tuition is also general funds."))),e.createElement("div",{class:"textInputContainer"},e.createElement("input",{type:"number",value:s(t.data[c("Tuition")].value),className:"textInputBox",id:"Tuition",onChange:r,onClick:l,onBlur:n}),e.createElement("span",null,"%"))),e.createElement("div",{class:"labelAndInputContainer"},e.createElement("div",{class:"functionAndCircle"},e.createElement("div",{class:"functionCircleResearch"}),e.createElement("div",{class:"input-boxRev"},e.createElement("span",{class:"input"},"Research Grants and Contracts"),e.createElement("div",{"data-tip":!0,"data-for":"global5",class:"infocircle"},e.createElement("p",{class:"infoTipText"},"i"))),e.createElement(a,{id:"global5",className:"tool"},e.createElement("p",null,"Government and industry funds given to faculty and graduate students to perform research projects. These include up to 50% overhead in addition to the cost of the research. "))),e.createElement("div",{class:"textInputContainer"},e.createElement("input",{type:"number",value:s(t.data[c("ResearchGrants")].value),className:"textInputBox",id:"ResearchGrants",onChange:r,onClick:l,onBlur:n}),e.createElement("span",null,"%"))),e.createElement("div",{class:"labelAndInputContainer"},e.createElement("div",{class:"functionAndCircle"},e.createElement("div",{class:"functionCirclePell"}),e.createElement("div",{class:"input-boxRev"},e.createElement("span",{class:"input"},"Pell",e.createElement("br",null)," Grants"),e.createElement("div",{"data-tip":!0,"data-for":"global6",class:"infocircle"},e.createElement("p",{class:"infoTipText"},"i"))),e.createElement(a,{id:"global6",className:"tool"},e.createElement("p",null,"Federal grants for tuition and living expenses for low-income students. Percentage of students with Pell grants is a good way to measure who a University serves; at UCD, it's 34%; at Cal Tech it's 14%; at Sac State it's 71%."))),e.createElement("div",{class:"textInputContainer"},e.createElement("input",{type:"number",value:s(t.data[c("PellGrants")].value),className:"textInputBox",id:"PellGrants",onChange:r,onClick:l,onBlur:n}),e.createElement("span",null,"%"))),e.createElement("div",{class:"labelAndInputContainer"},e.createElement("div",{class:"functionAndCircle"},e.createElement("div",{class:"functionCircleDorms"}),e.createElement("div",{class:"input-boxRev"},e.createElement("span",{class:"input"},"Dorms, Dining, and Other "),e.createElement("span",{class:"input"},"Services"),e.createElement("div",{"data-tip":!0,"data-for":"global7",class:"infocircle"},e.createElement("p",{class:"infoTipText"},"i"))),e.createElement(a,{id:"global7",className:"tool"},e.createElement("p",null,"Services other than education that people pay for, like dorms, dining, parking, etc.  At UC Davis, this also includes almost $500M of revenue generated by medical school faculty, or 8%, making this category look really big."))),e.createElement("div",{class:"textInputContainer"},e.createElement("input",{type:"number",value:s(t.data[c("Dorms")].value),className:"textInputBox",id:"Dorms",onChange:r,onClick:l,onBlur:n}),e.createElement("span",null,"%"))),e.createElement("div",{class:"labelAndInputContainer"},e.createElement("div",{class:"functionAndCircle"},e.createElement("div",{class:"functionCircleGifts"}),e.createElement("div",{class:"input-boxRev"},e.createElement("span",{class:"input"},"Gifts, Endowments, Interest, Other"),e.createElement("div",{"data-tip":!0,"data-for":"global8",class:"infocircle"},e.createElement("p",{class:"infoTipText"},"i"))),e.createElement(a,{id:"global8",className:"tool"},e.createElement("p",null,"Endowments are past gifts that were invested to provide income; interest is earned on other savings. The Museum is the direct result of a $10M gift from Jan Shrem and Maria Manetti Shrem."))),e.createElement("div",{class:"textInputContainer"},e.createElement("input",{type:"number",value:s(t.data[c("Gifts")].value),className:"textInputBox",id:"Gifts",onChange:r,onClick:l,onBlur:n}),e.createElement("span",null,"%"))),e.createElement("div",{class:"totalContainer"},e.createElement("div",{class:"testContainer"},e.createElement("div",{class:"totalLabel"}," ",e.createElement("span",{class:"input"}," Total % ")," "),e.createElement("div",{class:"textInputContainerCopy"},e.createElement("p",{class:"textInputBox",id:"totval"},Number(s(t.data[c("Medical")].value))+Number(s(t.data[c("StudentFees")].value))+Number(s(t.data[c("Tuition")].value))+Number(s(t.data[c("State")].value))+Number(s(t.data[c("ResearchGrants")].value))+Number(s(t.data[c("PellGrants")].value))+Number(s(t.data[c("Dorms")].value))+Number(s(t.data[c("Gifts")].value))),e.createElement("div",{id:"percent"},"%"))," ")))}function o(a){const[n,r]=t.exports.useState([{name:"Medical Center",value:0,color:"#f0bf00"},{name:"Student Fees",value:0,color:"#f6e50e"},{name:"State of California",value:0,color:"#fff688"},{name:"Tuition",value:0,color:"#5f63ec"},{name:"Research Grants and Contracts",value:0,color:"#71a8ff"},{name:"Pell Grants",value:0,color:"#58c9fb"},{name:"Dorms, Dining, and Other  Services",value:0,color:"#0f7ab4"},{name:"Gifts, Endowments, Interest, Other",value:0,color:"#d4e4ff"}]);return e.createElement(e.Fragment,null,e.createElement("div",{class:"headerAndPiChart"},2==a.state&&e.createElement("h2",{class:"resultsHeader"},"RESULTS"),0==a.state&&e.createElement("h2",{class:"boldedText"},"UC Davis Revenues"),2==a.state&&e.createElement("h3",{class:"textResultsPage"},"Your Revenue Guess"),e.createElement(l,{name:"pie1",data:n})),e.createElement("div",{class:"centercont"},2==a.state&&e.createElement("h3",{class:"textResultsPage"},"Actual Revenue ")),e.createElement("div",{class:"centercont"},2==a.state&&e.createElement(l,{name:"pie2",data:[{name:"Medical Center",value:45,color:"#f0bf00"},{name:"Student Fees",value:4,color:"#f6e50e"},{name:"State of California",value:8,color:"#fff688"},{name:"Tuition",value:11,color:"#5f63ec"},{name:"Research Grants and Contracts",value:13,color:"#71a8ff"},{name:"Pell Grants",value:6,color:"#58c9fb"},{name:"Dorms, Dining, and Other  Services",value:11,color:"#0f7ab4"},{name:"Gifts, Endowments, Interest, Other",value:7,color:"#d4e4ff"}]})),e.createElement("div",null,0==a.state&&e.createElement(i,{data:n,parentUpdate:(e,t)=>{var a=n.map((e=>e)),l=function(e,t,a){for(var n=0,l=a,r=0;r<e.length;r++)r!=t&&(n+=e[r].value);return+n+ +l>100&&(l=100-n),l}(a,c(e),t);a[c(e)].value=l,r(a)}})))}const u=["Medical","Teaching","Research","Student","Operations","Administration","Services","Public","Interest"];function d(e){return u.indexOf(e)}function m(e){var t=Number(e);return console.log(e),t}function p(t){const n=e=>{""==e.target.value&&(e.target.value=0)},l=e=>{e.target.value=Number(e.target.value),0==e.target.value&&(e.target.value="")},r=e=>{e.target.value=Number(e.target.value),console.log("value ",e.target.value),0==e.target.value?e.target.style.color="#808080":e.target.style.color="white",t.parentUpdate(e.target.id,Number(e.target.value))};return e.createElement(e.Fragment,null,e.createElement("div",{class:"catcont"},e.createElement("span",{class:"category"},"Function"),e.createElement("span",{class:"category",id:"top"}," Percentage(%)")),e.createElement("div",{class:"labelAndInputContainer"},e.createElement("div",{class:"functionAndCircle"},e.createElement("div",{class:"functionCircleMedical"}),e.createElement("div",{class:"input-boxExp"},e.createElement("span",{class:"input"},"Medical Center"),e.createElement("div",{"data-tip":!0,"data-for":"global",class:"infocircle"},e.createElement("p",{class:"infoTipText"},"i"))),e.createElement(a,{id:"global",className:"tool"},e.createElement("p",null,"The cost of providing care at the Medical Center is roughly what we get paid to provide it."))),e.createElement("div",{class:"textInputContainer"},e.createElement("input",{type:"number",value:m(t.data[d("Medical")].value),id:"Medical",className:"textInputBox",onChange:r,onClick:l,onBlur:n}),e.createElement("span",null,"%"))),e.createElement("div",{class:"labelAndInputContainer"},e.createElement("div",{class:"functionAndCircle"},e.createElement("div",{class:"functionCircleSF"}),e.createElement("div",{class:"input-boxExp"},e.createElement("span",{class:"input"},"Teaching and Teaching Support"),e.createElement("span",{class:"input"}),e.createElement("div",{"data-tip":!0,"data-for":"global2",class:"infocircle"},e.createElement("p",{class:"infoTipText"},"i"))),e.createElement(a,{id:"global2",className:"tool"},e.createElement("p",null,"Professors, advisors, deans, the library, the computer labs, etc, including Medical School faculty salaries."))),e.createElement("div",{class:"textInputContainer"},e.createElement("input",{type:"number",value:m(t.data[d("Teaching")].value),className:"textInputBox",id:"Teaching",onChange:r,onClick:l,onBlur:n}),e.createElement("span",null,"%"))),e.createElement("div",{class:"labelAndInputContainer"},e.createElement("div",{class:"functionAndCircle"},e.createElement("div",{class:"functionCircleSOC"}),e.createElement("div",{class:"input-boxExp"},e.createElement("span",{class:"input"},"Research"),e.createElement("div",{"data-tip":!0,"data-for":"global3",class:"infocircle"},e.createElement("p",{class:"infoTipText"},"i"))),e.createElement(a,{id:"global3",className:"tool"},e.createElement("p",null,"The costs of doing the research, mostly researcher salaries."))),e.createElement("div",{class:"textInputContainer"},e.createElement("input",{type:"number",value:m(t.data[d("Research")].value),className:"textInputBox",id:"Research",onChange:r,onClick:l,onBlur:n}),e.createElement("span",null,"%"))),e.createElement("div",{class:"labelAndInputContainer"},e.createElement("div",{class:"functionAndCircle"},e.createElement("div",{class:"functionCircleTuition"}),e.createElement("div",{class:"input-boxExp"},e.createElement("span",{class:"input"},"Student Services and Financial Aid"),e.createElement("div",{"data-tip":!0,"data-for":"global4",class:"infocircle"},e.createElement("p",{class:"infoTipText"},"i"))),e.createElement(a,{id:"global4",className:"tool"},e.createElement("p",null,"Student Health, things covered by fees, Admissions, and also financial aid from the general funds, which is about $100M or 1.5%."))),e.createElement("div",{class:"textInputContainer"},e.createElement("input",{type:"number",value:m(t.data[d("Student")].value),className:"textInputBox",id:"Student",onChange:r,onClick:l,onBlur:n}),e.createElement("span",null,"%"))),e.createElement("div",{class:"labelAndInputContainer"},e.createElement("div",{class:"functionAndCircle"},e.createElement("div",{class:"functionCircleResearch"}),e.createElement("div",{class:"input-boxExp"},e.createElement("span",{class:"input"},"Operations and Maintenance"),e.createElement("div",{"data-tip":!0,"data-for":"global5",class:"infocircle"},e.createElement("p",{class:"infoTipText"},"i"))),e.createElement(a,{id:"global5",className:"tool"},e.createElement("p",null,"Upkeep of the grounds and building, and utilities, which are less than 1%. "))),e.createElement("div",{class:"textInputContainer"},e.createElement("input",{type:"number",value:m(t.data[d("Operations")].value),className:"textInputBox",id:"Operations",onChange:r,onClick:l,onBlur:n}),e.createElement("span",null,"%"))),e.createElement("div",{class:"labelAndInputContainer"},e.createElement("div",{class:"functionAndCircle"},e.createElement("div",{class:"functionCirclePell"}),e.createElement("div",{class:"input-boxExp"},e.createElement("span",{class:"input"},"Administration"),e.createElement("div",{"data-tip":!0,"data-for":"global6",class:"infocircle"},e.createElement("p",{class:"infoTipText"},"i"))),e.createElement(a,{id:"global6",className:"tool"},e.createElement("p",null,"Provost and Chancellor's offices, raising money, accounting, personnel, legal, making budgets."))),e.createElement("div",{class:"textInputContainer"},e.createElement("input",{type:"number",value:m(t.data[d("Administration")].value),className:"textInputBox",id:"Administration",onChange:r,onClick:l,onBlur:n}),e.createElement("span",null,"%"))),e.createElement("div",{class:"labelAndInputContainer"},e.createElement("div",{class:"functionAndCircle"},e.createElement("div",{class:"functionCircleDorms"}),e.createElement("div",{class:"input-boxExp"},e.createElement("span",{class:"input"},"Services"),e.createElement("div",{"data-tip":!0,"data-for":"global7",class:"infocircle"},e.createElement("p",{class:"infoTipText"},"i"))),e.createElement(a,{id:"global7",className:"tool"},e.createElement("p",null,"The costs of providing dorms, dining,parking, etc."))),e.createElement("div",{class:"textInputContainer"},e.createElement("input",{type:"number",value:m(t.data[d("Services")].value),className:"textInputBox",id:"Services",onChange:r,onClick:l,onBlur:n}),e.createElement("span",null,"%"))),e.createElement("div",{class:"labelAndInputContainer"},e.createElement("div",{class:"functionAndCircle"},e.createElement("div",{class:"functionCircleGifts"}),e.createElement("div",{class:"input-boxExp"},e.createElement("span",{class:"input"},"Public Service"),e.createElement("div",{"data-tip":!0,"data-for":"global8",class:"infocircle"},e.createElement("p",{class:"infoTipText"},"i"))),e.createElement(a,{id:"global8",className:"tool"},e.createElement("p",null,"Mostly the cooperative extension, which provides agricultural services to farmers, ranchers, winemakers, etc.  Part of our mission as a land grant university."))),e.createElement("div",{class:"textInputContainer"},e.createElement("input",{type:"number",value:m(t.data[d("Public")].value),className:"textInputBox",id:"Public",onChange:r,onClick:l,onBlur:n}),e.createElement("span",null,"%"))),e.createElement("div",{class:"labelAndInputContainer"},e.createElement("div",{class:"functionAndCircle"},e.createElement("div",{class:"functionCircleDepreciation"}),e.createElement("div",{class:"input-boxExp"},e.createElement("span",{class:"input"},"Depreciation,",e.createElement("br",null)," Interest, etc."),e.createElement("div",{"data-tip":!0,"data-for":"global9",class:"infocircle"},e.createElement("p",{class:"infoTipText"},"i"))),e.createElement(a,{id:"global9",className:"tool"},e.createElement("p",null,"Depreciation is the loss of value of buildings and equipment as they wear out. Mostly unavoidable financial losses."))),e.createElement("div",{class:"textInputContainer"},e.createElement("input",{type:"number",value:m(t.data[d("Interest")].value),className:"textInputBox",id:"Interest",onChange:r,onClick:l,onBlur:n}),e.createElement("span",null,"%"))),e.createElement("div",{class:"totalContainer"},e.createElement("div",{class:"testContainer"},e.createElement("div",{class:"totalLabel"}," ",e.createElement("span",{class:"input"}," Total % ")," "),e.createElement("div",{class:"textInputContainerCopy"},e.createElement("p",{class:"textInputBox",id:"totval"},Number(m(t.data[d("Medical")].value))+Number(m(t.data[d("Teaching")].value))+Number(m(t.data[d("Research")].value))+Number(m(t.data[d("Student")].value))+Number(m(t.data[d("Operations")].value))+Number(m(t.data[d("Administration")].value))+Number(m(t.data[d("Services")].value))+Number(m(t.data[d("Public")].value))+Number(m(t.data[d("Interest")].value))),e.createElement("div",{id:"percent"},"%")))))}function v(a){const[n,r]=t.exports.useState([{name:"Medical Center",value:0,color:"#f0bf00"},{name:"Teaching and Teaching Support",value:0,color:"#f6e50e"},{name:"Research",value:0,color:"#fff688"},{name:"Student Services and Financial Aid",value:0,color:"#5f63ec"},{name:"Operations and Maintenance",value:0,color:"#71a8ff"},{name:"Administration",value:0,color:"#58c9fb"},{name:"Services",value:0,color:"#0f7ab4"},{name:"Public Service",value:0,color:"#d4e4ff"},{name:"Depreciation, Interest, etc.",value:0,color:"#01796f"}]);return e.createElement(e.Fragment,null,e.createElement("div",{class:"headerAndPiChart"},3==a.state&&e.createElement("h2",{class:"resultsHeader"},"RESULTS"),1==a.state&&e.createElement("h2",{class:"boldedText"},"UC Davis Expenses"),3==a.state&&e.createElement("h3",{class:"textResultsPage"},"Your Expenses Guess"),e.createElement(l,{name:"pie3",data:n})),e.createElement("div",{class:"centercont"},3==a.state&&e.createElement("h3",{class:"textResultsPage"},"Actual Expenses ")),e.createElement("div",{class:"centercont"},3==a.state&&e.createElement(l,{name:"pie4",data:[{name:"Medical Center",value:43,color:"#f0bf00"},{name:"Teaching and Teaching Support",value:23,color:"#f6e50e"},{name:"Research",value:11,color:"#fff688"},{name:"Student Services and Financial Aid",value:8,color:"#5f63ec"},{name:"Operations and Maintenance",value:2,color:"#71a8ff"},{name:"Administration",value:3,color:"#58c9fb"},{name:"Services",value:2,color:"#0f7ab4"},{name:"Public Service",value:2,color:"#d4e4ff"},{name:"Depreciation, Interest, etc.",value:6,color:"#01796f"}]})),e.createElement("div",null,1==a.state&&e.createElement(p,{data:n,parentUpdate:(e,t)=>{var a=n.map((e=>e)),l=function(e,t,a){for(var n=0,l=a,r=0;r<e.length;r++)r!=t&&(n+=e[r].value);return+n+ +l>100&&(l=100-n),l}(a,d(e),t);a[d(e)].value=l,r(a)}})))}function E(t){return e.createElement("div",null,e.createElement("div",{class:"centercont",id:"bottomBtn"},e.createElement("button",{class:1!=t.state?"btn":"btn2",type:"button",onClick:t.parentUpdate,id:"Next"},1===t.state?"Compare":3===t.state?"Restart":"Next")),e.createElement("div",{class:"centercont"},1==t.state&&e.createElement("button",{class:"btn",type:"button",onClick:t.parentUpdate,id:"Back"},"Previous")))}function f(t){return e.createElement(e.Fragment,null,e.createElement("br",null),e.createElement("br",null),e.createElement("div",{class:"centercont"},e.createElement("h1",{id:"title"},"Slice The Pie")),e.createElement("br",null),e.createElement("div",{class:"centerTopText"},e.createElement("p",{class:"text"},"Say you got to run the University. How much would you allocate to different sectors? Learn about your funding sources, with a guessing game.")),e.createElement("br",null),e.createElement("div",{class:"centerTopText"},e.createElement("p",{class:"text"},"You make your choices by inputting percentages of each section of a pie chart. See how well your choices match the ones the Provost made.")))}function g(t){return e.createElement(e.Fragment,null,e.createElement("div",{class:"stepheader"},e.createElement("p",{class:"step"},"REVENUES"),e.createElement("p",{class:"step"},"EXPENSES"),e.createElement("p",{class:"step"},"COMPARE")),e.createElement("div",{class:"centercont"},e.createElement("div",{class:"container"},e.createElement("div",{class:"progress-container"},e.createElement("div",{class:0==t.state?"progress-bar":1==t.state?"progress-bar2":"progress-bar3",id:"progress-bar"}),e.createElement("div",{class:"circle active"}),e.createElement("div",{class:0!=t.state?"circle active":"circle"}),e.createElement("div",{class:t.state>1?"circle active":"circle"})))))}function h(){const[a,n]=t.exports.useState(0),[l,r]=t.exports.useState(!1);return e.createElement(e.Fragment,null,e.createElement(f,null),e.createElement(g,{state:a}),e.createElement("div",{class:0==a||2==a?null:"app-hidden"},3!=a&&e.createElement(o,{state:a})),e.createElement("div",{class:1==a||3==a?null:"app-hidden"},1!=l&&e.createElement(v,{state:a})),e.createElement(E,{state:a,parentUpdate:e=>{"Next"==e.target.id&&(3!=a?(r(!1),n(a+1)):(r(!0),n(0))),"Back"==e.target.id&&(r(!1),n(a-1))}}))}n.render(e.createElement(e.StrictMode,null,e.createElement(h,null)),document.getElementById("root"));
