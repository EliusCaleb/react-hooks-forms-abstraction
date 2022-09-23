import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName:"John",
    lastName:"Henry",
    admin:false,
  });
  
  function handleChange(event) {
     const name = event.target.value;
     let value= event.target.value;


     if(event.target.type==="checkbox"){
      value=event.target.checked;
     }

     setFormData({
      ...formData,
      [name]:value,
    });

   
  }

  function handleSubmit(event){
    event.preventDefault();
    console.log(formData);
  }
     
  

  return (
    <form  onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="firstName"
        onChange={handleChange} 
        value={formData.firstName}
      />
      <input 
        type="text"
        name="lastName" 
        onChange={handleChange} 
        value={formData.lastName} 
      />
      <input 
        type="checkbox"
        name="admin" 
        onChange={handleChange} 
        value={formData.admin} 
      />


      <button type="submit">Submit</button>
    </form>
  );
}


export default Form;



//this is second method but tiresome 

/*
function Form() {
  const [formData, setFormData] = useState({
    firstName:"John",
    lastName:"Henry"
  });
  
  function handleFirstNameChange(event) {
    setFormData({
      ...formData,
      firstName:event.target.value
    });
  }

  function handleLastNameChange(event) {
    setFormData({
      ...formData,
      lastname:event.target.value
    })
     
  }

  return (
    <form>
      <input 
        type="text" 
        onChange={handleFirstNameChange} 
        value={formData.firstName}
      />
      <input 
        type="text" 
        onChange={handleLastNameChange} 
        value={formData.lastName} 
      />


      <button type="submit">Submit</button>
    </form>
  );
}
*/
