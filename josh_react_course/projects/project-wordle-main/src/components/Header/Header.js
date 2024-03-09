import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <HeaderWrapper>
      <h1>Word Game</h1>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  border-bottom: 1px solid black;
  width: 100%;
`;
export default Header;
