import React, { useState } from 'react'

function AccountDetails({data}) {
    // const [name,setname]=useState("")
    // const[address,setAddress]= useState()
    // const[pincode,setpin] = useState()
    // const[account,setAcc] =useState()


  return (
   < >

   <div style={{
    backgroundColor:'#ff4433',
    // height:'100vh',
    // textAlign:"center"
    display:'flex',
    justifyContent:'center',
    alignItems:'center'

    } }>

   <div style={{
    backgroundColor:'whitesmoke',
    width:'500px',
    // height:'100%',
    boxShadow:"0 2px 5px black",
    textAlign:"center",

   }}>


    <h2>Welcome to bank,{data.Name}</h2>
    <h5>Name: {data.Name}</h5>
    <h5>Phone:{data.phone}</h5>
    <h5>Account: {data.account}</h5>
    <h5>Pan: {data.pancard}</h5>
    <h5>Address: {data.address}</h5>
    <h5>Pincode: {data.pincode}</h5>
    <h5>balance: {data.balance} Rupee</h5>

    </div>
    </div>

   </>
  )
}

export default AccountDetails