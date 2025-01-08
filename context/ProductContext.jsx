"use client";
import { productsData } from "@/products";
import { createContext, useState } from "react";

export const ProductContext = createContext();

export default function ProductContextProvider({ children }) {
  const products = productsData;
  const [filteredByCategory, setFilteredByCategory] = useState(productsData);
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = Array.from(
    new Set(productsData.map((product) => product.category))
  );
  // console.log(categories);
  

  return (
    <ProductContext.Provider value={{products, filteredByCategory, setFilteredByCategory, categories, selectedCategory, setSelectedCategory}}>
      {children}
    </ProductContext.Provider>
  );
}
