// src/App.jsx
import React, { useState } from "react";
import DataDisplay from "./components/DataDisplay";

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/posts");
      let jsonData = await res.json();
      setData(jsonData);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1>React Data Fetching</h1>
      <button onClick={fetchData} disabled={isLoading}>
        {isLoading ? "Loading..." : "Fetch Data"}
      </button>
      {error && <p>Error: {error}</p>}
      <DataDisplay data={data} />
    </div>
  );
};

export default App;
