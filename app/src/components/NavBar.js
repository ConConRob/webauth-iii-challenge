import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavBar = styled.nav`
  margin: 0 auto;
  width: 600px;
  display: flex;
  justify-content: space-around;
  .link {
    box-sizing: border-box;
    border: 1px solid black;
    width: 100%;
    padding: 10px 0;
    text-align: center;
    text-decoration: none;
    color: black;
  }
  .active {
    background: black;
    color: white;
  }
`;

export default function NavBar(props) {
  return (
    <StyledNavBar>
      <NavLink className="link" exact to="/">
        Home
      </NavLink>
      <NavLink className="link" to="/register">
        Register
      </NavLink>
      <NavLink className="link" to="/login">
        Login
      </NavLink>
      <NavLink className="link" to="/users">
        Users
      </NavLink>
    </StyledNavBar>
  );
}
