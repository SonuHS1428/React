import React, { useState } from 'react';

function FilteredList() {
  const items = [
    { id: 1, name: 'apple' },
    { id: 2, name: 'banana' },
    { id: 3, name: 'orange' },
    { id: 4, name: 'mango' },
    { id: 5, name: 'pineapple' },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState(items);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    
    // The .filter() method is an array method that creates a new array with all elements 
    //that pass the test implemented by the provided function.
    const filtered = items.filter(item =>
      item.name.toLowerCase().includes(e.target.value.toLowerCase())//.includes(...): This is a string method that checks
      // if one string is found within another string,returning true if found and false otherwise.
    );
    setFilteredItems(filtered);
  };

  return (
    <div className='container mx-auto p-5'>
      <h1 className='text-xl font-bold text-gray-800 mb-4'>Filtered List</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
        className='p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-transparent'
      />
      <ul className='list-disc pl-5 mt-4'>
        {/*//map function takes each item from the filteredItems array and returns a <li> (list item) element for it.*/}
        {filteredItems.map(item => (
          <li key={item.id} className='text-gray-700 text-lg py-1 '>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilteredList;