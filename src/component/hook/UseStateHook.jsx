import React from "react";

import { useState } from "react";

const UseStateHook = () => {

    const [counter, setCounter]= useState(0)
  

  const increase = () => {
    setCounter(counter+1)
    console.log(counter);
  };
  const decrease = () => {
    setCounter(counter-1)
    console.log(counter);
  };
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
};

export default UseStateHook;
