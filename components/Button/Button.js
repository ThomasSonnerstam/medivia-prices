import styled from "@emotion/styled";

const StyledButton = styled.button`
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 8px;
  width: 25%;
  height: 50px;

  @media screen and (min-width: 700px) {
    width: 25%
  }
`


const Button = ({city, handleClick}) => {
  return (
  <StyledButton onClick={handleClick}>{city}</StyledButton>
  )
}

export default Button;