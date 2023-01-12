import React from 'react';

const Menu = ({id, title, category, price, img, desc}) => {
  return (
    <div className='menu-item'>
      <img className='photo' src={img} alt={title} />
      <div className='item-info'>
        <header>
          <h4>{title}</h4>
          <span className='price'>{price}</span>
        </header>
        <p className='item-text'>{desc}</p>
      </div>
    </div>
  )
};

export default Menu;
