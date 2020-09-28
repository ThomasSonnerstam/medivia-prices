const Item = ({item, item2}) => {
  return (
    <>
      <li style={{ color: "white", width: "250px", margin: "5px 0", fontSize: "20px"}}>{item}</li>
      <li style={{ color: "white", margin: "5px 0", fontSize: "20px" }}>{item2}</li>
    </>
  )
}

export default Item;