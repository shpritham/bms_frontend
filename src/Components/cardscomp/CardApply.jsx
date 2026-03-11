import React, { useEffect, useState } from 'react'
import './CardApply.css'
import { Navigate, useNavigate } from 'react-router-dom'

function CardApply({type}) {

  const [CardNumber,setCardNumber] = useState("")
  const [Name,setName] = useState("")
  const [PhoneNumber,setPhoneNumber] = useState("")
  const [dob,setDob] = useState("")
  const [addhar,setAddhar] = useState("")
  const [Address,setAddress] = useState("")
  const Navigate = useNavigate()
  

  let newCardNumber = "";
  const createCardNumber = () =>{
    newCardNumber = Math.floor(Math.random()*1000000000000)
  }
  useEffect(()=>{
    createCardNumber();
    setCardNumber(newCardNumber)
  },[newCardNumber])

  return (
    <div id='mainBox'>
      <div id='head'><h2> Apply for a {type} </h2></div>
      
      <div id='inputBox'>
      <label htmlFor="AccounNumber">Card Number : </label>
      <input type="number" id='AccountNumber' readOnly value={CardNumber} />
      <label htmlFor="Name">Name : </label>
      <input type="text" id='Name' required value={Name} onChange={(e)=>{setName(e.target.value)}}/>
      <label htmlFor="Phone">Phone Number : </label>
      <input type="number" id='AccountNumber' required value={PhoneNumber} onChange={(e)=>{setPhoneNumber(e.target.value)}}/>
      <label htmlFor="dob">Date Of Birth : </label>
      <input type="date" id='dob' required value={dob} onChange={(e)=>{setDob(e.target.value)}} />
      <label htmlFor="type">Card Type : </label>
      <input type="text" value={type} readOnly id='type'/>
      <label htmlFor="Addhar">Addher Card Number : </label>
      <input type="number" id='Addhar' value={addhar} required  onChange={(e)=>{setAddhar(e.target.value)}} />
      <label htmlFor="Address">Address : </label>
      <input type="text" id='Address' value={Address} required onChange={(e)=>{setAddress(e.target.value)}}/>
      </div>
      <div id='buttonBox'>
        <button id='btn' type='submit'>Apply</button>
        <button id='details' onClick={()=>{Navigate('/')}}>Back To Details</button>
      </div>


    </div>
  )
}

export default CardApply