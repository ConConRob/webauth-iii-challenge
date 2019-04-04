import React from "react";
import styled from "styled-components";

const StyledUserCard = styled.div`
  width: 600px;
  margin: 0 auto;
`;

export default function UserCard({ user }) {
  return (
    <StyledUserCard>
      <h3>{user.username}</h3>
      <p>{user.depatment}</p>
    </StyledUserCard>
  );
}
