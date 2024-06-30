
import React, { useState, useEffect, useRef, Component } from "react";
import {useLoginMutation} from "../App"

const LoginForm2 = ({ min: minInp, max: maxInp, ...restProps }) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
  
    const [loginQuery, { isLoading, data }] = useLoginMutation();
    console.log("LOGIN FORM", isLoading, data);
  
    const loginRef = useRef(false);
    const passwordRef = useRef(false);
  
    const handleLoginChange = (e) => {
      const newLogin = e.target.value;
      if (/^[a-zA-Z]*/.test(newLogin)) {
        setLogin(newLogin);
      }
    };
  
    const handlePasswordChange = (e) => {
      const newPassword = e.target.value;
      if (/^[a-zA-Z]*$/.test(newPassword)) {
        setPassword(newPassword);
      }
    };
  
    const loginInputStyle = {
      borderColor: (login.length < minInp || login.length > maxInp || !/^[a-zA-Z]*$/.test(login)) ? 'red' : 'initial',
    };
  
    const passwordInputStyle = {
      borderColor: (password.length < minInp || password.length > maxInp || !/^[a-zA-Z]*$/.test(password)) ? 'red' : 'initial',
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (login.trim() !== '' && password.trim() !== '') {
        loginQuery({ login, password });
      } else {
        alert('Please enter login and password');
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Login:</label>
          <input
            min={minInp}
            max={maxInp}
            {...restProps}
            value={login}
            style={loginInputStyle}
            onChange={handleLoginChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            min={minInp}
            max={maxInp}
            type="password"
            value={password}
            style={passwordInputStyle}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit" disabled={login.length < minInp || login.length > maxInp || password.length < minInp || password.length > maxInp}>Login</button>
      </form>
    );
  };
  
  export default LoginForm2;