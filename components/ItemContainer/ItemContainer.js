import styled from "@emotion/styled";

const ItemContainer = styled.div`
  width: 45%;
  height: 20vh;
  padding: 5px;
  margin: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border: 1px solid #2783ba;
  border-radius: 4px;

  @media screen and (min-width: 700px) {
    width: 22%;
  }

  @media screen and (min-width: 1000px) {
    width: 15%;
    max-width: 150px;
  }
`;

export default ItemContainer;
