import React, { useState, useEffect } from "react";
import { data } from "../data";
import "./Report.css";

// id: 1,
// name: "report 1",
// duedate: "01-01-2022",
// comment: "-",

const Report = () => {
  const [highlighted, setHighlighted] = useState(0);

  // If highlighted changes, execute the function
  // If nothing is in the array: do nothing // except for initial render
  useEffect(() => {
      console.log("E")
    }, []);

  function increment() {
    setHighlighted((highlighted + 1) % 7);
  }

  return (
    <div className="table-wrapper">
      <table className="table-outer">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>DUEDATE</th>
            <th>COMMENT</th>
          </tr>
        </thead>
        <tbody>
          {data.map((value, idx) => (
            // IF index == highlighted: change className data-row highlighted
            <tr
              className={
                idx == highlighted ? "data-row highlighted" : "data-row"
              }
            >
              <td className="tdata">{value.id}</td>
              <td className="tdata">{value.name}</td>
              <td className="tdata">{value.duedate}</td>
              <td className="tdata">{value.comment}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={increment}>Next</button>
    </div>
  );
};

export default Report;
