import React from 'react';
import Item from './Item';

export default function items(props) {
  return (
    <main>
      {props.items.map(el => (
        <Item key={el.id} item={el}/>
      ))}
    </main>
  )
}
