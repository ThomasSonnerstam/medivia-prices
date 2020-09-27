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
  ];

  const wulkan = [
    ["Chaos shield", "500 000gp"],
    ["Magic plate armor", "200 000gp"],
    ["Red scale armor", "190 000gp"],
    ["Demon armor", "150 000gp"],
    ["Magic sword", "150 000gp"],
    ["Stonecutter axe", "150 000gp"],
    ["Void staff", "150 000gp"],
    ["Vanquisher", "100 000gp"],
    ["Ancient armor", "75 000gp"],
    ["Demonbone legs", "60 000gp"],
    ["Golden legs", "50 000gp"],
    ["Mastermind shield", "50 000gp"],
    ["Ancient legs", "45 000gp"],
    ["Demon helmet", "45 000gp"],
    ["Ancient helmet", "42 000"],
    ["Ancient sword", "40 000gp"],
    ["Demonbone armor", "40 000gp"],
    ["Helmet of the Ancients", "40 000gp"],
    ["Hellforged shield", "36 000gp"],
    ["Shakirian blade", "35 000gp"],
    ["Royal plate armor", "35 000gp"],
    ["Silver mace", "16 500gp"],
    ["Unholy plate armor", "15 000gp"],
    ["Crown boots", "12 000gp"],
    ["Demonbone boots", "14 000gp"],
    ["Light armor", "13 000gp"],
    ["Swinging demolisher", "11 000gp"],
    ["Torn quicksand boots", "10 000gp"],
    ["Demonbone helmet", "9000gp"],
    ["Fiery armor", "7500gp"],
    ["Fiery helmet", "7500gp"],
    ["Assassin blade", "6300gp"],
    ["Bone basher", "5500gp"],
    ["Unholy halberd", "5500gp"],
    ["Ancient boots", "5000gp"],
    ["Shakirian shield", "3000gp"],
    ["Wooden maul", "2000gp"],
    ["Drake scale helmet", "850gp"],
    ["Soul dagger", "200gp"]
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
      <h1 style={{ color: "white" }}>Medivia item prices</h1>
      <p style={{ fontSize: "20px", color: "white" }}>Here you can find the best prices in each city/NPC</p>
      <div style={{ marginBottom: "100px", display: "flex", justifyContent: "space-evenly"}}>
        <Button handleClick={() => { setCity("arak") }} city="Arak" />
        <Button handleClick={() => { setCity("osaris") }} city="Osaris" />
        <Button handleClick={() => { setCity("garrogat") }} city="Garrogat" />
        <Button handleClick={() => { setCity("abukir") }} city="Abukir" />
        <Button handleClick={() => { setCity("lucindel") }} city="Lucindel" />
        <Button handleClick={() => { setCity("bluedjinn") }} city="Blue djinn" />
        <Button handleClick={() => { setCity("greendjinn") }} city="Green djinn" />
        <Button handleClick={() => { setCity("wulkan") }} city="Wulkan" />
      </div>

      <ul style={{ listStyle: "none"}}>
      {city == "arak" && arak.map((item, i) => {
        return (
          <Fragment key={i}>
            <div style={{ display: "flex" }} >
              <Item item={item[0]}></Item>
              <Item item2={item[1]}></Item>
            </div>
            <div style={{ width: "100%", height: "1px", backgroundColor: "white"}}></div>
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
            <div style={{ width: "100%", height: "1px", backgroundColor: "white"}}></div>
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
            <div style={{ width: "100%", height: "1px", backgroundColor: "white"}}></div>
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
            <div style={{ width: "100%", height: "1px", backgroundColor: "white"}}></div>
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
            <div style={{ width: "100%", height: "1px", backgroundColor: "white"}}></div>
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
            <div style={{ width: "100%", height: "1px", backgroundColor: "white"}}></div>
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
            <div style={{ width: "100%", height: "1px", backgroundColor: "white"}}></div>
          </Fragment>
        )
      })}

      {city == "wulkan" && wulkan.map((item, i) => {
        return (
          <Fragment key={i}>
            <div style={{ display: "flex" }} >
              <Item item={item[0]}></Item>
              <Item item2={item[1]}></Item>
            </div>
            <div style={{ width: "100%", height: "1px", backgroundColor: "white"}}></div>
          </Fragment>
        )
      })}
      </ul>
    </section>
  )
}

export default App;