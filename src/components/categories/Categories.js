import React from 'react'

const Categories = ({categories, filterItems}) => {
  return (
    <div className="flex flex-row justify-between w-full md:w-1/2 text-center items-center mx-auto px-6 pt-4">
      {categories.map((category, index) => (
        <div>
          <button 
            onClick={() => filterItems(category)}
            key={index}
            className="text-sm text-yellow-500 focus:outline-none"
          >
            {category}
          </button>
        </div>
      ))}
    </div>
  )
}

export default Categories
