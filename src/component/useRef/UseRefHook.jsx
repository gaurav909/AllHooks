import React from "react";
import { useRef } from "react";

const UseRefHook = () => {
  const myRef = useRef(null);

//   console.log(myRef);

const focusInpt =()=>{
    myRef.current.focus()
}
  return (
    <div>
      <input ref={myRef} type="text" />

      <button onClick={focusInpt}>Focus</button>
    </div>
  );
};

export default UseRefHook;
