import React, {useState} from "react";
import { FaBasketShopping } from "react-icons/fa6";
import Orders from "./Orders";
import Slider from "./Slider";

const showOrders = (props) =>{
  let sum = props.orders.reduce((sum, current) => sum + Number(current.price), 0);
  return(
    <div>
      {props.orders.map(el => (
        <Orders onDelete={props.onDelete} key={el.id} item={el}></Orders>
      ))}
      <p className="sum">Сумма: {new Intl.NumberFormat().format(sum)}&#x20bd;</p>
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
          <div className="header_nav">
            <span className="logo">Clothes Club</span>
            <ul className="nav">
              <FaBasketShopping onClick={()=> setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && "active"}`}/>
              <li>О нас</li>
              <li>Контакты</li>
              <li>Личный кабинет</li>
            </ul>
          </div>
            <Slider />
            {cartOpen && (
              <div className="shop-cart">
                {props.orders.length > 0 ?
                  showOrders(props) : showNothing()}
              </div>
            )}        
        </div>
    </header>
  )
}