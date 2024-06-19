import React, {useState} from "react"
import { FaBasketShopping } from "react-icons/fa6";

export default function Header() {
  let [cartOpen, setCartOpen] = useState(false);
  return (
    <header>
        <div>
            <span className="logo">Clothes Club</span>
            <ul className="nav">
              <li>О нас</li>
              <li>Контакты</li>
              <li>Личный кабинет</li>
            </ul>
            <FaBasketShopping onClick={()=> setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && "active"}`}/>

            {cartOpen && (
              <div className="shop-cart"></div>
            )}        
        </div>
        <div className="presentation"></div>
    </header>
  )
}
