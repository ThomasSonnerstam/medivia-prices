import { Fragment, useEffect, useState } from "react";
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

  return (
    <section 
      style={{
      display: "flex",
      width: "100vw",
      height: "100vh",
      alignItems: "center",
      flexDirection: "column",
      marginTop: "100px"
    }}>
      <div style={{ marginBottom: "100px", display: "flex", justifyContent: "space-evenly"}}>
        <Button handleClick={() => { setCity("arak") }} city="Arak" />
        <Button handleClick={() => { setCity("osaris") }} city="Osaris" />
        <Button handleClick={() => { setCity("garrogat") }} city="Garrogat" />
        <Button handleClick={() => { setCity("lucindel") }} city="Lucindel" />
        <Button handleClick={() => { setCity("abukir") }} city="Abukir" />
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
      </ul>
    </section>
  )
}

export default App;