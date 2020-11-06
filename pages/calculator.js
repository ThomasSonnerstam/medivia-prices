import React, { Fragment, useState } from "react";
import CalculatorSection from "../components/CalculatorSection/CalculatorSection";
import Layout from "../components/Layout/Layout";
import allItems from "../allItems";
import allSupplies from "../allSupplies";
import FormContainer from "../components/FormContainer/FormContainer";
import {
  Input,
  AddButton,
  ResetButton,
  AmountForm,
  ItemPriceText,
  ItemNameText,
  ItemImage,
  ItemContainer,
  LeftHalf,
  RightHalf,
  SupplyContainer,
  SupplyItem,
  SupplyInput,
  SupplyLabel,
} from "../components/CalculatorComps";

const Calculator = () => {
  const [userInput, setUserInput] = useState("");
  const [loot, setLoot] = useState(0);
  const [itemAmount, setItemAmount] = useState(0);
  const [lootInfo, setLootInfo] = useState([
    { itemName: "", amount: 0, itemTotalPrice: 0 },
  ]);
  const [targetAmount, setTargetAmount] = useState(0);
  const [supplies, setSupplies] = useState(0);

  const [supplyAmount, setSupplyAmount] = useState(0);
  const [supplyAmountPrice, setSupplyAmountPrice] = useState(0);

  console.log(supplyAmount, supplyAmountPrice);

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  const results = !userInput
    ? allItems.items
    : allItems.items.filter((item) =>
        item.name.toLowerCase().includes(userInput.toLocaleLowerCase())
      );

  return (
    <Layout>
      <CalculatorSection>
        <LeftHalf>
          <SupplyContainer>
            <h1 style={{ color: "#fac125" }}>Backpacks used:</h1>
            {allSupplies.backpacks.map((item, i) => {
              return (
                <div key={i}>
                  <SupplyItem>
                    <img
                      style={{
                        width: "32px",
                        height: "32px",
                        marginRight: "10px",
                        alignSelf: "center",
                      }}
                      src={item.url}
                    ></img>
                    <p style={{ color: "#fac125" }}>{item.name}</p>
                  </SupplyItem>
                  <div>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                      }}
                    >
                      <SupplyLabel htmlFor="amount">Amount:</SupplyLabel>
                      <SupplyInput
                        type="number"
                        name="amount"
                        min="0"
                      ></SupplyInput>
                      <SupplyLabel htmlFor="price">Price per BP:</SupplyLabel>
                      <SupplyInput
                        type="number"
                        name="price"
                        min="0"
                      ></SupplyInput>
                      <button type="submit">Add</button>
                    </form>
                  </div>
                </div>
              );
            })}
            <h1 style={{ marginTop: "30px", color: "#fac125" }}>Units used:</h1>
            {allSupplies.singles.map((item, i) => {
              return (
                <div key={i}>
                  <SupplyItem>
                    <img
                      style={{
                        width: "32px",
                        height: "32px",
                        marginRight: "10px",
                        alignSelf: "center",
                      }}
                      src={item.url}
                    ></img>
                    <p style={{ color: "#fac125" }}>{item.name}</p>
                  </SupplyItem>
                  <div>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                      }}
                    >
                      <SupplyLabel htmlFor="amount">Amount:</SupplyLabel>
                      <SupplyInput
                        type="number"
                        name="amount"
                        min="0"
                      ></SupplyInput>
                      <SupplyLabel htmlFor="price">Price per BP:</SupplyLabel>
                      <SupplyInput
                        type="number"
                        name="price"
                        min="0"
                      ></SupplyInput>
                      <button type="submit">Add</button>
                    </form>
                  </div>
                </div>
              );
            })}
          </SupplyContainer>
          <div>
            <h1 style={{ marginBottom: "0" }}>Total Loot:</h1>
            <h1 style={{ color: "#fac125" }}>{loot}gp</h1>
            <h1 style={{ marginBottom: "0" }}>Total supplies:</h1>
            <h1 style={{ color: "#fac125" }}>{supplies}</h1>

            <ul>
              {loot !== 0 &&
                lootInfo.map((item, i) => {
                  if (item.amount > 0) {
                    return (
                      <li key={i}>
                        - {item.amount}x {item.itemName}
                      </li>
                    );
                  }
                  return;
                })}
            </ul>
          </div>
        </LeftHalf>

        <RightHalf>
          <h1>What did you loot?</h1>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <FormContainer>
              <label htmlFor="search" style={{ color: "white" }}>
                Search item:
              </label>
              <Input
                type="text"
                name="search"
                id="search"
                value={userInput}
                onChange={handleChange}
              />
            </FormContainer>
            <ResetButton
              onClick={() => {
                setLoot(0);
                setLootInfo([]);
              }}
            >
              Reset loot
            </ResetButton>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {results
              .sort((a, b) => (a.name > b.name ? 1 : -1))
              .map((item, i) => {
                return (
                  <ItemContainer key={i}>
                    <ItemImage src={item.url}></ItemImage>
                    <a
                      href={`https://wiki.mediviastats.info/${item.name
                        .split(" ")
                        .join("_")}`}
                    >
                      <ItemNameText>{item.name}</ItemNameText>
                    </a>
                    <ItemPriceText>{item.price}gp</ItemPriceText>

                    <AmountForm
                      onSubmit={(e) => {
                        e.preventDefault();

                        const duplicate = lootInfo.find(
                          (a) => a.itemName === item.name
                        );

                        if (duplicate) {
                          const updatedLoot = lootInfo.map((lootA) => {
                            if (item.name === lootA.itemName) {
                              let diff = lootA.itemTotalPrice - itemAmount;
                              setLoot(loot - diff);
                              return {
                                ...lootA,
                                amount: targetAmount,
                                itemTotalPrice: itemAmount,
                              };
                            }
                            return lootA;
                          });
                          setLootInfo(updatedLoot);
                        } else if (targetAmount > 0) {
                          setLootInfo([
                            ...lootInfo,
                            {
                              itemName: item.name,
                              amount: targetAmount,
                              itemTotalPrice: itemAmount,
                            },
                          ]);
                          setLoot(loot + itemAmount);
                        }
                        setTargetAmount(0);
                      }}
                    >
                      <input
                        style={{ width: "50%", margin: "5px 0" }}
                        onChange={(e) => {
                          setItemAmount(e.target.value * item.price);
                          setTargetAmount(e.target.value);
                        }}
                        type="number"
                        min="0"
                      ></input>
                      <AddButton type="submit">Add</AddButton>
                    </AmountForm>
                  </ItemContainer>
                );
              })}
          </div>
        </RightHalf>
      </CalculatorSection>
    </Layout>
  );
};

export default Calculator;
