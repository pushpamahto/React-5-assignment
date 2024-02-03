// src/components/DataDisplay.jsx
import React from "react";

const DataDisplay = ({ data }) => {
  return (
    <div>
      <h2>Data Display</h2>
      {data.length === 0 ? (
        <p>No data available</p>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DataDisplay;
