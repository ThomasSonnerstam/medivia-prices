import styled from "@emotion/styled";

const StyledButton = styled.button`
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 8px;
  width: 25%;
  height: 50px;

  :focus {
    outline: none;
  }

  .focus {
    background-color: #58b85b;
  }

  @media screen and (min-width: 700px) {
    width: 25%
  }
`


const Button = ({text, handleClick}) => {
  return (
  <StyledButton onClick={handleClick}>{text}</StyledButton>
  )
}

export default Button;