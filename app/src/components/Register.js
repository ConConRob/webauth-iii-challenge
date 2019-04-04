import React, { useRef, useState } from "react";
import styled from "styled-components";
import axios from "axios";

import Input from "./Input";
import FormButton from "./FormButton";

import URL from "../URL";

const StyledRegister = styled.form`
  width: 600px;
  margin: 0 auto;
  button {
    width: 100%;
  }
  .error-message {
    color: red;
  }
  .success-message {
    color: green;
  }
`;

export default function Register(props) {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const departmentRef = useRef();

  const [errorMessage, SetErrorMessage] = useState("");
  const [successMessage, SetSuccessMessage] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);

  function register() {
    if (isRegistering) {
      return null;
    }
    setIsRegistering(true)
    // reset messages
    SetErrorMessage("");
    SetSuccessMessage("");
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    const department = departmentRef.current.value;
    axios
      .post(`${URL}register`, { username, password, department })
      .then(res => {
        SetSuccessMessage(res.data.message);
      })
      .catch(error => {
        SetErrorMessage(error.message);
      }).finally(()=> setIsRegistering(false));
  }

  return (
    <StyledRegister>
      <Input inputRef={usernameRef} label="Username" type="text" />
      <Input inputRef={passwordRef} label="Password" type="password" />
      <Input inputRef={departmentRef} label="Department" type="text" />
      <FormButton onClick={register} name="Register" />
      <p className="success-message">{successMessage}</p>
      <p className="error-message">{errorMessage}</p>
    </StyledRegister>
  );
}
