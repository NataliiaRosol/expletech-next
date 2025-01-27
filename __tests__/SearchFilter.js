const { filterBySearch } = require("@/utils/filterBySearch");

describe("filterBySearch", () => {
  const products = [
    { id: 1, title: "Laptop Dell" },
    { id: 2, title: "Smartphone Samsung" },
    { id: 3, title: "Laptop HP" },
  ];

  test("should return all products if searchParam is empty", () => {
    const result = filterBySearch(products, "");
    expect(result).toEqual(products);
  });

  test("should return products matching the search parameter", () => {
    const result = filterBySearch(products, "laptop");
    expect(result).toEqual([
      { id: 1, title: "Laptop Dell" },
      { id: 3, title: "Laptop HP" },
    ]);
  });

  test("should return an empty array if no products match the search parameter", () => {
    const result = filterBySearch(products, "tablet");
    expect(result).toEqual([]);
  });
});
