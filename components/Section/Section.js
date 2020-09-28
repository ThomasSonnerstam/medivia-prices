import styled from "@emotion/styled";

const Section = styled.section`
  display: flex;
  width: 100vw;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  padding: 5vw;

  @media screen and (min-width: 700px) {
    padding: 5vw 15vw;
  }
`

export default Section;