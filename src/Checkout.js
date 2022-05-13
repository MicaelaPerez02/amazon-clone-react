import React from 'react';
import './Checkout.css';
import Header from './Header';


/*rfce shoutcut*/

function Checkout() {
  return (
    <div className="header_checkout">
      {<Header />}
      <div className='checkout'>
        <div className='checkout_left'>
          <img
            className='checkout_ad'
            src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
            alt='ad'
          />
          <div>
            <h2 className='checkout_title'>Your shopping basket is empty</h2>
            <p className='checkout_info'>
              You have no items in your basket. To buy one or more items, click
              "Add to basket" next to the item.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;