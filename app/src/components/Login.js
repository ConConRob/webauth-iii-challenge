import React from "react";
import styled from "styled-components";

import Input from "./Input";
import FormButton from "./FormButton";

const StyledLogin = styled.form`
  width: 600px;
  margin: 0 auto;
`;

export default function Login(props) {
  return (
    <StyledLogin>
      <Input label="Username" type="text" />
      <Input label="Password" type="password" />
      <FormButton name="Login" />
    </StyledLogin>
  );
}
