# Expletech App

This is a **Next.js 15 project** designed as test task for Expletsch. It includes features such as product listing, category filtering, price sorting, and a search bar.

---

## Features

- **Dynamic Routing**: Supports routes for individual product details.
- **Filters**: Category-based filtering, price sorting, and search functionality.
- **Pagination**: Displays products with pagination (5 products per page).
- **Responsive Design**: Optimized for various devices and screen sizes.

---

## Getting Started

### **Requirements**
- Node.js (v16 or later)
- npm or yarn

---

### **Installation**

1. Extract the ZIP file

2. Install dependencies:

```` 
npm install

3. Run the development server:
````
npm run dev

4. Open http://localhost:3000 to view the app in your browser.



# Application Testing Instructions

## Overview
This document provides instructions for testing the application's functionality, including search, sorting, and category filtering features.

---

## Test Cases

### **1. Search Functionality**

1. Open the application in your browser.
2. Locate the **search bar** at the top of the page.
3. Type the word `colombo` into the search field.
4. Click the **Search** button or press `Enter`.
5. Verify:
   - The displayed results match the search term.
   - Only relevant products are shown.

---

### **2. Price Sorting**

1. Ensure all products or the search results are displayed.
2. Locate the **price sorting dropdown** near the top of the page.
3. Perform the following actions:
   - Select the option **Low to High** and verify:
     - Products are sorted in ascending order of price.
   - Select the option **High to Low** and verify:
     - Products are sorted in descending order of price.

---

### **3. Category Filtering**

1. Locate the **category filter dropdown** at the top of the page.
2. Perform the following actions:
   - Select any category and verify:
     - Only products from the selected category are displayed.
   - Navigate through pagination, if applicable, to ensure all filtered results are displayed.

---

### **4. Combination Test Case: Filter and Sort**

1. Select the category **Beauty** from the category filter.
   - Verify that only products from the Beauty category are displayed.
2. Sort these filtered products by **Low to High**.
   - Verify that the filtered products are sorted in ascending order of price.
3. Change the sorting to **High to Low**.
   - Verify that the filtered products are now sorted in descending order of price.

---

## Expected Results

1. **Search Functionality**:
   - Only products containing the term `colombo` should appear in the search results.
2. **Price Sorting**:
   - Products should be sorted correctly as per the selected sorting option.
3. **Category Filtering**:
   - Only products belonging to the selected category should be displayed.
4. **Combination**:
   - Filters and sorting should work seamlessly together, showing accurate and properly sorted results.
