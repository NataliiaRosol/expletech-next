
const filterProductsByCategory = (products, category) => {
  if (category === "All") {
    return products;
  }
  return products.filter((product) => product.category === category);
}

module.exports = { filterProductsByCategory };