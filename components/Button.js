const Button = ({city, handleClick}) => {
  return (
  <button onClick={handleClick} style={{ borderRadius: "5px", border: "2px solid #10659e", cursor: "pointer", margin: "0 10px", width: "100px", height: "40px"}}>{city}</button>
  )
}

export default Button;