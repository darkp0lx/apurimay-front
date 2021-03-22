import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
const Login = () => {
  const [email,setEmail]=useState()
  const [password,setPassword]=useState()
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form action="">
          <h5>email</h5>
          <input  value={email} onchange={(e)=>setEmail(e.target.value)} type="text" />

          <h5>Password</h5>
          <input value={password} onchange={(e)=>setEmail(e.target.value)} type="password" />
          <button className="login__signInButton">Sign In</button>
        </form>
        <p>
          By signing-in you agree to the Amazon FAKE CLONE conditions of use &
          sale.
        </p>
        <button className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;
