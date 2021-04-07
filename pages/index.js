import React, { useState } from "react";
import Section from "../components/Section/Section";
import Layout from "../components/Layout/Layout";

const App = () => {
  return (
    <Layout>
      <Section>
        <h1>Medivian Helper</h1>
        <p>
          Heya! This is a tool to help you see where you can sell your Medivia
          items for the highest price!
        </p>
        <p style={{ fontSize: "20px", textAlign: "center", color: "#fac125" }}>
          If you find any errors, or want items added - message Shootieh on
          Legacy.
        </p>
      </Section>
    </Layout>
  );
};

export default App;
