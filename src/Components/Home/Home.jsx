import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Bars from '../calculator/Bars';
import CardHome from '../cardscomp/CardHome.JSX';


function Home({customerData,setdata,settype,setloandata}) {

    const navigate = useNavigate();

    // const[logincred,setcred] =useState();
    const [userid,setuser] = useState();
    const[password,setpassword] =useState();
    
    const handlecred=()=>{

    }

   const handlelogin=(e)=>{
     e.preventDefault();
    // console.log("handlelogin")
        const data = customerData.find((account)=>{
            // console.log("all accounts"+account);
            if(account.phone===userid && account.password===password){
                console.log("account found"+account);
                return account;
            }
        })
        if(!data){
            alert("account not found");
            return;
        }else{
            console.log("account is"+data)
            setdata(data)
        navigate('/loginpage')
        }
               
    }
    
  return (
    <>
    
      <div style={{
            marginTop:'50px',
           
            display:'flex',
            // height:'40vh',
            width:'80vw',
            justifyContent:'center',
            justifyItems:'center',
            alignItems:'center',
            // padding:'10px',
            gap:'50px',

            backdropFilter:'blur(10px)',
            border:'1px solid rgba(256,256,244,0.3)',
            boxShadow:'0 0 10px black',
            borderRadius:'20px',
           

          }}>
            <div style={{
                flex:'1',
                display:'flex',
                flexDirection:'column',
                justifyContent:'space-evenly',
                gap:'10px',
                // boxShadow:'0 0 10px black',
                height:'80%',
                
            }}>
                <div style={{
                    flex:'1',
                    display:'flex',
                    justifyContent:'space-center',
                    // alignContent:'center',
                    alignItems:'center',
                    gap:'30px',
                    marginLeft:'30px',
                   }}>

                 <div onClick={()=>navigate('/createaccount')} style={{
                         flex:'1',
                        // background:'white',
                    textAlign:'center',
                    padding:'40px',
                    backdropFilter:'blur(10px)',
                    border:'1px solid rgba(256,256,244,0.3)',
                    boxShadow:'0 0 10px black',
                    borderRadius:'20px',
                 // boxSizing:'border-box',
                    fontWeight:'500',
                    cursor:'pointer',                    
                   }}>
                    Create Account  </div>
                 
                 <div onClick={()=>navigate('/loandetails')}
                   style={{
                         flex:'1',
                    // background:'white',
                    
                     textAlign:'center',
                     padding:'40px',
                     backdropFilter:'blur(10px)',
                     border:'1px solid rgba(256,256,244,0.3)',
                     boxShadow:'0 0 10px black',
                     borderRadius:'20px',
                     fontWeight:'500',
                     cursor:'pointer',
                         }} >
                             Loans</div>
                </div>
                 
                 <div style={{
                    flex:'1',
                    textAlign:'center',
                    backdropFilter:'blur(10px)',
                    border:'1px solid rgba(256,256,244,0.3)',
                    boxShadow:'0 0 10px black',
                    // width:'30%',
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    fontWeight:'500',
                   borderRadius:'20px',
                   margin:'30px 150px',
                }} >
                    Customer Care: 1800-456-456
                 </div>
                 
            </div>
            <div style={{
                flex:'1',
                textAlign:'center',
                // backgroundColor:'white',
                // background:'url(https://static.vecteezy.com/system/resources/previews/030/741/470/non_2x/business-global-internet-connection-application-technology-and-digital-marketing-financial-and-banking-digital-link-tech-big-data-photo.jpg)',
                height:'80%',

                backdropFilter:'blur(10px)',
                // border:'1px solid rgba(256,256,244,0.3)',
                boxShadow:'0 0 10px black',
                borderLeft:'1px solid black',
                borderRadius:'15px',
                padding:'10px'
            }}>
                <h2>Login:</h2>
                <form action="" >

                <div>
                    <label>User Id :</label> <input type="text" placeholder='User ID' onChange={(e)=>{setuser(e.target.value)}}/>
                    </div>
                <br />
                <div>
                    <label > Password:</label> <input type="password" placeholder ='Password' onChange={(e)=>setpassword(e.target.value)}/>
                                </div>
              <br />
                <button onClick={handlelogin} style={{padding:'5px 20px',backgroundColor:'#fa907d', color:'white'}}>Login</button>

                </form>
                
                <p>don't have an account <Link to="/createAccount">click here</Link></p>
            </div>
        </div>
  <div>
        <h3>stored accounts:  </h3>
   
    <p>
      userid: 987456321
      p/w:password,
      </p>
      <p>
        userid: 9998887776
      p/w:password
    </p>
      </div>
           <Bars giveData={setloandata}/>
            <CardHome type={settype}/>
    </>
  )
}

export default Home