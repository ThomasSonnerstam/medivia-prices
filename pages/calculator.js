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
} from "../components/CalculatorComps";

const Calculator = () => {
  const [userInput, setUserInput] = useState("");
  const [loot, setLoot] = useState(0);
  const [itemAmount, setItemAmount] = useState(0);
  const [lootInfo, setLootInfo] = useState([{ itemName: "", amount: 0 }]);
  const [targetAmount, setTargetAmount] = useState(0);

  const usePreviousValue = (value) => {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  };

  const prevAmount = usePreviousValue(targetAmount);

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
        <CalculatorHalf>
          <h1>Loot</h1>
          <h1>{loot}gp</h1>
          <ul>
            {loot !== 0 &&
              lootInfo.map((item, i) => {
                return (
                  <li key={i}>
                    {item.amount}x {item.itemName}
                  </li>
                );
              })}
          </ul>

          <div>
            <h1>Supplies used:</h1>
          </div>
        </CalculatorHalf>

        <CalculatorHalf>
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
                        setLoot(loot + itemAmount);
                        console.log(prevAmount);

                        if (lootInfo.find((a) => a.itemName === item.name)) {
                          const updatedLoot = lootInfo.map((lootA) => {
                            if (item.name === lootA.itemName) {
                              setLoot(loot - prevAmount * itemAmount);
                              return { ...lootA, amount: targetAmount };
                            }
                            return lootA;
                          });

                          setLootInfo(updatedLoot);
                        } else {
                          setLootInfo([
                            ...lootInfo,
                            { itemName: item.name, amount: targetAmount },
                          ]);
                        }

                        setItemAmount(0);
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
                        min="1"
                      ></input>
                      <AddButton type="submit">Add</AddButton>
                    </AmountForm>
                  </ItemContainer>
                );
              })}
          </div>
        </CalculatorHalf>
      </CalculatorSection>
    </Layout>
  );
};

export default Calculator;
