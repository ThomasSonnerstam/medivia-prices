import React, { useState, useRef, useEffect } from "react";
import CalculatorHalf from "../components/CalculatorHalf/CalculatorHalf";
import CalculatorSection from "../components/CalculatorSection/CalculatorSection";
import Layout from "../components/Layout/Layout";
import allItems from "../allItems";
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
  const [gold, setGold] = useState(0);

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  const results = !userInput
    ? allItems.items
    : allItems.items.filter((item) =>
        item.name.toLowerCase().includes(userInput.toLocaleLowerCase())
      );

  console.log(lootInfo);

  return (
    <Layout>
      <CalculatorSection>
        <LeftHalf>
          <h1 style={{ marginBottom: "0" }}>Total Loot:</h1>
          <h1 style={{ color: "#fac125" }}>{loot}gp</h1>
          <h1 style={{ marginBottom: "0" }}>Total supplies:</h1>
          <h1 style={{ color: "#fac125" }}>{supplies}</h1>
          {loot > supplies && (
            <h1 style={{ color: "green" }}>{`You made ${
              loot - supplies
            }gp profit :)`}</h1>
          )}
          {loot < supplies && (
            <h1 style={{ color: "red" }}>{`You wasted ${
              loot - supplies
            }gp :(`}</h1>
          )}
          {loot == supplies && (
            <h1 style={{ color: "#fac125" }}>You broke even!</h1>
          )}

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

          <div style={{ width: "30%" }}>
            <h1>Gold coins:</h1>

            <form
              onSubmit={(e) => {
                e.preventDefault();

                const findGold = lootInfo.find((a) => a.itemName === "gold");

                if (findGold) {
                  const updatedLoot = lootInfo.map((lootA) => {
                    if (lootA.itemName === "gold") {
                      let diff = lootA.amount;
                      setLoot(loot - diff);
                      return {
                        ...lootA,
                        amount: gold,
                      };
                    }
                    return lootA;
                  });
                  setLootInfo(updatedLoot);
                } else {
                  setLootInfo([
                    ...lootInfo,
                    { itemName: "gold", amount: gold },
                  ]);
                }
              }}
            >
              <input
                type="number"
                onClick={(e) => (e.target.value = "")}
                onChange={(e) => {
                  setGold(parseInt(e.target.value));
                }}
                value={gold}
              ></input>
              <AddButton onClick={() => setLoot(loot + gold)} type="submit">
                Add
              </AddButton>
            </form>
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
                onClick={() => setUserInput("")}
              />
            </FormContainer>
            <ResetButton
              onClick={() => {
                setLoot(0);
                setLootInfo([]);
                setGold(0);
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

                        const findItem = lootInfo.find(
                          (a) => a.itemName === item.name
                        );

                        if (findItem) {
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
                        value={targetAmount}
                        onClick={() => setTargetAmount("")}
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
