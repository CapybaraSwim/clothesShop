import React from 'react'

export default function items(props) {
  return (
    <main>
      {props.items.map(el => (
        <h1>{el.title}</h1>
      ))}
    </main>
  )
}
