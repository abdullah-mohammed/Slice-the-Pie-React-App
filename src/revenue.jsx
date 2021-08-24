import React, { useRef, useState, useEffect } from 'react';
import ReactTooltip from 'react-tooltip';
import PieChartFunctional from './newPie.jsx';
import { ClickAwayListener } from '@material-ui/core';
import './App.css';

const str_rev = [
      "Medical",
			"StudentFees",
			"State",
			"Tuition",
			"ResearchGrants",
			"PellGrants",
			"Dorms",
			"Gifts"
		];

function str_2_idx(str) {
	return str_rev.indexOf(str);
}

function val_format(value) {
  var ret = Number(value);
	//console.log(value);
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


function RevEntryBoxComponent(props) {

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
		//console.log("value ", event.target.value);
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
			<div class = "input-boxRev">
				<span class = "input">Medical Center</span>
					<div data-tip data-for='global' class = "infocircle">
						<p class = "infoTipText">i</p>
					</div>
			</div>
			<ReactTooltip id='global' className="tool"> 
				<p>A large, not-for-profit regional medical center, including multiple hospitals, labs and clinics. Income comes from patients, medical insurance companies, and government programs like medicare.</p>
			</ReactTooltip>
			</div>
			<div className = "textInputContainer">

					<input type="number" value={val_format(props.data[str_2_idx("Medical")].value)} className = "textInputBox" id="Medical" onChange={onChangeHandler} onClick={onClickHandler} onBlur={onBlurHandler}/>
					<span>%</span>
			</div>
		</div>
		<div class = "labelAndInputContainer">
			<div class = "functionAndCircle">
				<div class = "functionCircleSF"></div>
				<div class = "input-boxRev">
					<span class = "input">Student Fees</span>
					<div data-tip data-for='global2' class = "infocircle">
						<p class = "infoTipText">i</p>
					</div>
				</div>
				<ReactTooltip id='global2' className="tool"> 
					<p>Fees are dedicated to specific services, such as athletic facilities, bus service (UNITRANS), student organizations, the CoHo and Student Community Center, etc.</p>
				</ReactTooltip>
			</div>
			<div class = "textInputContainer">
				<input type="number" value={val_format(props.data[str_2_idx("StudentFees")].value)} className = "textInputBox" id="StudentFees" onChange={onChangeHandler}onClick={onClickHandler} onBlur={onBlurHandler}/> 
				<span>%</span>
			</div>
		</div>
		<div class = "labelAndInputContainer">
			<div class = "functionAndCircle">
				<div class = "functionCircleSOC"></div>
				<div class = "input-boxRev">
					<span class = "input">State of California</span>
					<div data-tip data-for='global4' class = "infocircle">
						<p class = "infoTipText">i</p>
					</div>
				</div>
				<ReactTooltip id='global4' className="tool"> 
					<p>General funds given by the taxpayers of California, appropriated annualy by the state legislature. General funds are not dedicated to specific services.</p>
				</ReactTooltip>
			</div>
			<div class = "textInputContainer">
				<input type="number" value={val_format(props.data[str_2_idx("State")].value)} className = "textInputBox" id="State" onChange={onChangeHandler} onClick={onClickHandler} onBlur={onBlurHandler}/>
				<span>%</span>
			</div>
		</div>
		<div class = "labelAndInputContainer">
			<div class = "functionAndCircle">
				<div class = "functionCircleTuition"></div>
				<div class = "input-boxRev">
					<span class = "input">Tuition </span>
					<div data-tip data-for='global3' class = "infocircle">
						<p class = "infoTipText">i</p>
					</div>
				</div>
				<ReactTooltip id='global3' className="tool"> 
					<p>Students pay tuition to attend the University. Non-California residents pay about twice as much as residents.  Tuition is also general funds.</p>
				</ReactTooltip>
				</div>
			<div class = "textInputContainer">
				<input type="number" value={val_format(props.data[str_2_idx("Tuition")].value)} className = "textInputBox" id="Tuition" onChange={onChangeHandler} onClick={onClickHandler} onBlur={onBlurHandler}/>
				<span>%</span>
			</div>
		</div>
		<div class = "labelAndInputContainer">
			<div class = "functionAndCircle">
			<div class = "functionCircleResearch"></div>
			<div class = "input-boxRev">
				<span class = "input">Research Grants and Contracts</span>
					<div data-tip data-for='global5' class = "infocircle">
						<p class = "infoTipText">i</p>					
				</div>
			</div>
			<ReactTooltip id='global5' className="tool"> 
				<p>Government and industry funds given to faculty and graduate students to perform research projects. These include up to 50% overhead in addition to the cost of the research. </p>
			</ReactTooltip>
			</div>
			<div class = "textInputContainer">
				<input type="number" value={val_format(props.data[str_2_idx("ResearchGrants")].value)} className = "textInputBox" id="ResearchGrants"onChange={onChangeHandler} onClick={onClickHandler} onBlur={onBlurHandler}/> 
				<span>%</span>
			</div>
		</div>
		<div class = "labelAndInputContainer">
			<div class = "functionAndCircle">
				<div class = "functionCirclePell"></div>
				<div class = "input-boxRev">
					<span class = "input">Pell<br /> Grants</span>
					<div data-tip data-for='global6' class = "infocircle">
						<p class = "infoTipText">i</p>
					</div>
				</div>
				<ReactTooltip id='global6' className="tool"> 
					<p>Federal grants for tuition and living expenses for low-income students. Percentage of students with Pell grants is a good way to measure who a University serves; at UCD, it's 34%; at Cal Tech it's 14%; at Sac State it's 71%.</p>
				</ReactTooltip>
			</div>
			<div class = "textInputContainer">
				<input type="number" value={val_format(props.data[str_2_idx("PellGrants")].value)} className = "textInputBox" id="PellGrants" onChange={onChangeHandler}  onClick={onClickHandler} onBlur={onBlurHandler}/>
				<span>%</span>
			</div>
		</div>
		<div class = "labelAndInputContainer">
			<div class = "functionAndCircle">
				<div class = "functionCircleDorms"></div>
				<div class = "input-boxRev">
					<span class = "input">Dorms, Dining, and Other </span>
							<span class = "input">Services</span>
							<div data-tip data-for='global7' class = "infocircle">
								<p class = "infoTipText">i</p>
							</div>
				</div>
				<ReactTooltip id='global7' className="tool"> 
					<p>Services other than education that people pay for, like dorms, dining, parking, etc.  At UC Davis, this also includes almost $500M of revenue generated by medical school faculty, or 8%, making this category look really big.</p>
				</ReactTooltip>
			</div>
			<div class = "textInputContainer">
				<input type="number" value={val_format(props.data[str_2_idx("Dorms")].value)} className = "textInputBox" id="Dorms"onChange={onChangeHandler} onClick={onClickHandler} onBlur={onBlurHandler}/> 
				<span>%</span>
			</div>
		</div>
		<div class = "labelAndInputContainer">
			<div class = "functionAndCircle">
				<div class = "functionCircleGifts"></div>
				<div class = "input-boxRev">
					<span class = "input">Gifts, Endowments, Interest, Other</span>
							<div data-tip data-for='global8' class = "infocircle">
								<p class = "infoTipText">i</p>					
							</div>
				</div>
				<ReactTooltip id='global8' className="tool"> 
					<p>Endowments are past gifts that were invested to provide income; interest is earned on other savings. The Museum is the direct result of a $10M gift from Jan Shrem and Maria Manetti Shrem.
					</p>
				</ReactTooltip>
			</div>
			<div class = "textInputContainer">
				<input type="number" value={val_format(props.data[str_2_idx("Gifts")].value)} className = "textInputBox" id="Gifts" onChange={onChangeHandler}  onClick={onClickHandler} onBlur={onBlurHandler}/>
				<span>%</span>
			</div>
		</div>
		<div class= "totalContainer">
			<div class="testContainer">
			 <div class="totalLabel"> <span class = "input"> Total % </span> </div>
			<div class = "textInputContainerCopy">
				<p class = "textInputBox" id="totval">{Number(val_format(props.data[str_2_idx("Medical")].value)) + Number(val_format(props.data[str_2_idx("StudentFees")].value)) + Number(val_format(props.data[str_2_idx("Tuition")].value)) + Number(val_format(props.data[str_2_idx("State")].value)) + Number(val_format(props.data[str_2_idx("ResearchGrants")].value)) + Number(val_format(props.data[str_2_idx("PellGrants")].value)) + Number(val_format(props.data[str_2_idx("Dorms")].value)) + Number(val_format(props.data[str_2_idx("Gifts")].value))}</p>
				<div id ="percent" >%</div>
			</div> </div>
		</div>
	</>
  );
}

