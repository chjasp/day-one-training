import React, { useState } from "react";
import "./Center.css"

/*
Here we Create a list of buttons that changes the value and background-color of the "Selected: {selected}" line
*/

const Center = () => {
  const colors = ["Green", "Yellow", "Red"];
  const [selected, setSelected] = useState("");

  return (
    <div className="wrapper">
      <div className="buttons">
        {colors.map((element) => (
          <button onClick={() => setSelected(element)}>{element}</button>
        ))}
      </div>
      <div className={`selected ${selected}`}>Selected: {selected}</div>
    </div>
  );
};

export default Center;
