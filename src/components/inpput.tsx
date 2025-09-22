"use client";
import { useRouter } from "next/navigation";
import React, {  useState } from "react";

function Input() {
  const [val, setVal] = useState("");
  const router =  useRouter()

  function handleInput(e:any) {
   setVal(e.target.value)
//    alert()
router.push("/search")
  }




  return (
    <div>
      <center>
        <input
          className="border border-black"
          placeholder="enter something"
          type="text"
          name=""
          id=""
          value={val}
        //   onChange={handleInput}
          onFocus={handleInput}
        />
        <p>{val}</p>
      </center>
    </div>
  );
}

export default Input;
