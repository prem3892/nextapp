"use client";

import { useState } from "react";
import Data from "./data";
function Test() {
  const [val, setVal] = useState(0);

  function handleData() {
    setVal((prev) => prev + 1);
  }

  return (
    <div>
      <center>
        <h1>{val}</h1>
        <button onClick={handleData}>click me </button>
        <Data />
      </center>
    </div>
  );
}

export default Test;
