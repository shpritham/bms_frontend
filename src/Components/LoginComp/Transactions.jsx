import React, { useState } from 'react'

function Transactions({transacdata,data}) {
    console.log(transacdata)
  return (
    <>
    <div style={{
      height:'300px',
      overflowY:'auto'
    }}>
    <table border={'5px'} cellSpacing={'10px'} cellPadding={'10px'} width={'1200px'} style={{ backdropFilter:'blur(10px)'}}>
        <thead ><tr>
            <th>amount</th>
            <th>type</th>
            <th>date</th>
        </tr>
        </thead>
        <tbody>
        { transacdata.map((item,index)=>(
            <tr key={index}>
                 <td>{item.amount}</td>
                 <td style={{ color: item.type == 'credit' ? 'green' : 'red',
                    fontWeight:'bolder'
                  }}>{item.type}</td>
                 <td>{item.date}</td> 
            </tr>
        )
        )}
        </tbody>
    </table>

    </div>

    </>
  )
}

export default Transactions