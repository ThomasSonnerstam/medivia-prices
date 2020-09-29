import styled from "@emotion/styled";

const CheckBoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 3vh;

  @media screen and (min-width: 700px) {
    width: 70%;
  }

  @media screen and (min-width: 1000px) {
    width: 40%;
  }
`;

export default CheckBoxContainer;
