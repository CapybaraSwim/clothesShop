import React from 'react';

export default function Item(props) {
  const imgSrc = `/img/${props.item.img}`;

  return (
    <div className='item'>
      <img src={imgSrc} alt={props.item.title} 
        onError={(e) => {
          console.error(`Image load failed for ${imgSrc}`);
          e.target.style.display = 'none';
        }}/>
      <h3>{props.item.title}</h3>
      <b>{props.item.price}&#x20bd;</b>
      <div onClick={() => props.onAdd(props.item)} className='add-to-cart'>+</div>
    </div>
  );
}