// idea is to use rev component again in result 1 (hiding the entry data)
function RevComponent(props) {
    // data on Unversity income 
    let actRevenueData = [
      { name: "Medical Center", value: 45, color: '#f0bf00' },
      { name: "Student Fees", value: 4, color: '#f6e50e' },
      { name: "State of California", value: 8,color: '#fff688' },
      { name: "Tuition", value: 11, color:'#5f63ec' },
      { name: "Research Grants and Contracts", value: 13, color: '#71a8ff' },
      { name: "Pell Grants", value: 6, color: '#58c9fb' },
      { name: "Dorms, Dining, and Other  Services", value: 11, color: '#0f7ab4' },
      { name: "Gifts, Endowments, Interest, Other", value: 7, color: '#d4e4ff'}
    ]

    let userRevenueData = [
      { name: "Medical Center", value: 0, color: '#f0bf00' },
      { name: "Student Fees", value: 0, color: '#f6e50e'},
      { name: "State of California", value: 0, color: '#fff688'} ,
      { name: "Tuition", value: 0, color:'#5f63ec' },
      { name: "Research Grants and Contracts", value: 0, color: '#71a8ff'},
      { name: "Pell Grants", value: 0, color: '#58c9fb' },
      { name: "Dorms, Dining, and Other  Services", value: 0, color: '#0f7ab4'},
      { name: "Gifts, Endowments, Interest, Other", value: 0, color: '#d4e4ff'}
    ]	

    const [userRevData, setUserRevData] = useState(userRevenueData);

		const sendDataToParent = (id, data) => { 
			// need a copy of array so react will see it changed to call render
			var tmpData = userRevData.map((x) => x);;
			var newValue = check_input(tmpData, str_2_idx(id), data);
		  tmpData[str_2_idx(id)].value = newValue ;
			//console.log("val:", tmpData);
			setUserRevData(tmpData);
    };


    return (
	    <>
			  <div class = "headerAndPiChart">
					{props.state==2 && <h2 class = "resultsHeader">RESULTS</h2>}
					{props.state==0 && <h2 class = "boldedText">UC Davis Revenues</h2>}
					{props.state==2 && <h3 class = "textResultsPage">Your Revenue Guess</h3>}
					<PieChartFunctional name = "pie1" data={userRevData} />
				</div>
				<div class = "centercont">
					{props.state == 2 && <h3 class = "textResultsPage">Actual Revenue </h3>}
				</div>
				<div class = "centercont">
					{props.state == 2 && <PieChartFunctional name = "pie2" data={actRevenueData}/>}	
				</div>
				<div>
					{props.state == 0 && <RevEntryBoxComponent data={userRevData} parentUpdate={sendDataToParent}/>}
				</div>
			</>
		)	
}


export default RevComponent;
