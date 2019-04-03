import React from "react";
import styled from "styled-components";

const StyledInput = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border: 1px solid black;
  position: relative;
  height: 70px;
  padding: 10px;

  label {
    font-size: 20px;
    position: absolute;
    top: -14px;
    left: 30px;
    background: white;
    padding: 0 8px;
  }
  input {
    font-size: 24px;
    width: 100%;
    height: 100%;
    border: none;
    &:active,
    &:focus {
      outline: none;
    }
  }
`;

export default function Register(props) {
  const { label, type, inputRef } = props;
  return (
    <StyledInput>
      <label>{label}</label>
      <input ref={inputRef} type={type} />
    </StyledInput>
  );
}
