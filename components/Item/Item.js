/* eslint-disable react/prop-types */
import React from "react";
import styled from "@emotion/styled";

const ListItem = styled.p`
  color: #58b85b;
  font-size: 16px;
  margin: 0;
  text-align: center;
`;

const Item = ({ item }) => {
  return (
    <>
      <ListItem>{item}</ListItem>
    </>
  );
};

export default Item;
