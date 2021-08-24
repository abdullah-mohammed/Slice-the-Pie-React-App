'use strict'

import React, { useRef, useState, useEffect } from 'react';
import ReactTooltip from 'react-tooltip';
import PieChartFunctional from './newPie.jsx';
import './App.css';

const str_exp = [
      "Medical",
			"Teaching",
			"Research",
			"Student",
			"Operations",
			"Administration",
			"Services",
			"Public",
			"Interest"
		];

function str_2_idx2(str) {
	return str_exp.indexOf(str);
}

function val_format(value) {
  var ret = Number(value);
	console.log(value);
	// if (ret == ' ' ) {
	// 	ret = 0;
	// }
	return ret;
}

function check_input(list, idx, value) {
	var sum = 0;
	var newValue = value;
	// sum all non changed entries
	for(var i =  0; i < list.length; i++) {
    if (i != idx) {
			sum = sum + list[i].value;
		}
	}
	// for some reason without + on value it is not compared as number...
	if ((+sum + +newValue) > 100) {
    newValue = 100 - sum;
	}
	//console.log("sum:", sum, "value:", value, "new:", newValue);
  return newValue;

}

function ExpEntryBoxComponent(props) {

	const onBlurHandler = (event) =>{
		// event.target.value = Number(event.target.value);
		if(event.target.value == "") {
			event.target.value = 0;
		}
		
	}

	const onClickHandler = (event) => {
		event.target.value = Number(event.target.value);
		if(event.target.value == 0) {
			event.target.value = "";
		}
	}

  const onChangeHandler = (event) => {
		event.target.value = Number(event.target.value);
		console.log("value ", event.target.value);
		// white for non-zero values and grey for 0
		if(event.target.value == 0) {
			event.target.style.color = "#808080";//grey
		} else {
			event.target.style.color = "white";
		}
		props.parentUpdate(event.target.id, Number(event.target.value));
  }; 
	
	

  return (
    <>
		<div class = "catcont">
			<span class = "category">Function</span>
			<span class = "category" id = 'top'> Percentage(%)</span>
		</div>
		<div class = "labelAndInputContainer">
			<div class = "functionAndCircle">
				<div class = "functionCircleMedical"></div>
				<div class = "input-boxExp">
					<span class = "input">Medical Center</span>
					<div data-tip data-for='global' class = "infocircle">
						<p class = "infoTipText">i</p>
					</div>
				</div>
				<ReactTooltip id='global' className="tool"> 
					<p>The cost of providing care at the Medical Center is roughly what we get paid to provide it.</p>
				</ReactTooltip>
			</div>
				<div class = "textInputContainer">
					<input type="number" value={val_format(props.data[str_2_idx2("Medical")].value)} id="Medical" className = "textInputBox" onChange={onChangeHandler} onClick={onClickHandler} onBlur={onBlurHandler} />
					<span>%</span>
				</div>
		</div>
		<div class = "labelAndInputContainer">
			<div class = "functionAndCircle">
				<div class = "functionCircleSF"></div>

				<div class = "input-boxExp">
					<span class = "input">Teaching and Teaching Support</span>
						<span class = "input"></span>
						<div data-tip data-for='global2' class = "infocircle">
							<p class = "infoTipText">i</p>					
						</div>
				</div>

				<ReactTooltip id='global2' className="tool"> 
					<p>Professors, advisors, deans, the library, the computer labs, etc, including Medical School faculty salaries.
					</p>
				</ReactTooltip>
			</div>
				<div class = "textInputContainer">
					<input type="number" value={val_format(props.data[str_2_idx2("Teaching")].value)} className = "textInputBox" id="Teaching" onChange={onChangeHandler} onClick={onClickHandler} onBlur={onBlurHandler}/> 
					<span>%</span>
				</div>
		</div>
		<div class = "labelAndInputContainer">
			<div class = "functionAndCircle">
				<div class = "functionCircleSOC"></div>
				<div class = "input-boxExp">
					<span class = "input">Research</span>
					<div data-tip data-for='global3' class = "infocircle">
						<p class = "infoTipText">i</p>
					</div>
				</div>
				<ReactTooltip id='global3' className="tool"> 
					<p>The costs of doing the research, mostly researcher salaries.</p>
				</ReactTooltip>
			</div>
			<div class = "textInputContainer">
				<input type="number" value={val_format(props.data[str_2_idx2("Research")].value)} className = "textInputBox" id="Research" onChange={onChangeHandler} onClick={onClickHandler} onBlur={onBlurHandler}/>
				<span>%</span>
			</div>
		</div>
		<div class = "labelAndInputContainer">
			<div class = "functionAndCircle">
				<div class = "functionCircleTuition"></div>
				<div class = "input-boxExp">
					<span class = "input">Student Services and Financial Aid</span>
						<div data-tip data-for='global4' class = "infocircle">
							<p class = "infoTipText">i</p>					
						</div>
				</div>
				<ReactTooltip id='global4' className="tool"> 
					<p>Student Health, things covered by fees, Admissions, and also financial aid from the general funds, which is about $100M or 1.5%.</p>
				</ReactTooltip>
			</div>
			<div class = "textInputContainer">
					<input type="number" value={val_format(props.data[str_2_idx2("Student")].value)} className = "textInputBox" id="Student" onChange={onChangeHandler} onClick={onClickHandler} onBlur={onBlurHandler}/>
					<span>%</span>
			</div>
		</div>
		<div class ="labelAndInputContainer">
			<div class = "functionAndCircle">
				<div class = "functionCircleResearch"></div>

				<div class = "input-boxExp">
					<span class = "input">Operations and Maintenance</span>
						<div data-tip data-for='global5' class = "infocircle">
							<p class = "infoTipText">i</p>					
						</div>
				</div>

				<ReactTooltip id='global5' className="tool"> 
					<p>Upkeep of the grounds and building, and utilities, which are less than 1%. </p>
				</ReactTooltip>
			</div>
			<div class = "textInputContainer">
				<input type="number" value={val_format(props.data[str_2_idx2("Operations")].value)} className = "textInputBox" id="Operations"onChange={onChangeHandler} onClick={onClickHandler} onBlur={onBlurHandler}/>
				<span>%</span> 
			</div>
		</div>

		<div class = "labelAndInputContainer">
			<div class = "functionAndCircle">
				<div class = "functionCirclePell"></div>
				<div class = "input-boxExp">
					<span class = "input">Administration</span>
					<div data-tip data-for='global6' class = "infocircle">
						<p class = "infoTipText">i</p>
					</div>
				</div>
				<ReactTooltip id='global6' className="tool"> 
					<p>Provost and Chancellor's offices, raising money, accounting, personnel, legal, making budgets.</p>
				</ReactTooltip>
			</div>
			<div class = "textInputContainer">
				<input type="number" value={val_format(props.data[str_2_idx2("Administration")].value)} className = "textInputBox" id="Administration" onChange={onChangeHandler} onClick={onClickHandler} onBlur={onBlurHandler}/>
				<span>%</span>
			</div>
		</div>

		<div class = "labelAndInputContainer">
			<div class = "functionAndCircle">
				<div class = "functionCircleDorms"></div>
				<div class = "input-boxExp">
					<span class = "input">Services</span>
					<div data-tip data-for='global7' class = "infocircle">
						<p class = "infoTipText">i</p>
					</div>
				</div>
				<ReactTooltip id='global7' className="tool"> 
					<p>The costs of providing dorms, dining,parking, etc.</p>
				</ReactTooltip>
			</div>
			<div class = "textInputContainer">
				<input type="number" value={val_format(props.data[str_2_idx2("Services")].value)} className = "textInputBox" id="Services"onChange={onChangeHandler} onClick={onClickHandler} onBlur={onBlurHandler}/> 
				<span>%</span>
			</div>
		</div>

		<div class = "labelAndInputContainer">
			<div class = "functionAndCircle">
				<div class = "functionCircleGifts"></div>
				<div class = "input-boxExp">
					<span class = "input">Public Service</span>
					<div data-tip data-for='global8' class = "infocircle">
						<p class = "infoTipText">i</p>
					</div>
				</div>
				<ReactTooltip id='global8' className="tool"> 
					<p>Mostly the cooperative extension, which provides agricultural services to farmers, ranchers, winemakers, etc.  Part of our mission as a land grant university.
					</p>
				</ReactTooltip>
			</div>
			<div class = "textInputContainer">
				<input type="number" value={val_format(props.data[str_2_idx2("Public")].value)} className = "textInputBox" id="Public" onChange={onChangeHandler} onClick={onClickHandler} onBlur={onBlurHandler}/>
				<span>%</span>
			</div>
		</div>
		<div class = "labelAndInputContainer">
			<div class = "functionAndCircle">
				<div class = "functionCircleDepreciation"></div>
				<div class = "input-boxExp">
					<span class = "input">Depreciation,<br /> Interest, etc.</span>
					<div data-tip data-for='global9' class = "infocircle">
						<p class = "infoTipText">i</p>					
					</div>
				</div>
				<ReactTooltip id='global9' className="tool"> 
					<p>Depreciation is the loss of value of buildings and equipment as they wear out. Mostly unavoidable financial losses.
					</p>
				</ReactTooltip>
			</div>
			<div class = "textInputContainer">
				<input type="number" value={val_format(props.data[str_2_idx2("Interest")].value)} className = "textInputBox" id="Interest" onChange={onChangeHandler} onClick={onClickHandler} onBlur={onBlurHandler}/>
				<span>%</span>
			</div>
		</div>


		<div class= "totalContainer">
			<div class="testContainer">
			 <div class="totalLabel"> <span class = "input"> Total % </span> </div>
			<div class = "textInputContainerCopy">
				<p class = "textInputBox" id="totval">{Number(val_format(props.data[str_2_idx2("Medical")].value)) + Number(val_format(props.data[str_2_idx2("Teaching")].value)) + Number(val_format(props.data[str_2_idx2("Research")].value)) + Number(val_format(props.data[str_2_idx2("Student")].value)) + Number(val_format(props.data[str_2_idx2("Operations")].value)) + Number(val_format(props.data[str_2_idx2("Administration")].value)) + Number(val_format(props.data[str_2_idx2("Services")].value)) + Number(val_format(props.data[str_2_idx2("Public")].value)) + Number(val_format(props.data[str_2_idx2("Interest")].value))}</p>
				<div id ="percent">%</div>
			</div>
			</div>

		</div>
	</>
  );
}

