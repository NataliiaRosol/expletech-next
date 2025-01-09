"use client";
import { productsData } from "@/products";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export default function ProductContextProvider({ children }) {
  const products = productsData;
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPriceSorting, setSelectedPriceSorting] = useState("");
  const [searchParam, setSearchParam] = useState("");

  const categories = Array.from(
    new Set(productsData.map((product) => product.category))
  );

  useEffect(() => {
    let updatedProducts = [...productsData];

    // Filter by search parameter
    if (searchParam.trim() !== "") {
      updatedProducts = updatedProducts.filter((product) =>
        product.title.toLowerCase().includes(searchParam.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== "All") {
      updatedProducts = updatedProducts.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Sort by price
    if (selectedPriceSorting === "low-to-high") {
      updatedProducts.sort((a, b) => a.price - b.price);
    } else if (selectedPriceSorting === "high-to-low") {
      updatedProducts.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(updatedProducts);
  }, [searchParam, selectedCategory, selectedPriceSorting, productsData]);

  // useEffect(() => {
  //   const lowerCasedQuery = searchParam.toLowerCase();

  //   const filtered = productsData.filter(
  //     (product) =>
  //       product.title.toLowerCase().includes(lowerCasedQuery)
  //   );

  //   setFilteredProducts(filtered);
  // }, [searchParam]);

  return (
    <ProductContext.Provider
      value={{
        products,
        categories,
        selectedCategory,
        setSelectedCategory,
        filteredProducts,
        setFilteredProducts,
        selectedPriceSorting,
        setSelectedPriceSorting,
        searchParam,
        setSearchParam,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
