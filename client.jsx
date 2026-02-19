// FILE: client/src/App.jsx
import React from "react";

const App = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Work with OS</h1>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f0f0",
  },
  heading: {
    fontSize: "2rem",
    color: "#333",
  },
};

export default App;