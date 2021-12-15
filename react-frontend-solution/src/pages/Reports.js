import React, { useState, useEffect } from "react";
import "./Reports.css";
import { data } from "../assets/ReportsData";

/*
- Here we highlight a line based on a button click and start working on the duedate-filter
- Finished Component: "ReportsNFilters"
*/

const Reports = () => {
  // Set the highlighted row
  const [highlighted, setHighlighted] = useState(0);
  // if active == true: filter menu is displayed
  // else: filter menu is not displayed
  const [active, setActive] = useState(true);
  // Store the filter vals to display them in the HTML-filter-object
  const [filterVals, setFilterVals] = useState([]);

  /* This function sets the values we can filter by 
  1. We retrieve all values that are contained in "duedate"
  2. We make this list a "Set" to have only unique values
  3. We set the FilterVals-State to the unique values we got
  */
  useEffect(() => {
    const dates = data.map((element) => element.duedate);
    const datesSet = [...new Set(dates)];

    setFilterVals(datesSet)
    console.log(datesSet);
  }, []);

  const nextOne = () => {
    setHighlighted(highlighted + 1);
  };

  return (
    <div className="tablewrapper">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th onClick={() => setActive(!active)}>
              DUE DATE{" "}
              {active ? (
                <div className="box">
                  <ul>
                    {filterVals.map((val) => (
                      <li>{val}</li>
                    ))}
                  </ul>
                </div>
              ) : (
                <></>
              )}
            </th>
            <th>COMMENT</th>
          </tr>
        </thead>
        <tbody>
          {data.map((report, idx) => (
            <tr className={highlighted % 7 == idx ? "highlighted" : ""}>
              <td>{report.id}</td>
              <td>{report.name}</td>
              <td>{report.duedate}</td>
              <td>{report.comment}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={nextOne}>Next</button>
    </div>
  );
};

export default Reports;
