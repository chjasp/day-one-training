import React, { useState } from "react";
import "./Center.css"

function Center() {
  let colors = ["Green", "Yellow", "Red"];

  const [num, setNum] = useState(0);

  function increment() {
    setNum(num + 1);
  }

  return (
    <div className="wrapper">
      <div className="colors">
        {colors.map((element) => (
          <div>{element}</div>
        ))}
      </div>
      <div className="mode">Select: Red</div>
    </div>
  );
}

export default Center;
