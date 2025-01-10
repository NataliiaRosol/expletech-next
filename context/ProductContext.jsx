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
  const [currentPage, setCurrentPage] = useState(1);

  const categories = Array.from(
    new Set(productsData.map((product) => product.category))
  );

  const productsPerPage = 6;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
    setCurrentPage(1);
  }, [searchParam, selectedCategory, selectedPriceSorting, productsData]);


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
        currentPage,
        setCurrentPage,
        handlePageChange,
        currentProducts,
        totalPages,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
