const filterBySearch = (products, searchParam) => {
  if (searchParam.trim() === "") {
    return products
  }
  return products = products.filter((product) =>
    product.title.toLowerCase().includes(searchParam.toLowerCase())
  );
}

module.exports = { filterBySearch };