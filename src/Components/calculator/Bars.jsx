

import React, { useEffect, useState } from 'react'
import './Bars.css'
import { Navigate, useNavigate } from 'react-router-dom';

function Bars({giveData}) {

    const [defaultMoney, setDefaultMoney] = useState(0);
    const [defaultYear, setDefaultYear] = useState(0);
    const [interest, setInterest] = useState(0);
    const [loanType, setLoanType] = useState("")
    let Total = defaultMoney * (1 + (interest / 100)) ** defaultYear;
    const Navigate = useNavigate()

    const decider = () => {
                        if (loanType===""){
                                    alert("You have to choose a Loan type first : 😊")
                                    return;
                                    }
                    const obj ={
                                amount:defaultMoney,
                                duration:defaultYear,
                                interest:interest,
                                type:loanType
                                };
                    giveData(obj);
                    Navigate('/applyloan')
                    }

    return (
        <div id="main" style={
            {
                 backdropFilter:'blur(10px)',
                border:'1px solid rgba(256,256,244,0.3)',
                boxShadow:'0 0 10px black',
            }
        }>
            <div className="left-panel">
                <h3>Choose Your Loan</h3>
                <div id='Buttons'>
                    <button id='ops' onClick={() => {setInterest(6.0); setLoanType("Personal")} } style={{ backgroundColor: interest === 6.0 ? "#FF4433" : "#f0f2f5", color: interest === 6.0 ? "#fff" : "#555" }}>Personal</button>
                    <button id='ops' onClick={() => {setInterest(7.5); setLoanType("Home")}}      style={{ backgroundColor: interest === 7.5 ? "#FF4433" : "#f0f2f5", color: interest === 7.5 ? "#fff" : "#555" }}>Home</button>
                    <button id='ops' onClick={() => {setInterest(5.5); setLoanType("Vehicle")}}   style={{ backgroundColor: interest === 5.5 ? "#FF4433" : "#f0f2f5", color: interest === 5.5 ? "#fff" : "#555" }}>Vehicle</button>
                    <button id='ops' onClick={() => {setInterest(4.8); setLoanType("Education")}} style={{ backgroundColor: interest === 4.8 ? "#FF4433" : "#f0f2f5", color: interest === 4.8 ? "#fff" : "#555" }}>Education</button>
                </div>

                <div id="bars">
                    <p id='forLoadBar'>Amount</p>
                    <div className="input-row">
                        <input type='range' min={10000} max={10000000} step={20000} value={defaultMoney} onChange={(e) => setDefaultMoney(Number(e.target.value))} />
                        <input type="number" id='spaceMoney' value={defaultMoney} onChange={(e) => {let num = e.target.value; if (num<=10000000)setDefaultMoney(Number(num))}} />
                    </div>

                    <p id='forLoadBar'>Duration</p>
                    <div className="input-row">
                        <input type='range' min={1} max={30} value={defaultYear} onChange={(e) => setDefaultYear(Number(e.target.value))} />
                        <input type="number" id='spaceYear' value={defaultYear} onChange={(e) => {let num = e.target.value; if (num<=30)setDefaultYear(Number(num))}} />
                    </div>
                </div>
            </div>

            <div className="right-panel">
                <div className="result-content">
                    <p id='tag'>Interest Rate @ {interest}%</p>
                    <p id='interest'>₹{Number(Total).toLocaleString('en-IN', { maximumFractionDigits: 0 })}</p>
                    <p id='total-int'>Total Interest: ₹{(Total - defaultMoney).toLocaleString('en-IN', { maximumFractionDigits: 0 })}</p>
                    
                    <div className="small-print">
                        <p>Disclaimer and Terms & Conditions Applied</p>
                        <br />
                        <p>Minimal documentation</p>
                        <p>No Collateral required</p>
                    </div>
                </div>


            <div className="action-btns">
                    <button id='details-btn' onClick={()=>{Navigate('/loandetails')}}>DETAILS</button>
                    <button id='apply' onClick={()=>{decider()}}>APPLY NOW</button>
                </div>
            </div>
        </div>
    )
}

export default Bars;
