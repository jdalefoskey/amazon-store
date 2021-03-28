import React from 'react';
import './Product.css';

function Product({id, title, image, price, rating}) {
    return (
        <div className="product">
            <div className="product_info">
            <p>{title}</p>
            <p className="product_price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product_rating">
                {
                    Array(rating)
                    .fill()
                    .map((_) => ( 
                        <p>⭐</p>
                    ))
                }

            </div>
            <img id="product_image" src={image} alt="image" />
            <button className="item_button">Add to basket</button>
            </div>
        </div>
    )
}

export default Product;
