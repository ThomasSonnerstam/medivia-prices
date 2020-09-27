const Item = ({item, item2}) => {
  return (
    <>
      <li style={{ width: "200px", margin: "5px 0", fontSize: "24px"}}>{item}</li>
      <li style={{ margin: "5px 0", fontSize: "24px" }}>{item2}</li>
    </>
  )
}

export default Item;