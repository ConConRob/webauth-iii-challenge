import React from "react";
import styled from "styled-components";

const StyledButton = styled.div`
  font-size: 30px;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border: 1px solid black;
  position: relative;
  height: 70px;
  padding: 10px;
  :hover {
    color: white;
    background: grey;
  }
  :focus,
  :active {
    background: black;
  }
`;

export default function FormButton({ name, onClick }) {
  return <StyledButton onClick={onClick}>{name}</StyledButton>;
}
