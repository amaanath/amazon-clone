import React from 'react'
import "./Product.css"

export default function Product({id, title, image, price, rating}) {
    return (
        <div className="product">
            
            <div className="product__info">
                
                <p>{title}</p>

                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                        <p>⭐</p>
                        ))}
                </div>

                <img className="product__image" src={image} alt="" />

                <button className="product__button">Add to Basket</button> 

            </div>
        </div>
    )
}
