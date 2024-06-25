import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import products from "./components/products.json";

function App() {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    setItems(products.items);
  }, []);

  const [orders, setOrders] = useState([]);

  const addToOrder = (item) => {
    let isInArray = false;
    orders.forEach(element => {
      if (element.id === item.id) {
        isInArray = true;
      }
    });
    if (!isInArray) {
      setOrders([...orders, item]);
    }
  };

  const deleteOrder = (id) =>{
    setOrders(orders.filter(el => el.id !== id))
  }

  return (
    <div className="wrapper">
      <Header orders={orders} onDelete={deleteOrder}/>
      <div className="bestsellers">
        <h2 className="bestsellers_title">Бестселлеры</h2>
        <Items items={items} onAdd={addToOrder} />
      </div>
      <Footer />
    </div>
  );
}

export default App;