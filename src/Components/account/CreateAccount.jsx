import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';


function CreateAccount({setAccData}) {

// const [acc,setacc] = useState();
// const customersdata = useContext(customercontext)

    const navigate  = useNavigate();

 // 1. One state object to hold all 6 variables
   const [formData, setFormData] = useState({
     Name: '',
     phone: '',
     pancard: '',
     address: '',
     pincode: '',
     password: '',
     repassword: '',
      balance:''
   });
 
   // State to store the list of submitted entries
//    const [submittedData, setSubmittedData] = useState([]);
 
   // 2. Generic handler for ALL inputs
   const handleChange = (e) => {
     const { name, value } = e.target;
     setFormData((prevData) => ({
       ...prevData,
       [name]: value // Updates only the specific field being typed in
     }));
   };
 
   const handleSubmit = (e) => {
     e.preventDefault();
     if (formData.password !== formData.repassword) {
       alert("Passwords do not match!");
       return; // Stop the function here
     }
     // eslint-disable-next-line no-unused-vars
     const { rePassword, ...dataToStore } = formData;
     
     // Add current form data to the list
    //  setSubmittedData([...submittedData, formData]);
    console.log("form"+{...formData,account:220002})
        setAccData(formData);
        navigate('/loginpage')
     // Reset the form to empty strings
    //  setFormData({
    //    Name: '',
    //    phone: '',
    //    pancard: '',
    //    address: '',
    //    pincode: '',
    //    password: '',
    //    repassword: ''
    //  });
   };
 
   return (
     <div style={{ 
      // width:'100%',
        // // background:'url(https://img.freepik.com/premium-vector/digital-finance-banking-investment-service-futuristic-bank-building-with-online-growth-graph_251139-785.jpg)  ',
        // backgroundPposition: 'center',
        // backgroundRepeat: 'no-repeat',
        // backgroundSize:'cover',
          padding: '20px',
          textAlign:'center',
          // backgroundColor:'white'
           backdropFilter:'blur(10px)',
            border:'1px solid rgba(256,256,244,0.3)',
            boxShadow:'0 0 10px black',
                color:'black'
           }}>
         <h1 style={{
          borderBottom:'2px solid black',
          
         }}>Account Creaction Form </h1>
       
       <div>

        
      
       <form onSubmit={handleSubmit} >
         
         {/* Input 1 */}
         
         <label style={{fontSize:'20px', color:'black'}}>Name of Candidate: </label><br/>
         <input
           type="text"
           name="Name" // Name must match the state key
           placeholder=" enter the Name of candidate"
           value={formData.Name}
           onChange={handleChange}
           required 
           style={{ padding: '10px',
                width:'20vw',
                 
                }}/><br />
          
         {/* Input 2 */}
         <label style={{fontSize:'20px', color:'black'}}>phone number :</label><br/>
         <input
           type="tel"
           name="phone"
           maxLength="10"
             minLength="10"
           placeholder="Enter the phone number"
           value={formData.phone}
           onChange={handleChange}
           required
           style={{ padding: '10px',
            width:'20vw',
            
             }}
           
         /><br />
 
         {/* Input 3 */}
         <label style={{fontSize:'20px', color:'black'}}>pan card :</label><br/>
         <input
           type="text"
           name="pancard"
           placeholder="enter pan card number "
           value={formData.pancard}
           onChange={handleChange}
           required
           style={{ padding: '10px',width:'20vw' }}
         /><br />
 
         {/* Input 4 */}
         <label style={{fontSize:'20px', color:'black'}}>pin-code :</label><br/>
         <input
           type="tel"
           name="pincode"
           maxLength="6"
           minLength="6"
           placeholder="enter the  pincode"
           value={formData.pincode}
           onChange={handleChange}
           required
           style={{ padding: '10px',width:'20vw' }}
         /><br/>
 
         {/* Input 5 */}
         <label style={{fontSize:'20px', color:'black'}}>address </label><br/>
         <textarea
           name="address"
           placeholder="enter residence address"
           value={formData.address}
           onChange={handleChange}
           rows="2"
           required
           style={{padding: '10px',width:'20vw'}}
          
         /><br />
 
         {/* Input 6 */}
         <label style={{fontSize:'20px', color:'black'}}>password</label><br/>
         <input
           type="password"
           name="password"
           placeholder="enter the password"
           value={formData.password}
           onChange={handleChange}
           required
           style={{ padding: '10px',width:'20vw' }}
         /><br/>
         <label style={{fontSize:'20px', color:'black'}}>reenter the password</label><br/>
         <input
           type="password"
           name="repassword"
           placeholder="re-enter the password"
           value={formData.repassword}
           onChange={handleChange}
           required
           style={{ padding: '10px',width:'20vw' }}
         /><br/>

          <label style={{fontSize:'20px', color:'black'}}>reenter the password</label><br/>
         <input
           type="number"
           name="balance"
           placeholder="enter the amount"
           value={formData.repassword}
           onChange={handleChange}
           required
           style={{ padding: '10px',width:'20vw' }}
         /><br/>
 
         {/* Button spans full width */}
         <button type="submit" style={{ gridColumn: 'span 2', padding: '1vh', backgroundColor: '#353232', color: 'white', border: 'none', cursor: 'pointer',fontSize:'4vh' ,position:'relative',top:'2vh'}}>
           Submit Data
         </button>
       </form>
       
 
       {/* <hr style={{ margin: '30px 0' }} />
 
       <h3>Stored Records:</h3>
       <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
         {submittedData.length === 0 && <p>No records yet.</p>}
         
         {submittedData.map((data, index) => (
           <div key={index} style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', minWidth: '250px', background: '#f9f9f9' }}>
             <h4 style={{ margin: '0 0 10px 0' }}>User {index + 1}</h4>
             <p><strong>Name:</strong> {data.Name} {data.phone}</p>
             <p><strong>Age:</strong> {data.pancard}</p>
             <p><strong>Email:</strong> {data.address}</p>
             <p><strong>Phone:</strong> {data.password}</p>
             <p><strong>City:</strong> {data.repassword}</p>
           </div>
         ))}
       </div> */}

        </div>
     </div>
   );
}

export default CreateAccount