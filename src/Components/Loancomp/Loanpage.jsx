import React, { useEffect, useState } from 'react'
import './Loanpage.css'

export default function Loanpage(props) {
  const[name ,setName]= useState("")
  const[phone ,setphone]= useState()
  const[addhar ,setaddhar]= useState()
  const[loanType ,setLoanType]= useState(props.user.type)
  const[amount ,setamount]= useState(props.user.amount)
    // const[amount ,setamount]= useState()
  const[duration,setduration] = useState(props.user.duration)
  const[interest,setinterest] = useState(props.user.interest)
  const[Email,setEmail] = useState("")
  const[Income,setIncome] = useState(0)
  const[AccountNumber,setAccountNumber] = useState()

  useEffect(()=>{
    console.log('loan user start')
      setLoanType(props.user.type);
      setamount(props.user.amount);
      setduration(props.user.duration);
      setinterest(props.user.interest);
      console.log('loan user end')
      console.log(props.user)
  },[props.user])

  useEffect(()=>{
    if (loanType==="Personal") setinterest(6)
    else if (loanType==="Home") setinterest(7.5)
    else if (loanType==="Vehicle") setinterest(5.5)
    else if (loanType==="Education") setinterest(4.8)
    else setinterest(0)
  },[loanType])

  const handelSubmit = () => {
    // if (!name  !addhar  !Income  !amount){
    //   alert ("all field need to fill first")
    //   return 
    // }
    alert("After checking all credentials we proceeds")
  }

  let TotalAmount=amount*(1+(interest/100))**duration;
  return (
    <div id='main'>

      <h2>Apply for your Loan</h2>

      <label htmlFor="Name" >Name : </label>
      <input type="text" id='Name' value={name} onChange={(e)=>{setName(e.target.value)}} required/> 

      <label htmlFor="Phone" >Phone Number : </label>
      <input type="number" id='Phone' value={phone} onChange={(e)=>{setphone(e.target.value)}} required/> 

      <label htmlFor="Addhar" >Addhar number : </label>
      <input type="number" id='Addhar' value={addhar} onChange={(e)=>{setaddhar(e.target.value)}} required/> 
      
      <label htmlFor="Email">Email : </label>
      <input type="text" id='Email' value={Email} onChange={(e)=>{setEmail(e.target.value)}} required/>

      <label htmlFor="AccountNumber">Account Number :</label>
      <input type="number" id='AccountNumber' value={AccountNumber}  onChange={(e)=>{setAccountNumber(e.target.value)}} required/>

      <label htmlFor="Income">Monthly Income : </label>
      <input type="number" id='Income' value={Income} onChange={(e)=>{setIncome(e.target.value)}} required/>

      <label htmlFor="loanType" >Loan Type: </label>
      <select name="selectLoanType" id="loanType" value={loanType} onChange={(e)=>{setLoanType(e.target.value)}} required>
        <option value="Personal" onClick={()=>{setLoanType("Personal")}}>Personal Loan</option>
        <option value="Home" onClick={()=>{setLoanType("Home")}}>Home Loan</option>
        <option value="Vehicle" onClick={()=>{setLoanType("Vehicle")}}>Vehicle Loan</option>
        <option value="Education" onClick={()=>{setLoanType("Education")}}>Education Loan</option>

      </select>

      <label htmlFor="Amount" >Amount : </label>
      <input type="number" id='Amount' value={amount} onChange={(e)=>{setamount(e.target.value)}} required/> 
      
      <label htmlFor="Duration" >Duration (in year): </label>
      <input type="number" id='Duration' value={duration} onChange={(e)=>{setduration(e.target.value)}} required/> 
      
      <label htmlFor="Interest" >Interest (in %) : </label>
      <input type="number" id='Interest' value={interest} onChange={(e)=>{setinterest(e.target.value)}} readOnly/> 
      
      <label htmlFor="TotalAmount" >Total Amount to Pay : </label>
      <input type="number" id='TotalAmount' value={Math.round(TotalAmount)} readOnly/> 
    
      <button id='btn' type='submit' onClick={handelSubmit}>Apply</button>

    </div>
  )
}