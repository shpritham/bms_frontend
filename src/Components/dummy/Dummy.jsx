// import React, { useState } from 'react';
// export default function Demo() {
//     const [data,setData]=useState({name:'',age:''});
//     const handleChange=(e)=>{
//         const {name,value}=e.target;
    
//         setData((prevData)=>({
//             ...prevData,
//             [name]:value
//         }));
//     }

//   return (
//     <div>
//         <h1>Demo Component</h1>
//         <form>
//             <label>Name:</label><br/>
//             <input 
//                 type="text" 
//                 name="name" 
//                 value={data.name} 
//                 onChange={handleChange} 
//                 placeholder="Enter your name"/><br/><br/>
//             <label>Age:</label><br/>
//             <input  
//                 type="number" 
//                 name="age" 
//                 value={data.age} 
//                 onChange={handleChange} 
//                 placeholder="Enter your age"/><br/><br/>
//                 <button
//                 type="submit" onClick={(e)=>{e.preventDefault();}}
//                 >Submit</button>
//         </form>
//         <div>
//             <h2>Entered Data:</h2>
//             <p>Name: {data.name}</p>
//             <p>Age: {data.age}</p>
//         </div>  
      
//     </div>
//   );
// }
import React, { useState } from 'react';
import Login from './Login';

const MultiInputForm = () => {
  // 1. One state object to hold all 6 variables
  const [formData, setFormData] = useState({
    Name: '',
    phone: '',
    pancard: '',
    address: '',
    pincode: '',
    password: ''
    , repassword: ''
  });

  // State to store the list of submitted entries
  const [submittedData, setSubmittedData] = useState([]);

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
    setSubmittedData([...submittedData, formData]);

    // Reset the form to empty strings
    setFormData({
      Name: '',
      phone: '',
      pancard: '',
      address: '',
      pincode: '',
      password: '',
      repassword: ''
    });
  };

  return (
    <div style={{ padding: '20px',textAlign:'center',backgroundColor:'#ff4433' }}>
        <h1>account creaction form </h1>
      
      
      <form onSubmit={handleSubmit} >
        
        {/* Input 1 */}
        <label style={{fontSize:'4vh'}}>Name of Candidate: </label><br/>
        <input
          type="text"
          name="Name" // Name must match the state key
          placeholder=" enter the Name of candidate"
          value={formData.Name}
          onChange={handleChange}
          required style={{ padding: '1vh',width:'20vw' }}/><br />

        {/* Input 2 */}
        <label style={{fontSize:'4vh'}}>phone number :</label><br/>
        <input
          type="tel"
          name="phone"
          maxLength="10"
            minLength="10"
          placeholder="Enter the phone number"
          value={formData.phone}
          onChange={handleChange}
          required
          style={{ padding: '1vh',width:'20vw' }}
          
        /><br />

        {/* Input 3 */}
        <label style={{fontSize:'4vh'}}>pan card :</label><br/>
        <input
          type="text"
          name="pancard"
          placeholder="enter pan card number "
          value={formData.pancard}
          onChange={handleChange}
          required
          style={{ padding: '1vh',width:'20vw' }}
        /><br />

        {/* Input 4 */}
        <label style={{fontSize:'4vh'}}>pin-code :</label><br/>
        <input
          type="tel"
          name="pincode"
          maxLength="6"
          minLength="6"
          placeholder="enter the  pincode"
          value={formData.pincode}
          onChange={handleChange}
          required
          style={{ padding: '1vh',width:'20vw' }}
        /><br/>

        {/* Input 5 */}
        <label style={{fontSize:'4vh'}}>address </label><br/>
        <textarea
          name="address"
          placeholder="enter residence address"
          value={formData.address}
          onChange={handleChange}
          rows="2"
          required
          style={{padding: '1vh',width:'20vw'}}
         
        /><br />

        {/* Input 6 */}
        <label style={{fontSize:'4vh'}}>password</label><br/>
        <input
          type="password"
          name="password"
          placeholder="enter the password"
          value={formData.password}
          onChange={handleChange}
          required
          style={{ padding: '1vh',width:'20vw' }}
        /><br/>
        <label style={{fontSize:'4vh'}}>reenter the password</label><br/>
        <input
          type="password"
          name="repassword"
          placeholder="re-enter the password"
          value={formData.repassword}
          onChange={handleChange}
          required
          style={{ padding: '1vh',width:'20vw' }}
        /><br/>

        {/* Button spans full width */}
        <button type="submit" style={{ gridColumn: 'span 2', padding: '1vh', backgroundColor: '#007BFF', color: 'white', border: 'none', cursor: 'pointer',fontSize:'4vh' ,position:'relative',top:'2vh'}}>
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
  );
};

export default MultiInputForm;