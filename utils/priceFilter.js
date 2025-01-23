const sortProductsByPrice = (products, selectedPriceSorting) => {
  const sortedProducts = [...products];

  if (selectedPriceSorting === "low-to-high") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (selectedPriceSorting === "high-to-low") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  return sortedProducts;
};

module.exports = { sortProductsByPrice };