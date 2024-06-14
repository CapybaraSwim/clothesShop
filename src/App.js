import React, {useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      title: 'Мужская футболка',
      img: '',
      desc: 'Муж. футболка',
      category: 'Футболки',
      price: '1270'
    },
    {
      id: 2,
      title: 'Женская футболка',
      img: '',
      desc: 'Жен. футболка',
      category: 'Футболки',
      price: '1180'
    },
    {
      id: 3,
      title: 'Детская футболка',
      img: '',
      desc: 'Дет. футболка',
      category: 'Футболки',
      price: '890'
    }
  ])
  return (
    <div className="wrapper">
      <Header/>
      <Items items={items}/>
      <Footer/>
    </div>
  );
}

export default App;
