import React from "react";
import { useState } from "react";

const Login = () => {

const [values, setValues] = useState({name:'', email:''})
// const [errors, setErrors] =useState({})

const handleChange =(e) =>{
    const {name, value} = e.target
    setValues({...values,
        [name]:value
    })
}
const handleSubmit =(e) =>{
    e.preventDefault();
    // if(validate())
    console.log(values)
}

// const validate =() =>{
//     let temp ={}
//     temp.email = (/\S+@\S+\.\S+/).test(values.email) ? "" : "Email is not valid."
//     temp.name = (values.name !=="" )? "" : "This field is required."
//     setErrors(temp)
//     console.log(temp)
//     return Object.values(temp).every(x => x === "")
// }
  return (
    <> 
      <div className="page-login">
        <form className="ui_form" method="post" onSubmit={handleSubmit}>
          <header> 
            <h3>Quiz App </h3>
          </header>
          <div className="field">
            <input 
            type="email" 
            name="email" 
            placeholder="Email"
            value={values.email}
            onChange= {handleChange}
            // {...(errors.email && {error:true, helpertext:errors.email})}
            />
          </div>
          <div className="field">
            <input 
            type="text" 
            name="name" 
            placeholder="Name" 
            value={values.name}
            onChange={handleChange}
            // {...(errors.name && {error:true, helpertext:errors.name})}
            />
          </div>
          <button className="ui_primary_labeled_icon_button" type="submit">
            <i className="unlock alternate icon"></i>
            Start
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
