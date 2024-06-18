
import React from 'react'
//Импорт картинок (проблемы с подгрузкой картинок)
import maleTShirt from '../img/male_t-shirt.jpg';
import femaleTShirt from '../img/female_t-shirt.webp';
import maleChinos from '../img/male_chinos.jpg';
import femaleJeans from '../img/female_jeans.webp';
import maleShorts from '../img/shorts_male1.jpg';

export default function Item(props) {
  let imgSrc;
  switch (props.item.img) {
    case 'male_t-shirt.jpg':
      imgSrc = maleTShirt;
      break;
    case 'female_t-shirt.webp':
      imgSrc = femaleTShirt;
      break;
    case 'male_chinos.jpg':
      imgSrc = maleChinos;
      break;
    case 'female_jeans.webp':
      imgSrc = femaleJeans;
      break;
    case 'shorts_male1.jpg':
      imgSrc = maleShorts;
      break;
    default:
      imgSrc = '';
  }

  return (
    <div className='item'>
      <img src={imgSrc} alt={""} />
      <h3>{props.item.title}</h3>
      <b>{props.item.price}&#x20bd;</b>
      <div className='add-to-cart'>+</div>
    </div>
  )
}
