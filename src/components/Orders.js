import React from 'react';

export default function Orders(props) {
  // Генерация абсолютного пути к изображению
  const imgSrc = `/img/${props.item.img}`;

  console.log(`Orders component: Loading image from ${imgSrc}`); // Debug line

  return (
    <div className="item_cart">
      <img src={imgSrc} alt={props.item.title} onError={(e) => {
        console.error(`Image load failed for ${imgSrc}`);
        e.target.style.display = 'none'; // Или показать резервное изображение
      }} />
      <h3>{props.item.title}</h3>
      <b>{props.item.price}&#x20bd;</b>
    </div>
  );
}