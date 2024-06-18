import React from 'react'

export default function header() {
  return (
    <header>
        <div>
            <span className='logo'>Clothes Club</span>
            <ul className='nav'>
              <li>О нас</li>
              <li>Контакты</li>
              <li>Личный кабинет</li>
            </ul>
        </div>
        <div className='presentation'></div>
    </header>
  )
}
