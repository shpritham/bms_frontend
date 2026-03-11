import React, { useEffect, useState } from 'react'
import AccountDetails from './AccountDetails';
import { useNavigate } from 'react-router-dom';
import Transactions from './Transactions';

function LoginPage({ data, transacdata }) {
    const navigate =useNavigate();

    const [showDetails,setShowdetails] = useState(false);
    const[showtansactions,settransactions] = useState(false);

    // useEffect(
    //     ()=>{

    //     },[]
    // )

  return (
    <>
    

        <div style={{
            // backgroundColor:'#ff4433',
            backdropFilter:'blur(10px)',
            border:'1px solid rgba(255,255,255,.3)',
            boxShadow:'0 0 10px black',
            display:'flex',
            height:'40vh',
            width:'80vw',
            // alignItems:'center',
            padding:'10px',
            gap:'50px'

        }}>
            <div style={{
                flex:'1',
                display:'grid',
                gridTemplateColumns:'auto auto',
                gap:'10px',
                boxShadow:'0 0 10px black',
                height:'80%',
                
            }}>
                 <div style={{backdropFilter:'blur(10px)',
                        border:'1px solid rgba(255,255,255,0.3)',
                        boxShadow:'0 0 10px black',
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center',}} onClick={()=>{settransactions(false) ;setShowdetails(true);}}>Account details</div>
                 <div style={{backdropFilter:'blur(10px)',
                        border:'1px solid rgba(255,255,255,0.3)',
                        boxShadow:'0 0 10px black',
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center',
                       }} onClick={()=>navigate('/loandetails') }>Loans</div>

                 <div style={{backdropFilter:'blur(10px)',
                        border:'1px solid rgba(255,255,255,0.3)',
                        boxShadow:'0 0 10px black',
                         display:'flex',
                        justifyContent:'center',
                        alignItems:'center',}} onClick={()=>{settransactions(true) ; setShowdetails(false) }} >Transactions</div>
                 
                 <div style={{backdropFilter:'blur(10px)',
                        border:'1px solid rgba(255,255,255,0.3)',
                        boxShadow:'0 0 10px black',
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center',}} > Customer Care: 1800-456-456</div>
                
               
            </div>
            <div style={{
                backgroundColor:'#ff4433',
                flex:'1',
                textAlign:'center',
                // backgroundColor:'white',
                height:'80%',
                boxShadow:'0 0 10px black',
                // padding:'5px'
            }}>
                
                <h4>Name: {data.Name}</h4>
                <h4>Account:savings</h4>
                <h4>Account No:{data.account}</h4>
                <h4>bal:{data.balance}</h4>
                <button onClick={()=>navigate('/')}>LogOut</button>
            </div>
        </div>
            <br /><br /><br />
        {showDetails && <AccountDetails data={data} />}
        {showtansactions && <Transactions data={data} transacdata={transacdata}/> }
    </>
  )
}

export default LoginPage