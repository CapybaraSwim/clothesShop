import React from 'react';
import maleTshirt from '../images/male_t-shirt.jpg';
import femaleTshirt from '../images/female_t-shirt.webp';
import maleChinos from '../images/male_chinos.jpg';
import femaleJeans from '../images/female_jeans.webp';
import shortsMale1 from '../images/shorts_male1.jpg';
import { RiDeleteBin6Fill } from "react-icons/ri";


const imageMap = {
  'male_t-shirt.jpg': maleTshirt,
  'female_t-shirt.webp': femaleTshirt,
  'male_chinos.jpg': maleChinos,
  'female_jeans.webp': femaleJeans,
  'shorts_male1.jpg': shortsMale1,
};

export default function Orders(props) {
  const imgSrc = imageMap[props.item.img];

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