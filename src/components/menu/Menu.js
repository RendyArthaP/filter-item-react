import React from 'react'

const Menu = ({ items }) => {
  
  return (
    <div className="flex justify-center flex-col items-center text-center w-full pt-10 lg:grid grid-cols-2 2xl:grid-cols-3">
      {items.map(menuItem => (
        <div key={menuItem.id} className="px-2 flex flex-col lg:flex-row">
          <div className="py-1">
            <img src={menuItem.image} alt="" className="w-64 h-40 border-2 border-yellow-500 rounded"/>
          </div>
          <div className="w-64 mx-3">
            <div className="flex flex-row w-64 justify-between border-black border-b">
              <h4 className="font-bold">{menuItem.title}</h4>
              <h4 className="text-yellow-500">{menuItem.price}</h4>
            </div>
            <p className="text-left w-64">{menuItem.desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Menu
