import { useEffect, useState } from 'react'
import pimg from '../../assets/products__banner.png'
import axios from 'axios';
import { FaStar } from 'react-icons/fa';
import './Products.css'

const Products = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios
    .get('https://dummyjson.com/products?limit=3')
    .then(res => setCards(res.data.products))
    .catch(err => console.error(err))
  }, [])
  return (
    <section className='products__wrapper'>
      <div className="container">
        <div className="products__section">
          <h3>Products</h3>

          <div className="pros__banner">
            <img src={pimg} alt="" />
          </div>

          <div className="product__cards--wrapper">
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
      </div>
      
    </section>
  )
}

export default Products
