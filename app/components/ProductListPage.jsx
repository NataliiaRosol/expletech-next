"use client";
import React, { useContext } from "react";
import ProductTile from "./ProductTile";
import { ProductContext } from "@/context/ProductContext";

function ProductListPage() {
  const { filteredProducts } = useContext(ProductContext);

  return (
    <section className="py-2 px-3 gb-white sm:py-3 lg:py-5">
      <div className="grid grid-cols-1 gap-5 lg:gap-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {filteredProducts && filteredProducts.length > 0 ? (
          filteredProducts.map((singleProduct) => (
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
