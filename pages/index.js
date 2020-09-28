import { Fragment, useState } from "react";
import Item from "../components/Item/Item";
import Button from "../components/Button/Button";
import Section from "../components/Section/Section";
import List from "../components/List/List";
import ButtonContainer from "../components/ButtonContainer/ButtonContainer";
import Layout from "../components/Layout/Layout";

const App = () => {

  const [selected, setSelected] = useState("arak");

  const location = 
  {
    arak: [
      { name: "Halberd", price: 400 },
      { name: "Brass armor", price: 150 },
      { name: "Morning star", price: 90 },
      { name: "Battle hammer", price: 120 },
      { name: "Plate armor", price: 400 },
      { name: "Steel shield", price: 80 },
      { name: "Battle shield", price: 95 }
    ],
    osaris: [
      { name: "Double axe", price: 260 },
      { name: "Steel helmet", price: 293 }
    ],
    garrogat: [
      { name: "Clerical mace", price: 170 },
      { name: "Crystal ball", price: 190 },
      { name: "Mind stone", price: 170 },
      { name: "Iron helmet", price: 150 },
      { name: "Viking shield", price: 85 },
    ],
    lucindel: [
      { name: "Plate legs", price: 115 },
    ],
    bluedjinn: [
      { name: "Dragon lance", price: 9000 },
      { name: "Fire axe", price: 8000 },
      { name: "Fire sword", price: 400 },
      { name: "War hammer", price: 4000 },
      { name: "Spike sword", price: 1000 },
      { name: "Ice rapier", price: 1000 },
      { name: "Broad sword", price: 500 },
      { name: "Obsidian lance", price: 500 },
      { name: "Crown armor", price: 12000 },
      { name: "Blue robe", price: 10000 },
      { name: "Noble armor", price: 900 },
      { name: "Royal helmet", price: 30000 },
      { name: "Crusader helmet", price: 6000 },
      { name: "Crown helmet", price: 2500 },
      { name: "Crown legs", price: 12000 },
      { name: "Scorpid hood", price: 2300 },
      { name: "Boots of haste", price: 30000 },
      { name: "Phoenix shield", price: 16000 },
      { name: "Crown shield", price: 8000 },
      { name: "Dragon shield", price: 4000 },
      { name: "Guardian shield", price: 2000 },
      { name: "Watcher shield", price: 1200 },
    ],
    greendjinn: [
      { name: "Scimitar", price: 150 },
      { name: "Giant sword", price: 17000 },
      { name: "Serpent sword", price: 900 },
      { name: "Poison dagger", price: 50 },
      { name: "Knight axe", price: 2000 },
      { name: "Dragon hammer", price: 2000 },
      { name: "Skull staff", price: 6000 },
      { name: "Dark armor", price: 400 },
      { name: "Dark shield", price: 166 },
      { name: "Knight armor", price: 5000 },
      { name: "Dark helmet", price: 250 },
      { name: "Knight helmet", price: 2500 },
      { name: "Warrior helmet", price: 5000 },
      { name: "Strange helmet", price: 500 },
      { name: "Mystic turban", price: 150 },
      { name: "Spider silk armor", price: 2000 },
      { name: "Knight legs", price: 5000 },
      { name: "Tower shield", price: 8000 },
      { name: "Black shield", price: 800 },
      { name: "Ancient shield", price: 900 },
      { name: "Vampire shield", price: 15000 },
    ],
    wulkan: [
      { name: "Chaos shield", price: 500000 },
      { name: "Magic plate armor", price: 200000 },
      { name: "Red scale armor", price: 190000 },
      { name: "Demon armor", price: 150000 },
      { name: "Magic sword", price: 150000 },
      { name: "Stonecutter axe", price: 150000 },
      { name: "Void staff", price: 150000 },
      { name: "Vanquisher", price: 100000 },
      { name: "Ancient armor", price: 75000 },
      { name: "Demonbone legs", price: 60000 },
      { name: "Golden legs", price: 50000 },
      { name: "Mastermind shield", price: 50000 },
      { name: "Ancient legs", price: 45000 },
      { name: "Demon helmet", price: 45000 },
      { name: "Ancient helmet", price: 42000 },
      { name: "Ancient sword", price: 40000 },
      { name: "Demonbone armor", price: 40000 },
      { name: "Helmet of the Ancients", price: 40000 },
      { name: "Hellforged shield", price: 36000 },
      { name: "Shakirian blade", price: 35000 },
      { name: "Royal plate armor", price: 35000 },
      { name: "Silver mace", price: 16500 },
      { name: "Unholy plate armor", price: 15000 },
      { name: "Crown boots", price: 12000 },
      { name: "Demonbone boots", price: 14000 },
      { name: "Light armor", price: 13000 },
      { name: "Swinging demolisher", price: 11000 },
      { name: "Torn quicksand boots", price: 10000 },
      { name: "Demonbone helmet", price: 9000 },
      { name: "Fiery armor", price: 7500 },
      { name: "Fiery helmet", price: 7500 },
      { name: "Assassin blade", price: 6300 },
      { name: "Bone basher", price: 5500 },
      { name: "Unholy halberd", price: 5500 },
      { name: "Ancient boots", price: 5000 },
      { name: "Shakirian shield", price: 3000 },
      { name: "Wooden maul", price: 2000 },
      { name: "Drake scale helmet", price: 850 },
      { name: "Soul dagger", price: 200 },
    ],
    aremis: [
      { name: "Flaming bow", price: 18000 },
      { name: "Poisoned bow", price: 16000 },
      { name: "Bow", price: 130 },
      { name: "Elven bow", price: 500 },
      { name: "Hunting bow", price: 1000 },
      { name: "Shakirian bow", price: 32000 },
      { name: "Crossbow", price: 160 },
      { name: "Blazing crossbow", price: 70000 },
      { name: "Enhanced crossbow", price: 24000 },
      { name: "Ignited bow", price: 5000 },
      { name: "Fiery bow", price: 46000 },
      { name: "Crystallized crossbow", price: 55000 },
      { name: "Envenomed crossbow", price: 65000 },
      { name: "Elven crossbow", price: 7500 },
    ]
  }

  return (
    <Layout>
      <Section>
        <h1 style={{ color: "white", fontSize: "30px" }}>Medivia item prices</h1>
        <p style={{ textAlign: "center", fontSize: "20px", color: "white" }}>Toggle between locations to see the best prices per specific items</p>
        <ButtonContainer>
          <Button handleClick={() => { setSelected("arak") }} city="Arak" />
          <Button handleClick={() => { setSelected("osaris") }} city="Osaris" />
          <Button handleClick={() => { setSelected("garrogat") }} city="Garrogat" />
          <Button handleClick={() => { setSelected("lucindel") }} city="Lucindel" />
          <Button handleClick={() => { setSelected("bluedjinn") }} city="Blue djinn" />
          <Button handleClick={() => { setSelected("greendjinn") }} city="Green djinn" />
          <Button handleClick={() => { setSelected("wulkan") }} city="Wulkan" />
          <Button handleClick={() => { setSelected("aremis") }} city="Aremis" />
        </ButtonContainer>

        <List>
          <div style={{ display: "flex", justifyContent: "space-between"}}>
            <p>Item name:</p>
            <p>Price (gp)</p>
          </div>
        {selected == "arak" && location.arak.map((item, i) => {
          return (
            <Fragment key={i}>
              <div style={{ display: "flex", justifyContent: "space-between" }} >
                <Item item={item.name} />
                <Item item2={item.price} />
              </div>
              <div style={{ width: "100%", height: "1px", backgroundColor: "white"}}></div>
            </Fragment>
          )
        })}

        {selected == "osaris" && location.osaris.map((item, i) => {
          return (
            <Fragment key={i}>
              <div style={{ display: "flex", justifyContent: "space-between" }} >
                <Item item={item.name} />
                <Item item2={item.price} />
              </div>
              <div style={{ width: "100%", height: "1px", backgroundColor: "white"}}></div>
            </Fragment>
          )
        })}

        {selected == "garrogat" && location.garrogat.map((item, i) => {
          return (
            <Fragment key={i}>
              <div style={{ display: "flex", justifyContent: "space-between" }} >
                <Item item={item.name} />
                <Item item2={item.price} />
              </div>
              <div style={{ width: "100%", height: "1px", backgroundColor: "white"}}></div>
            </Fragment>
          )
        })}

        {selected == "lucindel" && location.lucindel.map((item, i) => {
          return (
            <Fragment key={i}>
              <div style={{ display: "flex", justifyContent: "space-between" }} >
                <Item item={item.name} />
                <Item item2={item.price} />
              </div>
              <div style={{ width: "100%", height: "1px", backgroundColor: "white"}}></div>
            </Fragment>
          )
        })}

        {selected == "bluedjinn" && location.bluedjinn.map((item, i) => {
          return (
            <Fragment key={i}>
              <div style={{ display: "flex", justifyContent: "space-between" }} >
                <Item item={item.name} />
                <Item item2={item.price} />
              </div>
              <div style={{ width: "100%", height: "1px", backgroundColor: "white"}}></div>
            </Fragment>
          )
        })}

        {selected == "greendjinn" && location.greendjinn.map((item, i) => {
          return (
            <Fragment key={i}>
              <div style={{ display: "flex", justifyContent: "space-between" }} >
                <Item item={item.name} />
                <Item item2={item.price} />
              </div>
              <div style={{ width: "100%", height: "1px", backgroundColor: "white"}}></div>
            </Fragment>
          )
        })}

        {selected == "wulkan" && location.wulkan.map((item, i) => {
          return (
            <Fragment key={i}>
              <div style={{ display: "flex", justifyContent: "space-between" }} >
                <Item item={item.name} />
                <Item item2={item.price} />
              </div>
              <div style={{ width: "100%", height: "1px", backgroundColor: "white"}}></div>
            </Fragment>
          )
        })}

        {selected == "aremis" && location.aremis.map((item, i) => {
          return (
            <Fragment key={i}>
              <div style={{ display: "flex", justifyContent: "space-between" }} >
                <Item item={item.name} />
                <Item item2={item.price} />
              </div>
              <div style={{ width: "100%", height: "1px", backgroundColor: "white"}}></div>
            </Fragment>
          )
        })}
        </List>
      </Section>
    </Layout>
  )
}

export default App;