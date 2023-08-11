import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { Link } from "react-router-dom";


function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  let navigate = useNavigate();
   
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://ghsgd.onrender.com/api/auth/login", {
      method: "POST",
      headers: {
        Content_Type: "application/json",
        "content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
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

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  

  //password hide show 
      const [showPassword, setShowPassword] = useState(false);

      const ShowPassword = () => {
          setShowPassword(!showPassword);
      };

  return (
    <div className="slbody">

           <div className="my-5 forml">

    <div className="sheading">Login to your Account</div>

      <form className="my-4" onSubmit={handleSubmit}>
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
            value={credentials.password}
            onChange={onChange}
            id="exampleInputPassword1"
            name="password" placeholder="Password"
          />
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={() =>{ShowPassword()}}/>
          <label className="form-check-label" htmlFor="exampleCheck1">Show password</label>
        </div>
         <span><b>Does not have any account ? </b></span>
        <Link className="btn btn-outline-success" to="/signup">Signup</Link>

        <hr className="hr"/>
        <div className="my-3 glbtn">
          <GoogleOAuthProvider clientId="941301008462-jo0o7bo3865igightks3cqi3v952776b.apps.googleusercontent.com">
          <GoogleLogin
                onSuccess={credentialResponse => {
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
          Login
        </button>
      </form>
    </div>
    </div>
  );
}

export default Login;

