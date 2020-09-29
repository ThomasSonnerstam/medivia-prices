import styled from "@emotion/styled";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  width: 60%;
  align-items: center;
  margin-bottom: 3vh;

  @media screen and (min-width: 700px) {
    width: 80%;
  }

  @media screen and (min-width: 1250px) {
    width: 50%;
  }
`;

export default FormContainer;
