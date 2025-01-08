"use client";
import { productsData } from "@/products";
import React, { useContext, useEffect } from "react";
import ProductTile from "./ProductTile";
import { ProductContext } from "@/context/ProductContext";

function ProductListPage() {
  const { filteredByCategory, setFilteredByCategory, categories, selectedCategory, setSelectedCategory } =
    useContext(ProductContext);

  const handleFilterByCategory = (category) => {
    if (category === "All") {
      setFilteredByCategory(productsData);
    } else {
      const filteredProducts = productsData.filter((product) => product.category === category);
      setFilteredByCategory(filteredProducts);
    }
  };

  useEffect(() => {
    handleFilterByCategory(selectedCategory);
  }, [selectedCategory])

  return (
    <section className="py-2 px-3 gb-white sm:py-3 lg:py-5">

      <div className="grid grid-cols-1 gap-5 lg:gap-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {filteredByCategory && filteredByCategory.length > 0 ? (
          filteredByCategory.map((singleProduct) => (
            <ProductTile key={singleProduct.id} singleProduct={singleProduct} />
          ))
        ) : (
          <h3>No products found</h3>
        )}
      </div>
    </section>
  );
}

export default ProductListPage;
