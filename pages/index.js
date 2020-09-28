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


  return (
    <Layout>
      <Section>
        <h1 style={{ color: "white", fontSize: "30px" }}>Medivia sell prices</h1>
        <p style={{ textAlign: "center", fontSize: "20px", color: "white" }}>Choose to filter on cities/NPCs or search under all items</p>
        <ButtonContainer>
          <Button handleClick={() => {setIsCities(true); setIsAllItems(false)}} text="Cities/NPC"></Button>
          <Button handleClick={() => {setIsCities(false); setSelected(""); setIsAllItems(true)}} text="All items"></Button>
        </ButtonContainer>

        <div style={{ width: "80%", height: "1px", backgroundColor: "white", margin: "15px 0"}}></div>
        
        {isCities && <>
          <ButtonContainer>
            <Button handleClick={() => { setSelected("arak") }} text="Arak" />
            <Button handleClick={() => { setSelected("osaris") }} text="Osaris" />
            <Button handleClick={() => { setSelected("garrogat") }} text="Garrogat" />
            <Button handleClick={() => { setSelected("lucindel") }} text="Lucindel" />
            <Button handleClick={() => { setSelected("mittenhoff") }} text="Mittenhoff" />
            <Button handleClick={() => { setSelected("bluedjinn") }} text="Blue djinn" />
            <Button handleClick={() => { setSelected("greendjinn") }} text="Green djinn" />
            <Button handleClick={() => { setSelected("wulkan") }} text="Wulkan" />
            <Button handleClick={() => { setSelected("aremis") }} text="Aremis" />
            <Button handleClick={() => { setSelected("ziyad") }} text="Ziyad" />
            <Button handleClick={() => { setSelected("draculd") }} text="Draculd" />
          </ButtonContainer>
          <div style={{ width: "100%", height: "1px", backgroundColor: "white", margin: "15px 0"}}></div>
          </>}

        <List>    
        {selected == "arak" && locationItems.arak.sort((a, b) => a.name > b.name ? 1 : -1).map((item, i) => {
          return (
            <Fragment key={i}>
              <div style={{ display: "flex", justifyContent: "space-between" }} >
                <img src={item.url}></img>
                <Item item={item.name} />
                <Item item={item.price} />
              </div>
              <div style={{ width: "100%", height: "1px", backgroundColor: "white"}}></div>
            </Fragment>
          )
        })}

        {selected == "osaris" && locationItems.osaris.sort((a, b) => a.name > b.name ? 1 : -1).map((item, i) => {
          return (
            <Fragment key={i}>
              <div style={{ display: "flex", justifyContent: "space-between" }} >
                <img src={item.url}></img>
                <Item item={item.name} />
                <Item item={item.price} />
              </div>
              <div style={{ width: "100%", height: "1px", backgroundColor: "white"}}></div>
            </Fragment>
          )
        })}

        {selected == "garrogat" && locationItems.garrogat.sort((a, b) => a.name > b.name ? 1 : -1).map((item, i) => {
          return (
            <Fragment key={i}>
              <div style={{ display: "flex", justifyContent: "space-between" }} >
                <img src={item.url}></img>
                <Item item={item.name} />
                <Item item={item.price} />
              </div>
              <div style={{ width: "100%", height: "1px", backgroundColor: "white"}}></div>
            </Fragment>
          )
        })}

        {selected == "lucindel" && locationItems.lucindel.sort((a, b) => a.name > b.name ? 1 : -1).map((item, i) => {
          return (
            <Fragment key={i}>
              <div style={{ display: "flex", justifyContent: "space-between" }} >
                <img src={item.url}></img>
                <Item item={item.name} />
                <Item item={item.price} />
              </div>
              <div style={{ width: "100%", height: "1px", backgroundColor: "white"}}></div>
            </Fragment>
          )
        })}

        {selected == "mittenhoff" && locationItems.mittenhoff.sort((a, b) => a.name > b.name ? 1 : -1).map((item, i) => {
          return (
            <Fragment key={i}>
              <div style={{ display: "flex", justifyContent: "space-between" }} >
                <img src={item.url}></img>
                <Item item={item.name} />
                <Item item={item.price} />
              </div>
              <div style={{ width: "100%", height: "1px", backgroundColor: "white"}}></div>
            </Fragment>
          )
        })}

        {selected == "bluedjinn" && locationItems.bluedjinn.sort((a, b) => a.name > b.name ? 1 : -1).map((item, i) => {
          return (
            <Fragment key={i}>
              <div style={{ display: "flex", justifyContent: "space-between" }} >
                <img src={item.url}></img>
                <Item item={item.name} />
                <Item item={item.price} />
              </div>
              <div style={{ width: "100%", height: "1px", backgroundColor: "white"}}></div>
            </Fragment>
          )
        })}

        {selected == "greendjinn" && locationItems.greendjinn.sort((a, b) => a.name > b.name ? 1 : -1).map((item, i) => {
          return (
            <Fragment key={i}>
              <div style={{ display: "flex", justifyContent: "space-between" }} >
                <img src={item.url}></img>
                <Item item={item.name} />
                <Item item={item.price} />
              </div>
              <div style={{ width: "100%", height: "1px", backgroundColor: "white"}}></div>
            </Fragment>
          )
        })}

        {selected == "wulkan" && locationItems.wulkan.sort((a, b) => a.name > b.name ? 1 : -1).map((item, i) => {
          return (
            <Fragment key={i}>
              <div style={{ display: "flex", justifyContent: "space-between" }} >
                <img src={item.url}></img>
                <Item item={item.name} />
                <Item item={item.price} />
              </div>
              <div style={{ width: "100%", height: "1px", backgroundColor: "white"}}></div>
            </Fragment>
          )
        })}

        {selected == "aremis" && locationItems.aremis.sort((a, b) => a.name > b.name ? 1 : -1).map((item, i) => {
          return (
            <Fragment key={i}>
              <div style={{ display: "flex", justifyContent: "space-between" }} >
                <img src={item.url}></img>
                <Item item={item.name} />
                <Item item={item.price} />
              </div>
              <div style={{ width: "100%", height: "1px", backgroundColor: "white"}}></div>
            </Fragment>
          )
        })}

        {selected == "ziyad" && locationItems.ziyad.sort((a, b) => a.name > b.name ? 1 : -1).map((item, i) => {
          return (
            <Fragment key={i}>
              <div style={{ display: "flex", justifyContent: "space-between" }} >
                <img src={item.url}></img>
                <Item item={item.name} />
                <Item item={item.price} />
              </div>
              <div style={{ width: "100%", height: "1px", backgroundColor: "white"}}></div>
            </Fragment>
          )
        })}

        {selected == "draculd" && locationItems.draculd.sort((a, b) => a.name > b.name ? 1 : -1).map((item, i) => {
          return (
            <Fragment key={i}>
              <div style={{ display: "flex", justifyContent: "space-between" }} >
                <img src={item.url}></img>
                <Item item={item.name} />
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
          <input style={{ paddingLeft: "15px", height: "5vh", width: "50%", marginTop: "10px", border: "none", borderRadius: "5px"}} type="text" name="search" id="search" value={userInput} onChange={handleChange}></input>
        </FormContainer>
          <List>
            {results.sort((a, b) => a.name > b.name ? 1 : -1).map((item, i) => {
              return (
                <Fragment key={i}>
                  <div style={{ display: "flex", alignItems: "center" }} >
                    <img style={{ marginRight: "20px", width: "32px", height: "32px"}} src={item.url}></img>
                  
                  <div style={{ display: "flex", flexDirection: "column"}}>
                    <p style={{ color: "#2783ba", textTransform: "capitalize"}}>{item.name}</p>
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