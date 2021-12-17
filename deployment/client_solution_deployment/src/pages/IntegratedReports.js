import React, { useState, useEffect } from "react";
import "./Reports.css";
import { data } from "../assets/ReportsData";

const IntegratedReports = () => {

  const [reports, setReports] = useState([])

  const reportsAPICall = async () => {
    console.log("IN")
    try {
      const response = await fetch("http://localhost:3000/reports", {
        // "We want to get data"
        method: "GET",
        // "Please don't ask for our authorization"
        headers: {
          "access-control-allow-origin": "*",
        },
      });
      console.log("response");
      // We have only read the header yet!
      const reports = await response.json() 
      setReports(reports);
    } catch (e) {
      console.log(e)
      console.log("Error awaiting report data");
    }
  };

  useEffect(() => {
    reportsAPICall();
  }, []);

  return (
    <div className="tablewrapper">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>DUE DATE</th>
            <th>COMMENT</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr>
              <td>{report.dqr_id}</td>
              <td>{report.dqr_name}</td>
              <td>{report.dqr_date}</td>
              <td>{report.dqr_comment}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button>Next</button>
    </div>
  );
};

export default IntegratedReports;
