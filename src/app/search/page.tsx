"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

function Search() {
  const query =  useSearchParams();
  const [val, setVal] =  useState(query.get("q") || "");
  const router =  useRouter();

  // function handleQuery(){
  //   router.push(`/search/?q=${val}`)
  // }



  useEffect(()=>{
    if(val.trim() !==""){
        router.push(`/search/?q=${val}`)
        console.log(val)
    }else{
      router.push(`/search/?q=`)
    }
  },[val, router])

  return (
    <div>
 
      <center>
        <input
          type="text"
          placeholder="search  something..."
          className="border border-black py-2 w-96 rounded-md"
          name=""
          id=""
          onChange={(e)=>setVal(e.target.value)}
         
        />

        <p>{val}</p>
   
      </center>
    </div>
  );
}

export default Search;
