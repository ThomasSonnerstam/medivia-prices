import styled from "@emotion/styled";

const ListItem = styled.li`
  color: white;
  margin: 5px 0;
  font-size: 20px;
` 


const Item = ({item, item2}) => {
  return (
    <>
      <ListItem>{item}</ListItem>
      <ListItem>{item2}</ListItem>
    </>
  )
}

export default Item;