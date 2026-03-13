import React, { useEffect, useState } from 'react'

import './CardHome.css'
import { useNavigate } from 'react-router-dom'


function CardHome({type}) {

    const [targetCard,setTargetCard] = useState("")
    const Navigate = useNavigate()
    
    useEffect(()=>{
        console.log('effect')
        if (targetCard!=""){
            type(targetCard); 
            console.log('type')
            Navigate('/cardapply')
        }
    },[targetCard])
    
  return (
    <div id='mainDiv'>  
        <div id='container' >
            <div id='CardContainer' onClick={()=>{setTargetCard("Credit Card") }}>
                <div id='cardImage'> 
                    <img src='creditCard.png' alt="Credit Card : " />
                </div>
                <div id="details">
                    <p id='AnnualFee'> <span id='tag'>Annual Fee : </span>0</p>
                    <p id='reward'> <span id='tag'>Reward : </span>Earn Rup.200 back after you spend $1,000 in the first 3 months</p>
                    <p id='benefits'> <span id='tag'>Benefits : </span>Enjoy the premium benefits of a card designed for your lifestyle, starting with a $0 annual fee that ensures your membership costs nothing. Kickstart your journey by earning a $200 bonus after spending $1,000 in your first three months. Additionally, you will gain access to 24/7 fraud monitoring and contactless payments for ultimate convenience. This card provides the perfect balance of immediate rewards and long-term security without any hidden overhead.</p>
                </div>
            </div>
            <div id='CardContainer' onClick={()=>{setTargetCard("Debit Card")}}>
                <div id='cardImage'> 
                    <img src='DebitCard.jpeg' alt="Debit Card : " />
                </div>
                <div id="details">
                    <p id='AnnualFee'> <span id='tag'>Annual Fee : </span>0</p>
                    <p id='reward'> <span id='tag'>Reward : </span>Earn 1% cashback on all purchases plus a $50 bonus when you deposit $1,000 in 3 months.</p>
                    <p id='benefits'> <span id='tag'>Benefits : </span>Take full control of your finances with our Essential Debit Card, offering a premium banking experience with absolutely no annual fees. Every swipe works in your favor as you earn 1% unlimited cashback on daily purchases, while our automated round-up feature builds your savings effortlessly. With 24/7 fraud protection and instant mobile alerts, you get the perfect blend of security and rewards, ensuring your hard-earned money stays safe while consistently growing with every transaction.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardHome