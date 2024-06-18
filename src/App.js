import React, {useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      title: 'Мужская футболка',
      img: 'male_t-shirt.jpg',
      desc: 'Бежевая мужская футболка',
      category: 't-shirts',
      price: '1270'
    },
    {
      id: 2,
      title: 'Женская футболка',
      img: 'female_t-shirt.webp',
      desc: 'Бежевая женская футболка',
      category: 't-shirts',
      price: '1180'
    },
    {
      id: 3,
      title: 'Мужские чиносы',
      img: 'male_chinos.jpg',
      desc: 'Бежевые мужские чиносы',
      category: 'pants',
      price: '2550'
    },
    {
      id: 4,
      title: 'Женские джинсы',
      img: 'female_jeans.webp',
      desc: 'Жен. джинсы',
      category: 'pants',
      price: '2480'
    },
    {
      id: 5,
      title: 'Мужские шорты OMBRE',
      img: 'shorts_male1.jpg',
      desc: 'Муж. шорты OMBRE',
      category: 'shorts',
      price: '2270'
    }
  ])
  return (
    <div className="wrapper">
      <Header/>
      <div className="bestsellers">
        <h2 className="bestsellers_title">Бестселлеры</h2>
        <Items items={items}/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
