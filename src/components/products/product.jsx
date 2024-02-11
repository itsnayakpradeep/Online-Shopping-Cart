import React, { useState, useEffect } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./product.css";
import api from "../../services/api";
import ProductList from '../productlist/productList';

export default function Products() {
  const [listProduct, setListProduct] = useState([]);
  const fetchProductsList = async() => {
    await api
    .getProductListAPI()
    .then(res => {
      if(res && res.data.products) {
      setListProduct(res.data.products);
     }
    })
    .catch((error) => console.log(error))
  } 
  useEffect(() => {
    fetchProductsList();
  }, [])

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
      slidesToSlide: 5
    },
    desktop: {
      breakpoint: { max: 1023, min: 800 },
      items: 3,
      slidesToSlide: 4
    },
    tablet: {
      breakpoint: { max: 798, min: 768},
      items: 2,
      slidesToSlide: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 2
    }
  };
  
  const listedProduct = listProduct.map((item) => {
    return (
      <div key={item.id}>
        <ProductList 
          title={item.brand}
          thumbnail={item.thumbnail}
          price={item.price}
          category={item.category}
        />    
      </div>)
  });

  return (
          <div className='Product-Carousel'>
            <h1>Products Carousel</h1> 
            <Carousel responsive={responsive} autoPlay={true}>
              {listedProduct}
            </Carousel>
          </div>
  )
}
