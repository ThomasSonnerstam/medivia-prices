import styled from "@emotion/styled";

const List = styled.ul`
  width: 100%;
  list-style: none;
  padding: 0;

  @media screen and (min-width: 700px) {
    width: 80%;
  }

  @media screen and (min-width: 1250px) {
    width: 50%
  }
`

export default List;