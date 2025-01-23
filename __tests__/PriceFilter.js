const priceFilter = (products, sortingOrder) => {
  if (sortingOrder === "low-to-high") {
      return [...products].sort((a, b) => a.price - b.price);
  } else if (sortingOrder === "high-to-low") {
      return [...products].sort((a, b) => b.price - a.price);
  }
  return products; // Default case, no sorting
};

describe('priceFilter', () => {
  const mockProducts = [
      { id: 1, name: 'Product A', price: 30 },
      { id: 2, name: 'Product B', price: 10 },
      { id: 3, name: 'Product C', price: 20 },
  ];

  it('should sort products by price in ascending order when sortingOrder is "low-to-high"', () => {
      const result = priceFilter(mockProducts, 'low-to-high');
      expect(result).toEqual([
          { id: 2, name: 'Product B', price: 10 },
          { id: 3, name: 'Product C', price: 20 },
          { id: 1, name: 'Product A', price: 30 },
      ]);
  });

  it('should sort products by price in descending order when sortingOrder is "high-to-low"', () => {
      const result = priceFilter(mockProducts, 'high-to-low');
      expect(result).toEqual([
          { id: 1, name: 'Product A', price: 30 },
          { id: 3, name: 'Product C', price: 20 },
          { id: 2, name: 'Product B', price: 10 },
      ]);
  });

  it('should return the original products list when sortingOrder is "not-selected"', () => {
      const result = priceFilter(mockProducts, 'not-selected');
      expect(result).toEqual(mockProducts);
  });
});