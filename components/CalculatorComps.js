import styled from "@emotion/styled";

export const Input = styled.input`
  height: 5vh;
  width: 100%;
  max-width: 300px;
  margin-top: 10px;
  padding-left: 15px;
  border: none;
  border-radius: 5px;
`;

export const LeftHalf = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  position: fixed;
`;

export const RightHalf = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin-left: 50vw;
`;

export const AddButton = styled.button`
  width: 50%;
  border: none;
  border-radius: 3px;
  margin: 5px 0;
`;

export const ResetButton = styled.button`
  height: 40px;
  width: 120px;
  border-radius: 7px;
  background-color: #a1301a;
`;

export const AmountForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ItemContainer = styled.div`
  width: 30%;
  border: 1px solid white;
  margin: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ItemPriceText = styled.p`
  color: #dee0df;
  font-size: 16px;
  margin: 0 0 5px 0;
  text-align: center;
`;

export const ItemNameText = styled.p`
  text-align: center;
  color: #58b85b;
`;

export const ItemImage = styled.img`
  width: 32px;
  height: 32px;
  margin-top: 5px;
`;
