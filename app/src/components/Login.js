import React, { useRef, useState } from "react";
import styled from "styled-components";
import axios from "axios";

import Input from "./Input";
import FormButton from "./FormButton";

import URL from "../URL";

const StyledLogin = styled.form`
  width: 600px;
  margin: 0 auto;
  .error-message {
    color: red;
  }
`;

export default function Login(props) {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const [errorMessage, SetErrorMessage] = useState("");
  const [isLoginIn, setIsLoginIn] = useState(false);

  function login() {
    if (isLoginIn) {
      return null;
    }
    setIsLoginIn(true);
    SetErrorMessage("");
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    axios
      .post(`${URL}login`, { username, password })
      .then(res => {
        localStorage.setItem("token", res.data.token);
      })
      .catch(error => {
        SetErrorMessage(error.message);
      })
      .finally(() => setIsLoginIn(false));
  }

  return (
    <StyledLogin>
      <Input inputRef={usernameRef} label="Username" type="text" />
      <Input inputRef={passwordRef} label="Password" type="password" />
      <FormButton onClick={login} name="Login" />
      <p className="error-message">{errorMessage}</p>
    </StyledLogin>
  );
}
