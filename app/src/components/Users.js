import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

import UserCard from "./UserCard";

import URL from "../URL";

const StyledUsers = styled.div`
  width: 600px;
  margin: 0 auto;
`;

export default function Users(props) {
  const [users, setUsers] = useState([]);

  const [isMount, setIsMount] = useState(true);

  if (isMount) {
    // get and set users
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: token
      }
    }
    axios
      .get(`${URL}users`,config)
      .then(res => {
        setUsers(res.data);
      })
      .catch(error => {});
    setIsMount(false);
  }

  return (
    <StyledUsers>
      {users.map(user => (
        <UserCard user={user} />
      ))}
    </StyledUsers>
  );
}