function ExpComponent(props) {

    let actExpenseData = [
      { name: "Medical Center", value: 43, color: '#f0bf00' },
      { name: "Teaching and Teaching Support", value: 23, color: '#f6e50e' },
      { name: "Research", value: 11,color: '#fff688' },
      { name: "Student Services and Financial Aid", value: 8, color:'#5f63ec' },
      { name: "Operations and Maintenance", value: 2, color: '#71a8ff' },
      { name: "Administration", value: 3, color: '#58c9fb' },
      { name: "Services", value: 2, color: '#0f7ab4' },
      { name: "Public Service", value: 2, color: '#d4e4ff'},
			{ name: "Depreciation, Interest, etc.", value: 6, color: '#01796f'}
    ]

    let userExpenseData = [
      { name: "Medical Center", value: 0, color: '#f0bf00' },
      { name: "Teaching and Teaching Support", value: 0, color: '#f6e50e'},
      { name: "Research", value: 0, color: '#fff688'} ,
      { name: "Student Services and Financial Aid", value: 0, color:'#5f63ec' },
      { name: "Operations and Maintenance", value: 0, color: '#71a8ff'},
      { name: "Administration", value: 0, color: '#58c9fb' },
      { name: "Services", value: 0, color: '#0f7ab4'},
      { name: "Public Service", value: 0, color: '#d4e4ff'},
			{ name: "Depreciation, Interest, etc.", value: 0, color: '#01796f'}
    ]	

		const [userExpData, setUserExpData] = useState(userExpenseData);

		const sendDataToParent = (id, data) => { 
			// need a copy of array so react will see it changed to call render
			var tmpData = userExpData.map((x) => x);;
			var newValue = check_input(tmpData, str_2_idx2(id), data);
		  tmpData[str_2_idx2(id)].value = newValue ;
			//console.log("val:", tmpData);
			setUserExpData(tmpData);
    };

	return (
	    <>
			
			  <div class = "headerAndPiChart">
					{props.state==3 && <h2 class = "resultsHeader">RESULTS</h2>}
					{props.state==1 && <h2 class = "boldedText">UC Davis Expenses</h2>}
					{props.state==3 && <h3 class = "textResultsPage">Your Expenses Guess</h3>}
					<PieChartFunctional name = "pie3" data={userExpData} />
				</div>
				<div class="centercont">
					{props.state == 3 && <h3 class = "textResultsPage">Actual Expenses </h3>}
				</div>
				<div class="centercont">
					{props.state == 3 && <PieChartFunctional name = "pie4" data={actExpenseData}/>}
						
				</div>
						
				<div>
					{props.state == 1 && <ExpEntryBoxComponent data={userExpData} parentUpdate={sendDataToParent}/>}
				</div>

			</>
	)
}


export default ExpComponent;