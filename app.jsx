import React, { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState("");

  const getData = async (endpoint) => {
    const response = await fetch(`/api/${endpoint}`);
    const result = await response.json();
    setData(JSON.stringify(result, null, 2));
  };

  return (
    <div className="container">
      <h1>Working with OS</h1>

      <div className="buttons">
        <button onClick={() => getData("freememory")}>
          Free Memory
        </button>

        <button onClick={() => getData("totalmemory")}>
          Total Memory
        </button>

        <button onClick={() => getData("cpuarch")}>
          CPU Architecture
        </button>

        <button onClick={() => getData("userinfo")}>
          User Info
        </button>
      </div>

      <pre className="output">{data}</pre>
    </div>
  );
}

export default App;