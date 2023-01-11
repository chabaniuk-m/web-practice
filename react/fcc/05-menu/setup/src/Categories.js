import React from 'react';

const Categories = ({categories, filterMeals}) => {
  return (
    <div className='menu'>
      <h2 className='title'>Our Menu</h2>
      <div className='underline'></div>
      <div className='btn-container'>
        <button className='filter-btn' onClick={() => filterMeals()}>all</button>
        {
          categories().map(category => {
            return <button className='filter-btn' onClick={() => filterMeals(category)}>{category}</button>
          })
        }
      </div>
    </div>
  )
};

export default Categories;
