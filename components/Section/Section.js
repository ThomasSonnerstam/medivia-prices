import styled from "@emotion/styled";

const Section = styled.section`
  display: flex;
  width: 100vw;
  align-items: center;
  flex-direction: column;
  padding: 2vh;

  @media screen and (min-width: 1000px) {
    padding: 2vh 5vw;
  }
`;

export default Section;
