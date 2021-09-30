import React, { useState } from "react";
import styled from "styled-components"

import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";

const Login = () => {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    console.log("email:", email);
    console.log("password:", password);
    /* firebase code sign in */

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => console.log(auth))
      .catch((error) => alert(error.message));
    history.push("/");
  };

  const register = (e) => {
    e.preventDefault();
    console.log("register email:", email);
    console.log("register password:", password);
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => console.log(auth))
      .catch((error) => alert(error.message));
    history.push("/");

    /* firebase register */
  };

  return (
    <Container>
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
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
          />

          <h5>Password</h5>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <button
            type="submit"
            onClick={(e) => signIn(e)}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to the Amazon FAKE CLONE conditions of use &
          sale.
        </p>
        <button
          type="submit"
          onClick={(e) => register(e)}
          className="login__registerButton"
        >
          Create your Amazon Account
        </button>
      </div>
    </div>
    </Container>
  );
};

export default Login;

const Container=styled.div`
  .login__logo{
  margin-top: 20px;
  margin-bottom: 20px;
  object-fit: contain;
  width: 100px;
  margin-right: auto;
  margin-left: auto;
}
.login{
  background-color: #fff;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.login__container{
  width: 300px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border: 1px solid lightgray;
  padding: 20px;
}
.login__container h1{
  font-weight: 500;
  margin-bottom: 20px;
}
.login__container form h5{
  margin-bottom: 5px;
}
.login__container form input{
  height: 30px;
  margin-bottom: 10px;
  background-color: #fff;
  width: 98%;
}
.login__container p{
  margin-top: 15px;
  font-size: 12px;
}
.login__signInButton{
  background-color: #f0c14b;
  border-radius: 2px;
  width: 100%;
  height: 30px;
  border: 1px solid;
  margin-top: 10px;
  border-color: #a88734 #9c7e31 #846a29;
}
.login__registerButton{
  border-radius: 2px;
  width: 100%;
  height: 30px;
  border: 1px solid;
  margin-top: 10px;
}
`