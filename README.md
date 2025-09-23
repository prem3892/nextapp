"use client";
import {  useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function Search() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");

  useEffect(() => {
    if (query.trim() !== "") {
      router.push(`/search/?q=${query}`);
    } else {
      router.push(`/search/?q=`);
    }
  }, [query, router]);

  return (
    <div>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure inventore
      iusto voluptate expedita voluptates, ad, a cupiditate, hic esse autem
      asperiores maxime! Enim, repellendus! Voluptatum illum dicta cupiditate
      veniam nesciunt.
      <center>
        <input
          type="text"
          placeholder="enter something..."
          className="border border-white py-2 w-96 rounded-md"
          name=""
          id=""
          onChange={(e) => setQuery(e.target.value)}
        />
        <p>{query}</p>
      </center>
    </div>
  );
}

export default Search;
