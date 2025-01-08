'use client'
import { ProductContext } from '@/context/ProductContext';
import React, { useContext } from 'react'



function CategoryFilter() {
  const { categories, setSelectedCategory } = useContext(ProductContext);

  return (
    <div className='py-2 lg:py-5 px-3'>
        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border p-2"
        >
          <option value="All">All Categories</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
  )
}

export default CategoryFilter