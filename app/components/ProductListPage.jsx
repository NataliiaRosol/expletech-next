"use client";
import React, { useContext } from "react";
import ProductTile from "./ProductTile";
import { ProductContext } from "@/context/ProductContext";

function ProductListPage() {
  const {
    currentProducts,
    currentPage,
    handlePageChange,
    totalPages,
  } = useContext(ProductContext);

  return (
    <section className="py-2 px-3 gb-white sm:py-3 lg:py-5">
      <div className="grid grid-cols-1 gap-4 lg:gap-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {currentProducts && currentProducts.length > 0 ? (
          currentProducts.map((singleProduct) => (
            <ProductTile key={singleProduct.id} singleProduct={singleProduct} />
          ))
        ) : (
          <h3>No products found</h3>
        )}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center my-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 mx-1 ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </section>
  );
}

export default ProductListPage;
