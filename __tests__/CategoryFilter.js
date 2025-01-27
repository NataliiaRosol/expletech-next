const { filterProductsByCategory } = require("../utils/categoryFilter.js");

describe("filterProductsByCategory", () => {
  const products = [
    { id: 1, category: "beauty", title: "Product 1" },
    { id: 2, category: "electronics", title: "Product 2" },
    { id: 3, category: "beauty", title: "Product 3" },
  ];

  test("should return all products if category is 'All'", () => {
    const result = filterProductsByCategory(products, "All");
    expect(result).toEqual(products);
  });

  test("should return products matching the specified category", () => {
    const result = filterProductsByCategory(products, "beauty");
    expect(result).toEqual([
      { id: 1, category: "beauty", title: "Product 1" },
      { id: 3, category: "beauty", title: "Product 3" },
    ]);
  });

  test("should return an empty array if no products match the category", () => {
    const result = filterProductsByCategory(products, "furniture");
    expect(result).toEqual([]);
  });
});