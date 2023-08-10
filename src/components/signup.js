import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { Link } from "react-router-dom";



function Signup() {

  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });

  let navigate = useNavigate();
   
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {name, email, password, cpassword} = credentials;
    
    if(password !== cpassword){
      
      alert("password did not match with confirm password")
      return 0;
    }
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content_Type": "application/json",
        "content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password
      }),
    });
    const json = await response.json();
    console.log(json);

    if(json.success){
      // Save the auth token and redirect
      localStorage.setItem('token', json.authtoken)
      navigate("/");
    }
    else{
      alert("Invalid Credentials")
    }
  };
  
  //password hide show 
  const [showPassword, setShowPassword] = React.useState(false);
  const [showcPassword, setShowcPassword] = React.useState(false);


  const ShowPassword = () => {
      setShowPassword(!showPassword);
  };
  const ShowcPassword = () => {
    setShowcPassword(!showcPassword);
};

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  
  return (

     <div className="slbody">
      
    <div className="my-5 forms">

    <div className="sheading">Create Account</div>

      <form  className="my-4" onSubmit={handleSubmit}>

      <div className="form-floating mb-3">
        <input type="text"
        className="form-control"
        onChange={onChange}
         id="name" name="name"
          required placeholder="Name"
         />
         <label htmlFor="Name">
          Name</label>
      </div>

        <div className="form-floating mb-4">
         <input
            type="email"
            className="form-control"
            id="email" name="email" onChange={onChange}
            required placeholder="Email address"
          />
          <label htmlFor="floatingInput" className="form-label">
            Email address
          </label>
         
        </div>
        <div className="form-floating mb-3">
         <input
            type={showPassword ? "text" : "password"}
            className="form-control"
            onChange={onChange}
            id="password"
            name="password" placeholder="Password"
           />
          <label htmlFor="password" className="form-label">
            Password
          </label>
         
        </div>
        <div className="mb-3 form-check">
          <input style={{color: "white"}} type="checkbox" className="form-check-input" id="exampleCheck" onChange={() =>{ShowPassword()}}/>
          <label >Show password</label>
        </div>

        <div className="form-floating mb-3">
         <input
            type={showcPassword ? "text" : "password"}
            className="form-control"
            onChange={onChange}
            id="cpassword"
            name="cpassword" placeholder="Confirm Password"
            />
          <label htmlFor="cpassword" className="form-label">
            Confirm Password
          </label>
          
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={() =>{ShowcPassword()}}/>
          <label >Show Confirmed password</label>
        </div>
        <div className="container">
        <span><b>Already have account ?</b>  </span>
         <Link className="btn btn-outline-success" to="/login">Login</Link>
        <hr className="hr"/>
        <div className="my-3 glbtn">
           <GoogleOAuthProvider clientId="941301008462-jo0o7bo3865igightks3cqi3v952776b.apps.googleusercontent.com">
            <GoogleLogin
                onSuccess={credentialResponse => {
                  console.log(credentialResponse.credential);
                  localStorage.setItem('token', credentialResponse.credential)
                    navigate("/");
                }}
                onError={() => {
                  console.log('Login Failed');
                }}
              />
            </GoogleOAuthProvider>
          </div>
        <button type="submit" className="btn1">
          Signup
        </button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default Signup;