import './Favs.css'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { FaStar } from 'react-icons/fa';

const Favs = () => {
  const [cards, setCards] = useState([]);

  



  
  useEffect(() => {
    axios
    .get('https://dummyjson.com/products')
    .then(res => setCards(res.data.products))
    .catch(err => console.error(err))
  }, [])
  return (
    <section className='favs__wrapper'>
      <div className="container">
        <h3>Favorites</h3>

        <div className="favs__cards--wrapper">
          {
              cards.map((item, index) => {
                return(
                  <div className="product__cards" key={index}>
                    <img src={item.thumbnail} alt="" />
                    <h3>{item.title}</h3>
                    <b>{item.price}</b>
                    <p>Rating: {item.rating} <FaStar /></p>

                    <button>Buy Now</button>
                  </div>
                )
              })
            }
        </div>
      </div>
      
    </section>
  )
}

export default Favs
