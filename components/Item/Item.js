import styled from "@emotion/styled";

const ListItem = styled.li`
  color: #dee0df;
  margin: 5px 0;
  font-size: 16px;
  text-transform: capitalize;
` 


const Item = ({item}) => {
  return (
    <>
      <ListItem>{item}</ListItem>
    </>
  )
}

export default Item;