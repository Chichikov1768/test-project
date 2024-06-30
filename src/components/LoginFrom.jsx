import React, { useState, useEffect, useRef, Component } from "react";
import {useLoginMutation} from "../App"

const LoginForm = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [loginQuery, { isLoading, data }] = useLoginMutation();
    console.log("LOGIN FORM", isLoading, data);
    return (
      <div>
        <input value={login} onChange={(e) => setLogin(e.target.value)} />
        <input value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={() => loginQuery({ login, password })}>Login...</button>
      </div>
    );
  };
  // console.log(store);

  export default LoginForm 