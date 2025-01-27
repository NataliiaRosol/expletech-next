"use client";
import { productsData } from "@/products";
import { filterProductsByCategory } from "@/utils/categoryFilter";
import { sortProductsByPrice } from "@/utils/priceFilter";
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
    updatedProducts = filterProductsByCategory(updatedProducts, selectedCategory)

    // Sort by price
    updatedProducts = sortProductsByPrice(updatedProducts, selectedPriceSorting);

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
