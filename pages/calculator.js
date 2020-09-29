import React, { useState } from "react";
import CalculatorHalf from "../components/CalculatorHalf/CalculatorHalf";
import CalculatorSection from "../components/CalculatorSection/CalculatorSection";
import Layout from "../components/Layout/Layout";
import allItems from "../allItems";
import FormContainer from "../components/FormContainer/FormContainer";

const Calculator = () => {
  const [userInput, setUserInput] = useState("");
  const [cost, setCost] = useState(0);
  const [loot, setLoot] = useState(0);

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
          <p>{loot}</p>
          <input style={{ width: "15%" }} type="number"></input>
        </CalculatorHalf>

        <CalculatorHalf>
          <h1>What did you loot?</h1>
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
                      }}
                    >
                      <input
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

                    {/* <div
                      style={{
                        display: "flex",
                        width: "80%",
                        justifyContent: "space-between",
                        marginBottom: "10px",
                      }}
                    >
                      <img
                        onClick={() => {
                          setLoot(loot - item.price);
                        }}
                        style={{
                          width: "32px",
                          height: "32px",
                          cursor: "pointer",
                        }}
                        src="/left-arrow.png"
                      ></img>
                      <p style={{ marginTop: "10px" }}>0</p>
                      <img
                        onClick={() => {
                          setLoot(loot + item.price);
                        }}
                        style={{
                          transform: "rotate(180deg)",
                          width: "32px",
                          height: "32px",
                          cursor: "pointer",
                        }}
                        src="/left-arrow.png"
                      ></img>
                    </div> */}
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
