import satData from "./satData";
import { useEffect } from "react";
const Buttons = ({ filterByType, setSat, displaySats }) => {


  const ButtonsOribits = displaySats.map((el,id)=>{
    return (
      <button onClick={()=>{filterByType(el)}} key={id}>{el} Orbit</button>
    )
  })
  
  const showAll = () => {
    setSat(satData)
  }
  return (
    <div>
    {ButtonsOribits}
    <button onClick={()=>{showAll()}}>All Orbits</button>
    </div>
  );
};

export default Buttons;