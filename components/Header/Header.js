import React from "react";
import styled from "@emotion/styled";

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const Link = styled.a`
  margin: 0 20px;
  color: #fac125;
`;

const Line = styled.div`
  width: 100vw;
  background-color: white;
  height: 1px;
`;

const Header = () => {
  return (
    <>
      <StyledHeader style={{ zIndex: 99 }}>
        <Link href="/">Home</Link>
        <Link href="/locations">Locations</Link>
        <Link href="/all-items">All items</Link>
        <Link href="/calculator">Hunt calculator (work in progress)</Link>
      </StyledHeader>
      <Line />
    </>
  );
};

export default Header;
