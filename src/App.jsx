
import React, { useRef, useState, useEffect } from 'react';
import ReactTooltip from 'react-tooltip';
import PieChartFunctional from './newPie.jsx';
import './App.css';
import RevComponent from './revenue.jsx'
import ExpComponent from './expense.jsx'

function NavigationComponent(props) {

  // revenues -> Next
	// expenditures -> Compare(Next) / Previous
	// result 1 -> Next
	// result 2 -> Restart (use next but reset state in handler)
	return (
		<div>
		<div class="centercont" id="bottomBtn">
      <button class ={props.state != 1?"btn":"btn2"} type='button'   
       onClick={props.parentUpdate}
			 id="Next">{
				 props.state === 1 ? "Compare" : props.state === 3? "Restart" : "Next"}
				 </button>
		</div>
		<div class = "centercont">
		  {props.state == 1  && <button class="btn" type='button'   
       onClick={props.parentUpdate}
			 id="Back">Previous</button>}
			</div>			 
		</div>
	)
}

function HeaderComponent(props) {
	return (
		<>
		<br />
		<br />
		<div class="centercont">
		  <h1 id = "title">Slice The Pie</h1>
		</div>
		<br />
		<div class="centerTopText">
			<p class = "text">Say you got to run the University. How much would you allocate to different sectors? Learn about your funding sources, with a guessing game.</p>
		</div>
		<br />
		<div class="centerTopText">
			<p class = "text">You make your choices by inputting percentages of each section of a pie chart. See how well your choices match the ones the Provost made.</p>
		</div>
		</>
	)
}

function ProgressBar(props) {
	
	return (
		<>
		<div class = "stepheader">
			<p class = "step">REVENUES</p>
			<p class = "step">EXPENSES</p>
			<p class = "step">COMPARE</p>
		</div>
		<div class="centercont">
			<div class = "container">
				<div class ="progress-container">
					<div class = {props.state == 0 ? "progress-bar":(props.state ==1)?"progress-bar2":"progress-bar3"}
					id="progress-bar"></div>						
					<div class="circle active"></div>
					<div class={props.state != 0 ? "circle active": "circle"}></div> 
					<div class={props.state > 1 ? "circle active": "circle"}></div>  
				</div> 
			</div>
		</div>
		</>
	)
}

/* App */
function App() {
		
    // 0: revenues 
		// 1: expenditures
		// 2: results 1
		// 3: results 2
    const [appState, setAppState] = useState(0);
		// expReset to indicate if expenditures data is to be reset
		const [expReset, setExpReset] = useState(false);
    
		// callback to update app state based on navigation
		const upDateAppState = (event) => { 
			if (event.target.id == 'Next'){
				if (appState != 3) {
					setExpReset(false);
			    setAppState(appState + 1);
				}
			  else {
				  // restart
					setExpReset(true);
				  setAppState(0);
			  }
			} 
			if (event.target.id == 'Back'){
				setExpReset(false);
			  setAppState(appState - 1);
			}			
		}

    return (
			    <>
					  <HeaderComponent/>
						<ProgressBar state={appState}/>  
						
						<div class={((appState == 0) || (appState == 2)) ?null:"app-hidden"}>{(appState != 3) && <RevComponent state={appState}/>}</div>
               
						<div class={((appState == 1) || (appState == 3)) ?null:"app-hidden"}>{(expReset != true)&&<ExpComponent state={appState}/>}</div>

						<NavigationComponent state ={appState} parentUpdate={upDateAppState}/>
          </>
		)
}

export default App;