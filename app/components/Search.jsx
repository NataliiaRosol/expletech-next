"use client";
import { ProductContext } from "@/context/ProductContext";
import React, { useContext, useState } from "react";

function Search() {
  const { setSearchParam } =
    useContext(ProductContext);
  const [inputValue, setInputValue] = useState("");

  function handleSubmit(event){
    event.preventDefault();
    setSearchParam(inputValue)
  }

  return (
    <div className="max-w-[1200px] mx-auto">
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center gap-5"
      >
        <input
          type="text"
          name="search"
          placeholder="Enter search value..."
          className="bg-white/75 p-3 px-8 rounded-md border outline-none lg:w-96"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button
          type="submit"
          className="border border-blue-950 p-3 px-8 rounded-md"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;
