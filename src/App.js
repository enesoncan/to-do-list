import React from "react";
import "./App.css";

import FilterBar from "./components/filterBar";
import InsertionBar from "./components/insertionBar";

function App() {
  return (
    <div className="app-header">
      <FilterBar />
      <InsertionBar />
    </div>
  );
}

export default App;
