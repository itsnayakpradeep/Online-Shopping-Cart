import React from 'react'

export default function ProductList(props) {
  return (
    <>
        <div className="card">
            <img className='product-image' src={props.thumbnail} alt="product-img" />
            <h2>{props.brand}</h2>
            <p className="price"><span>₹</span> {props.price}</p>
            <p>{props.category}</p>
            <p>
              <button>Add to cart</button>
            </p>
        </div>
    </>
    
        
  )
}
