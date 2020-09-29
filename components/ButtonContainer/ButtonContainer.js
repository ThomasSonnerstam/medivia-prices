import styled from "@emotion/styled";

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-evenly;

  @media screen and (min-width: 700px) {
    width: 80%;
  }

  @media screen and (min-width: 700px) {
    width: 100%;
  }

  @media screen and (min-width: 1250px) {
    width: 40%;
  }
`;

export default ButtonContainer;
