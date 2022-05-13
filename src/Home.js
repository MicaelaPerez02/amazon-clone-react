import React from 'react';
import Header from './Header';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='header_home'>
      {<Header />}
      <div className="home">
        <img
          className="home_img"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="banner amazon, prime video promotion"
        />

        {/* Product id, title, price, rating, image*/}
        <div className="home_row">
          <Product
            id={123456789}
            title="The Gaucho Martin Fierro (UNESCO Collection of Representative Works: Latin American) "
            price={22.84}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/41gkzJtJNjS._SX331_BO1,204,203,200_.jpg"
          />
          <Product
            id={49538094}
            title="Modern Mate Cup and Bombilla Set (Yerba Mate Cup) -Yerba Mate Set"
            price={22.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71l0EXeTu8S._AC_SX425_.jpg"
          />
        </div>

        <div className="home_row">
          <Product
            id={49538094}
            title="Adidas Men's Boca a JSY T-Shirt"
            price={59.51}
            rating={4}
            image="https://m.media-amazon.com/images/I/51oqfhoCnEL._AC_UX385_.jpg"

          />
          <Product
            id={4568975}
            title="SoccerStarz Argentina Lionel Messi/Figure"
            price={4.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/61jxTBpRjJL._AC_SY450_.jpg"
          />
          <Product
            id={4578965}
            title="Empanadas. Al horno y fritas, saladas y dulces"
            price={40.00}
            rating={3}
            image="https://m.media-amazon.com/images/I/51YS8cSN0OL.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id={7895645}
            title="Sorry I Wasn’t Listening I Was Thinking About Juan Román Riquelme"
            price={6.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/41H4f+EGEaL._SX331_BO1,204,203,200_.jpg"
          />
        </div>
      </div>
    </div>
  )
}

export default Home;