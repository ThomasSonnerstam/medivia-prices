import { Fragment, useState } from "react";
import Item from "../components/Item";
import Button from "../components/Button";

const App = () => {

  const [city, setCity] = useState("arak");

  const arak = [
    ["Halberd", "400gp"],
    ["Brass armor", "150gp"],
    ["Morning star", "90gp"],
    ["Battle hammer", "120gp"],
    ["Plate armor", "400gp"],
    ["Steel shield", "80gp"],
    ["Battle shield", "95gp"] 
  ];

  const osaris = [
    ["Double axe", "260gp"],
    ["Steel helmet", "293gp"]
  ];

  const garrogat = [
    ["Clerical mace", "170gp"],
    ["Crystal ball", "190gp"],
    ["Mind stone", "170gp"],
    ["Iron helmet", "150gp"],
    ["Viking shield", "85gp"]
  ];

  const abukir = [
    ["Bow", "130gp"],
    ["Crossbow", "160gp"]
  ];

  const lucindel = [
    ["Plate legs", "115gp"]
  ];

  const bluedjinn = [
    ["Dragon lance", "9000gp"],
    ["Fire axe", "8000gp"],
    ["Fire sword", "4000gp"],
    ["War hammer", "1200gp"],
    ["Spike sword", "1000gp"],
    ["Ice rapier", "1000gp"],
    ["Broad sword", "500gp"],
    ["Obsidian lance", "500gp"],
    ["Crown armor", "12 000gp"],
    ["Blue robe", "10 000gp"],
    ["Noble armor", "900gp"],
    ["Royal helmet", "30 000gp"],
    ["Crusader helmet", "6000gp"],
    ["Crown helmet", "2500gp"],
    ["Crown legs", "12 000gp"],
    ["Scorpid hood", "2300gp"],
    ["Boots of haste", "30 000gp"],
    ["Phoenix shield", "16 000gp"],
    ["Crown shield", "8000gp"],
    ["Dragon shield", "4000gp"],
    ["Guardian shield", "2000gp"],
    ["Watcher shield", "1200gp"]
  ];

  const greendjinn = [
    ["Scimitar", "150gp"],
    ["Giant sword", "17 000gp"],
    ["Serpent sword", "900gp"],
    ["Poison dagger", "50gp"],
    ["Knight axe", "2000gp"],
    ["Dragon hammer", "2000gp"],
    ["Skull staff", "6000gp"],
    ["Dark armor", "400gp"],
    ["Dark shield", "166gp"],
    ["Knight armor", "5000gp"],
    ["Dark helmet", "250gp"],
    ["Knight helmet", "2500gp"],
    ["Warrior helmet", "5000gp"],
    ["Strange helmet", "500gp"],
    ["Mystic turban", "150gp"],
    ["Spider silk armor", "2000gp"],
    ["Knight legs", "5000gp"],
    ["Tower shield", "8000gp"],
    ["Black shield", "800gp"],
    ["Ancient shield", "900gp"],
    ["Vampire shield", "15 000gp"]
  ]


  return (
    <section 
      style={{
      display: "flex",
      width: "100vw",
      minHeight: "100vh",
      alignItems: "center",
      flexDirection: "column",
      marginTop: "100px"
    }}>
      <div style={{ marginBottom: "100px", display: "flex", justifyContent: "space-evenly"}}>
        <Button handleClick={() => { setCity("arak") }} city="Arak" />
        <Button handleClick={() => { setCity("osaris") }} city="Osaris" />
        <Button handleClick={() => { setCity("garrogat") }} city="Garrogat" />
        <Button handleClick={() => { setCity("abukir") }} city="Abukir" />
        <Button handleClick={() => { setCity("lucindel") }} city="Lucindel" />
        <Button handleClick={() => { setCity("bluedjinn") }} city="Blue djinn" />
        <Button handleClick={() => { setCity("greendjinn") }} city="Green djinn" />
      </div>

      <ul style={{ listStyle: "none"}}>
      {city == "arak" && arak.map((item, i) => {
        return (
          <Fragment key={i}>
            <div style={{ display: "flex" }} >
              <Item item={item[0]}></Item>
              <Item item2={item[1]}></Item>
            </div>
            <div style={{ width: "100%", height: "1px", backgroundColor: "black"}}></div>
          </Fragment>
        )
      })}

      {city == "osaris" && osaris.map((item, i) => {
        return (
          <Fragment key={i}>
            <div style={{ display: "flex" }} >
              <Item item={item[0]}></Item>
              <Item item2={item[1]}></Item>
            </div>
            <div style={{ width: "100%", height: "1px", backgroundColor: "black"}}></div>
          </Fragment>
        )
      })}

      {city == "garrogat" && garrogat.map((item, i) => {
        return (
          <Fragment key={i}>
            <div style={{ display: "flex" }} >
              <Item item={item[0]}></Item>
              <Item item2={item[1]}></Item>
            </div>
            <div style={{ width: "100%", height: "1px", backgroundColor: "black"}}></div>
          </Fragment>
        )
      })}

      {city == "abukir" && abukir.map((item, i) => {
        return (
          <Fragment key={i}>
            <div style={{ display: "flex" }} >
              <Item item={item[0]}></Item>
              <Item item2={item[1]}></Item>
            </div>
            <div style={{ width: "100%", height: "1px", backgroundColor: "black"}}></div>
          </Fragment>
        )
      })}

      {city == "lucindel" && lucindel.map((item, i) => {
        return (
          <Fragment key={i}>
            <div style={{ display: "flex" }} >
              <Item item={item[0]}></Item>
              <Item item2={item[1]}></Item>
            </div>
            <div style={{ width: "100%", height: "1px", backgroundColor: "black"}}></div>
          </Fragment>
        )
      })}

      {city == "bluedjinn" && bluedjinn.map((item, i) => {
        return (
          <Fragment key={i}>
            <div style={{ display: "flex" }} >
              <Item item={item[0]}></Item>
              <Item item2={item[1]}></Item>
            </div>
            <div style={{ width: "100%", height: "1px", backgroundColor: "black"}}></div>
          </Fragment>
        )
      })}

      {city == "greendjinn" && greendjinn.map((item, i) => {
        return (
          <Fragment key={i}>
            <div style={{ display: "flex" }} >
              <Item item={item[0]}></Item>
              <Item item2={item[1]}></Item>
            </div>
            <div style={{ width: "100%", height: "1px", backgroundColor: "black"}}></div>
          </Fragment>
        )
      })}
      </ul>
    </section>
  )
}

export default App;