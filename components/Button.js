const Button = ({city, handleClick}) => {
  return (
  <button onClick={handleClick} style={{ margin: "0 10px", width: "100px", height: "40px"}}>{city}</button>
  )
}

export default Button;