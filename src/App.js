import React, { useState } from 'react';
import Menu from './components/menu/Menu';
import Categories from './components/categories/Categories';
import {items} from './components/data/data';

function App() {
  const allCategories = ['All', ...new Set(items.map((item) => item.category))]

  const [menus, setMenus] = useState(items)
  const [categories, setCategories] = useState(allCategories)
  
  const filterItems = (category) => {
    if (category === 'All') {
      setMenus(items);
      return
    }
    const newItem = items.filter((item) => item.category === category);
    setMenus(newItem);
  }

  return (
    <div className="w-full text-center items-center">
      <h1>Our Menu</h1>
      <div className="border-b-2 border-yellow-500 w-10 mx-auto"></div>
      <Categories categories={categories} filterItems={filterItems}/>
      <Menu items={menus} />
    </div>
  );
}

export default App;
