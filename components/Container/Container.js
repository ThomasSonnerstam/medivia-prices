import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0;
  width: 100%;

  @media screen and (min-width: 700px) {
    width: 80%;
  }

  @media screen and (min-width: 1250px) {
    width: 50%
  }
`

export default Container;