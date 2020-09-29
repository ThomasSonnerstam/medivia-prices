import React, { useState } from "react";
import CalculatorHalf from "../components/CalculatorHalf/CalculatorHalf";
import CalculatorSection from "../components/CalculatorSection/CalculatorSection";
import Layout from "../components/Layout/Layout";
import allItems from "../allItems";
import FormContainer from "../components/FormContainer/FormContainer";

const Calculator = () => {
  const [userInput, setUserInput] = useState("");
  const [loot, setLoot] = useState(0);
  const [itemAmount, setItemAmount] = useState(0);
  const [lootInfo, setLootInfo] = useState([{ itemName: "", amount: 0 }]);
  const [targetAmount, setTargetAmount] = useState(0);

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
            {lootInfo.map((item, i) => {
              return (
                <li key={i}>
                  {item.amount}x {item.itemName}
                </li>
              );
            })}
          </ul>
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
              <input
                style={{
                  paddingLeft: "15px",
                  height: "5vh",
                  width: "100%",
                  maxWidth: "300px",
                  marginTop: "10px",
                  border: "none",
                  borderRadius: "5px",
                }}
                type="text"
                name="search"
                id="search"
                value={userInput}
                onChange={handleChange}
              ></input>
            </FormContainer>
            <button
              style={{
                height: "40px",
                width: "120px",
                borderRadius: "7px",
                backgroundColor: "#a1301a",
              }}
              onClick={() => {
                setLoot(0);
                setLootInfo([]);
              }}
            >
              Reset loot
            </button>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {results
              .sort((a, b) => (a.name > b.name ? 1 : -1))
              .map((item, i) => {
                return (
                  <div
                    key={i}
                    style={{
                      width: "30%",
                      border: "1px solid white",
                      margin: "2px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <img
                      style={{
                        width: "32px",
                        height: "32px",
                        justifySelf: "center",
                        marginTop: "5px",
                      }}
                      src={item.url}
                    ></img>
                    <a
                      href={`https://wiki.mediviastats.info/${item.name
                        .split(" ")
                        .join("_")}`}
                    >
                      <p style={{ textAlign: "center", color: "#58b85b" }}>
                        {item.name}
                      </p>
                    </a>
                    <p
                      style={{
                        color: "#dee0df",
                        fontSize: "16px",
                        margin: "0 0 5px 0",
                        textAlign: "center",
                      }}
                    >
                      {item.price}
                    </p>

                    <form
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                      onSubmit={(e) => {
                        e.preventDefault();
                        setLoot(loot + itemAmount);

                        const newState = lootInfo.map((item) => {
                          if (item.itemName === item.name) {
                            return {
                              ...item,
                              amount: item.amount + targetAmount,
                            };
                          }
                          return item;
                        });

                        setLootInfo([
                          ...lootInfo,
                          newState
                            ? newState
                            : { itemName: item.name, amount: targetAmount },
                        ]);

                        setItemAmount(0);
                        setTargetAmount(0);
                      }}
                    >
                      <input
                        onChange={(e) => {
                          setItemAmount(e.target.value * item.price);
                          setTargetAmount(e.target.value);
                        }}
                        style={{ width: "50%", margin: "5px 0" }}
                        type="number"
                      ></input>
                      <button
                        style={{
                          width: "50%",
                          border: "none",
                          borderRadius: "3px",
                          margin: "5px 0",
                        }}
                        type="submit"
                      >
                        Add
                      </button>
                    </form>
                  </div>
                );
              })}
          </div>
        </CalculatorHalf>
      </CalculatorSection>
    </Layout>
  );
};

export default Calculator;
