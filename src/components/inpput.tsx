"use client";

import { useRouter } from "next/navigation";


function Input() {
  const router  =  useRouter();

  function handleRoute(){
    router.push("/search/")
  }

  return (
    <div>
      <center>
        <input
          className="border border-black"
          placeholder="enter something..."
          type="text"
          name=""
          id=""
          onFocus={handleRoute}
          
  
        />
      </center>
    </div>
  );
}

export default Input;
