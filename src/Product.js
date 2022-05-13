import React from 'react';
import './Product.css';
/*rfce shoutcut*/

function Product({ id, title, image, price, rating }) {

    return (
        <div className='product'>

            <div className='product_info'>
                <p>{title}</p>
                <p className='product_price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className='product_rating'>
                    {
                        /*Create an array of sice of the rating, 
                        filled with empty values and replace with stars*/
                        Array(rating)
                            .fill()
                            .map((_) => (
                                <p key={rating++}>⭐</p>
                            ))
                    }
                </div>

            </div>

            <img src={image} alt={title} />
            <button>Add to basket</button>

        </div>
    )
}

export default Product;