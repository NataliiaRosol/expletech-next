"use client";
import { ProductContext } from "@/context/ProductContext";
import React, { useContext } from "react";

function PriceFilter() {
  const { setSelectedPriceSorting } = useContext(ProductContext);

  const handlePriceSorting = (e) => {
    setSelectedPriceSorting(e.target.value);
  };

  return (
    <div className="my-4 flex items-center">
      <p>Price: </p>
      <select onChange={(e) => handlePriceSorting(e)} className="border p-2">
        <option value="not-selected">Not selected</option>
        <option value="low-to-high">Low to high</option>
        <option value="high-to-low">High to low</option>
      </select>
    </div>
  );
}

export default PriceFilter;
