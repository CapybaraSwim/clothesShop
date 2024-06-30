import React from 'react';
import { RiDeleteBin6Fill } from "react-icons/ri";


export default function Orders(props) {
  const imgSrc = `/img/${props.item.img}`;

  return (
    <div className="item_cart">
      <img src={imgSrc} alt={props.item.title} onError={(e) => {
        console.error(`Image load failed for ${imgSrc}`);
        e.target.style.display = 'none'; // Или показать резервное изображение
      }} />
      <h3>{props.item.title}</h3>
      <b>{props.item.price}&#x20bd;</b>
      <RiDeleteBin6Fill className='item_delete' onClick={() => props.onDelete(props.item.id)}></RiDeleteBin6Fill>
    </div>
  );
}