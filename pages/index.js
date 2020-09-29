import { Fragment, useState, useEffect } from "react";
import Item from "../components/Item/Item";
import Button from "../components/Button/Button";
import Section from "../components/Section/Section";
import List from "../components/List/List";
import ButtonContainer from "../components/ButtonContainer/ButtonContainer";
import Layout from "../components/Layout/Layout";
import locationItems from "../locationItems";
import allItems from "../allItems";
import FormContainer from "../components/FormContainer/FormContainer";

const App = () => {

  const [selected, setSelected] = useState("");
  const [isCities, setIsCities] = useState(false);
  const [isAllItems, setIsAllItems] = useState(false);
  const [userInput, setUserInput] = useState("");

  const handleChange = event => {
    setUserInput(event.target.value);
  };

  const results = !userInput ? allItems.items : allItems.items.filter(item => 
      item.name.toLowerCase().includes(userInput.toLocaleLowerCase())
    );

  const citiesNpc = allItems.items.filter(item => item.location == selected);
  
  return (
    <Layout>
      <Section>
        <h1 style={{ color: "white", fontSize: "30px" }}>Medivia sell prices</h1>
        <p style={{ textAlign: "center", fontSize: "20px", color: "white" }}>Choose to filter on cities/NPCs or search under all items</p>
        <p style={{ fontSize: "20px", color: "#fac125" }}>If you find any errors, or want items added - message Revi Black on Legacy.</p>
        <ButtonContainer>
          <Button handleClick={() => {setIsCities(true); setIsAllItems(false)}} text="Cities/NPC"></Button>
          <Button handleClick={() => {setIsCities(false); setSelected(""); setIsAllItems(true)}} text="All items"></Button>
        </ButtonContainer>

        <div style={{ width: "80%", height: "1px", backgroundColor: "white", margin: "15px 0"}}></div>
        
        
        {isCities && <>
          <ButtonContainer>
            <Button handleClick={() => { setSelected("Arak") }} text="Arak" />
            <Button handleClick={() => { setSelected("Osaris") }} text="Osaris" />
            <Button handleClick={() => { setSelected("Garrogat") }} text="Garrogat" />
            <Button handleClick={() => { setSelected("Lucindel") }} text="Lucindel" />
            <Button handleClick={() => { setSelected("Mittenhoff") }} text="Mittenhoff" />
            <Button handleClick={() => { setSelected("Blue djinn") }} text="Blue djinn" />
            <Button handleClick={() => { setSelected("Green djinn") }} text="Green djinn" />
            <Button handleClick={() => { setSelected("Wulkan") }} text="Wulkan" />
            <Button handleClick={() => { setSelected("Aremis") }} text="Aremis" />
            <Button handleClick={() => { setSelected("Ziyad") }} text="Ziyad" />
            <Button handleClick={() => { setSelected("Draculd") }} text="Draculd" />
          </ButtonContainer>
          <div style={{ width: "100%", height: "1px", backgroundColor: "white", margin: "15px 0"}}></div>
          <p style={{ color: "#fac125" }}>Click the name of the items for the wiki link</p>
          </>}

          <List>
          {citiesNpc.sort((a, b) => a.name > b.name ? 1 : -1).map((item, i) => {
          return (
            <Fragment key={i}>
              <div style={{ display: "flex", justifyContent: "space-between" }} >
                <img src={item.url}></img>
                <a href={`https://wiki.mediviastats.info/${item.name.split(" ").join("_")}`}>
                 <Item item={item.name} />
                </a>
                <Item item={item.price} />
              </div>
              <div style={{ width: "100%", height: "1px", backgroundColor: "white"}}></div>
            </Fragment>
          )
        })}
          </List>

        {isAllItems && 
        <>
        <FormContainer>
          <label htmlFor="search" style={{ color: "white" }}>Search item:</label>
          <input 
            style={{ paddingLeft: "15px", 
            height: "5vh", width: "50%", 
            marginTop: "10px", border: "none", 
            borderRadius: "5px"}} 
            type="text" name="search" id="search" value={userInput} onChange={handleChange}></input>
          <p style={{ color: "#fac125" }}>Click the name of the items for the wiki link</p>
        </FormContainer>
          <List>
            {results.sort((a, b) => a.name > b.name ? 1 : -1).map((item, i) => {
              return (
                <Fragment key={i}>
                  <div style={{ display: "flex", alignItems: "center" }} >
                    <img style={{ marginRight: "20px", width: "32px", height: "32px"}} src={item.url}></img>
                  
                  <div style={{ display: "flex", flexDirection: "column"}}>
                    <a href={`https://wiki.mediviastats.info/${item.name.split(" ").join("_")}`}>
                      <p style={{ color: "#2783ba"}}>{item.name}</p>
                    </a>
                    <p><span style={{ color: "#58b85b" }}>Price: </span>{item.price}</p>
                  <p><span style={{ color: "#58b85b" }}>Location: </span> {item.location}</p>
                  </div>
                  </div>
                  <div style={{ width: "100%", height: "1px", backgroundColor: "white"}}></div>
                </Fragment>
              )
            })}
          </List>
        </>
        }
      </Section>
    </Layout>
  )
}

export default App;