import React, {useState} from "react"
import { FaBasketShopping } from "react-icons/fa6";
import Orders from "./Orders";


const showOrders = (props) =>{
  return(
    <div>
      {props.orders.map(el => (
        <Orders key={el.id} item={el}></Orders>
      ))}
    </div>
  )
}

const showNothing = () =>{
  return (<div className = 'empty'>
    <h3>Корзина пуста</h3>  
  </div>)
}

export default function Header(props) {
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
              <div className="shop-cart">
                {props.orders.length > 0 ?
                  showOrders(props) : showNothing()}
              </div>
            )}        
        </div>
        <div className="presentation"></div>
    </header>
  )
}
