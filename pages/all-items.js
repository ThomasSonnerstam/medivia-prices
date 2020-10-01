import React, { useState } from "react";
import Item from "../components/Item/Item";
import Section from "../components/Section/Section";
import Layout from "../components/Layout/Layout";
import allItems from "../allItems";
import FormContainer from "../components/FormContainer/FormContainer";
import ItemContainer from "../components/ItemContainer/ItemContainer";
import SectionRow from "../components/SectionRow/SectionRow";

const App = () => {
  const [userInput, setUserInput] = useState("");

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
      <Section>
        <Section>
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
        </Section>
        <SectionRow>
          {results
            .sort((a, b) => (a.name > b.name ? 1 : -1))
            .map((item, i) => {
              return (
                <ItemContainer key={i}>
                  <img
                    style={{ width: "32px", height: "32px" }}
                    src={item.url}
                  ></img>
                  <a
                    href={`https://wiki.mediviastats.info/${item.name
                      .split(" ")
                      .join("_")}`}
                  >
                    <Item item={item.name} />
                  </a>
                  <p
                    style={{
                      color: "#dee0df",
                      fontSize: "16px",
                      margin: "0",
                      textAlign: "center",
                    }}
                  >
                    {item.price}gp
                  </p>
                  <p
                    style={{
                      color: "#fac125",
                      fontSize: "16px",
                      margin: "0",
                      textAlign: "center",
                    }}
                  >
                    Location:
                  </p>
                  <p
                    style={{
                      color: "#dee0df",
                      fontSize: "16px",
                      margin: "0",
                      textAlign: "center",
                    }}
                  >
                    {item.location}
                  </p>
                </ItemContainer>
              );
            })}
        </SectionRow>
        <p style={{ fontSize: "20px", textAlign: "center" }}>
          If you find any errors, or want items added - message Revi Black on
          Legacy.
        </p>
      </Section>
    </Layout>
  );
};

export default App;
