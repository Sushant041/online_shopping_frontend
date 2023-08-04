import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
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
  
  //google signup function
  const googleSignup = async () => {

    const {name, email, password} = credentials;

    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content_Type": "application/json",
        "content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
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


//   const handleClickShowPassword = () => {
//       setShowPassword(!showPassword);
//   };
//   const handleClickShowcPassword = () => {
//     setShowcPassword(!showcPassword);
// };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
     <>
     <h3 className="sheading">Create Account</h3>
    <div className="container forms">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control" required
            id="name" name="name" onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email" name="email" onChange={onChange}
            aria-describedby="emailHelp" required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            className="form-control"
            onChange={onChange}
            id="password"
            name="password"
           />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">
            Confirm Password
          </label>
          <input
            type={showcPassword ? "text" : "password"}
            className="form-control"
            onChange={onChange}
            id="cpassword"
            name="password"
            />
        </div>
        <div className="container">
        <span><b>Already have account ?</b>  </span>
         <Link className="btn btn-outline-success" to="/login">Login</Link>
        <hr className="hr"/>
        <div className="my-3 glbtn">
           <GoogleOAuthProvider clientId="941301008462-jo0o7bo3865igightks3cqi3v952776b.apps.googleusercontent.com">
          <GoogleLogin
                onSuccess={credentialResponse => {
                  var decoded = jwt_decode(credentialResponse.credential);
                  credentials.name = decoded.name; 
                  credentials.email = decoded.email;
                  googleSignup();
                }}
                onError={() => {
                  console.log('Login Failed');
                }}
              />
            </GoogleOAuthProvider>
          </div>
        <button type="submit" className="btn btn-success btn1">
          Signup
        </button>
        </div>
      </form>
    </div>
    </>
  );
}

export default Signup;