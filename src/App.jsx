import { createContext, useEffect, useState } from 'react'
import './App.css'

import Home from './Components/Home/Home'
import AccountDetails from './Components/LoginComp/AccountDetails'
import LoginPage from './Components/LoginComp/LoginPage'
import {BrowserRouter,HashRouter,Routes,Route} from 'react-router-dom'
import CreateAccount from './Components/account/CreateAccount'

import Loanpage from './Components/Loancomp/Loanpage'
import Details from './Components/Loancomp/Details'
import CardApply from './Components/cardscomp/CardApply'
import CardHome from './Components/cardscomp/CardHome.JSX'


// export let customercontext = createContext();


function App() {

  const [accData,setAccData] = useState();
  const[data,setdata] =useState({
    account:100001,
     Name: 'Naman',
     phone: '987456321',
     pancard: 'ojqavics',
     address: '1 way nowhere Land',
     pincode: '101010',
     password: 'password',
      balance:5000  
  });
  const [customerData,setData] = useState([{
     account:100001,
     Name: 'Naman',
     phone: '987456321',
     pancard: 'ojqavics',
     address: '1 way nowhere Land',
     pincode: '101010',
     password: 'password',
      balance:5000
    },
     
    {
      account:100002,
     Name: 'Chaman',
     phone: '9998887776',
     pancard: 'pojopwa',
     address: '2 way fromWhere Land',
     pincode: '202020',
     password: 'password',
     balance:10000
       }
       ]);

 const[loandata,setloanData] = useState({
    amount: 0,
    duration:0 ,
    interest:0.0,
    type:""
  })

  const[transacdata,settransac] = useState([
    {
      account:100001,
      amount:1000,
      type:'credit',
      date:2025
    },
    {
      account:100001,
      amount:500,
      type:'debit',
      date:2025
    },
    {
    account:100002,
    amount:1000,
    type:'credit',
    date:2025
    },
    {
    account:100002,
    amount:2000,
    type:'debit',
    date:2025
    },
    {
      account:100001,
      amount:1000,
      type:'credit',
      date:2025
    },
    {
      account:100002,
      amount:5000,
      type:'debit',
      date:2025
    },
    {
    account:100002,
    amount:100,
    type:'debit',
    date:2024
    },
    {
    account:100002,
    amount:2200,
    type:'debit',
    date:2024
    },
    {
      account:100002,
      amount:5000,
      type:'debit',
      date:2025
    },
    {
    account:100002,
    amount:100,
    type:'debit',
    date:2022
    },
    {
    account:100002,
    amount:2200,
    type:'debit',
    date:2023
    }
  ])
const[currenttransaction,setcurrent]=useState();
const[cardtype,setcardtype] = useState('')

    useEffect(
      ()=>{

        if(accData){
         console.log(accData);
         setData([...customerData,accData]);
          setdata(accData)
        console.log("customerData: "+customerData);
        setAccData();

        }
        
      },[accData]
    );

    useEffect(
      ()=>{
        const transaction = transacdata.filter(
          (accountdata,index)=>{
             return accountdata.account==data.account;
          }
        )
        setcurrent(transaction)
      },[data]
    )

  return (
    <>
  {/* <h1>Banking</h1>     */}

  {/* <h1>Banking APP</h1>   */}

    {/* <BrowserRouter>
        
        <Routes>
           
          <Route path='/' element={<Home customerData={customerData} setdata={setdata} settype={setcardtype} setloandata={setloanData}/>} ></Route>
          <Route path='/loginpage' element={<LoginPage data={data} transacdata={currenttransaction } />}> </Route>
          <Route path='/createaccount' element = {<CreateAccount setAccData={setAccData}/>}> </Route>
          <Route path='/applyloan' element={<Loanpage  user={loandata}/>} > </Route>
          <Route path='/loandetails' element={ <Details giveData={setloanData} />}> </Route>

          <Route path = '/cardapply' element={ <CardApply  type={cardtype} /> } ></Route>
          <Route path ='/cardhome' element={ <CardHome type={setcardtype}  />}> </Route>
   
        </Routes>
    
    </BrowserRouter> */}

    <HashRouter>
       <Routes>
           
          <Route path='/' element={<Home customerData={customerData} setdata={setdata} settype={setcardtype} setloandata={setloanData}/>} ></Route>
          <Route path='/loginpage' element={<LoginPage data={data} transacdata={currenttransaction } />}> </Route>
          <Route path='/createaccount' element = {<CreateAccount setAccData={setAccData}/>}> </Route>
          <Route path='/applyloan' element={<Loanpage  user={loandata}/>} > </Route>
          <Route path='/loandetails' element={ <Details giveData={setloanData} />}> </Route>

          <Route path = '/cardapply' element={ <CardApply  type={cardtype} /> } ></Route>
          <Route path ='/cardhome' element={ <CardHome type={setcardtype}  />}> </Route>
   
        </Routes>
          
        </HashRouter>
    

      
    </>
  )
}

export default App
