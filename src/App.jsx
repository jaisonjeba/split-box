import React, { useState } from "react";
import "./App.css";

const Box = ({ size, onClick }) => {
  return (
    <div
      className="box"
      style={{ width: size, height: size }}
      onClick={onClick}
    ></div>
  );
};

const RecursiveBox = ({ size }) => {
  const [split, setSplit] = useState(false);

  const handleClick = () => {
    setSplit(true);
  };

  if (!split) {
    return <Box size={size} onClick={handleClick} />;
  }

  const newSize = size / 2;

  return (
    <div
      className="container"
      style={{ width: size, height: size }}
    >
      <RecursiveBox size={newSize} />
      <RecursiveBox size={newSize} />
      <RecursiveBox size={newSize} />
      <RecursiveBox size={newSize} />
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <RecursiveBox size={400} />
    </div>
  );
};

export default App;