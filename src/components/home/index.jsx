import React, { useEffect, useState, useMemo, useRef, } from 'react'
import"./style.css";
import api from "../../services/api";
import { Link } from "react-router-dom"

import { Container,Row, Col, Form, Button, Card, } from 'react-bootstrap';
import Pagination from '../pagination/pagination';
import Search from '../searchbar/search';


 const Home = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(6);
  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit ,setMaxPageNumberLimit] = useState(6)
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0)
  const indexOfLastItem = currentPage * productsPerPage;
  const indexOfFirstItem = indexOfLastItem - productsPerPage;
  const currentItem = products.slice(indexOfFirstItem, indexOfLastItem);
  const fetchProducts = async() => {
    await api
    .getProductListAPI()
    .then(res => {
      if(res && res.data.products){
        setProducts(res.data.products);
      }
    })
    .catch((error) => console.log(error))
  } 
  useEffect(() => {
    fetchProducts();
  }, [currentPage])

const handleCartClick = () => {
    // history.push('/product');
  };

  const PageNumber = [];
  for(let i  = 1; i<=Math.ceil(products.length / productsPerPage); i++) {
    PageNumber.push(i);
  }
  const handlePageChange = (PageNumber) => {
    setCurrentPage(PageNumber);
    
  }
  const handlePrevBtn = () => {
    console.log("handlePrevBtn")
    setCurrentPage(currentPage - 1);
    if((currentPage - 1) % pageNumberLimit === 0){
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  }
  const handleNextBtn = () => {
    setCurrentPage(currentPage + 1);
    if(currentPage + 1 > maxPageNumberLimit){
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  }
  let pageIncrementBtn = null;
  if(PageNumber.length > maxPageNumberLimit){
    pageIncrementBtn = <li onClick={handleNextBtn}>&hellip;</li>
  }
  let pageDecrementBtn = null;
  if(minPageNumberLimit >= 1){
    pageDecrementBtn = <li onClick={handlePrevBtn}>&hellip;</li>
  }
  const handleSearchInputChanges = e => {
    setSearch(e.target.value);
  };

  const resetInputField = () => {
    setSearch(search);
  };

  const callSearchFunction = (e) => {
    e.preventDefault();
    setSearch(search);
    resetInputField();
  }
  return (
    <>
        <Container>
          <Row>
            <Col mt={0} sm={6} >
              <Search search={search} 
                handleSearchInputChanges={handleSearchInputChanges} 
                callSearchFunction={callSearchFunction} 
              />
            </Col>
          </Row>
            <Row>
              <div className="product-container">
                <Col md={4}>
                  <div className="box-container">
                    {currentItem && currentItem.length ? currentItem.filter((product) => product.title.toLowerCase().includes(search)).map(product => (
                        <div className="box" key={`${product.id}`}>
                            <Link to="/product">
                                <div className="product-img">
                                  <img src={product.images[0]} alt={product.title} />
                                </div>
                                <div className="product-bottom">
                                  <div className='product-name'>{product.title}</div>
                                    <div className="price">
                                      <h4><span>₹</span> {product.price}</h4>
                                    </div>
                                    <Button to="/product" className='view-btn' onClick={handleCartClick}>add to cart</Button>
                                </div>
                            </Link>
                        </div>
                      )): "Loading...."}
                  </div>
                </Col> 
              </div>
            </Row>
            <Row>
              <Col md={12}>
                <Pagination 
                  PageNumber={PageNumber} 
                  products={products}
                  currentPage={currentPage}
                  totalPosts={currentItem.length}
                  productsPerPage={productsPerPage}
                  pageNumberLimit={pageNumberLimit}
                  handleNextBtn={handleNextBtn}
                  handlePrevBtn={handlePrevBtn}
                  handlePageChange={handlePageChange}
                  pageDecrementBtn={pageDecrementBtn}
                  pageIncrementBtn={pageIncrementBtn}
                  maxPageNumberLimit={maxPageNumberLimit} 
                  minPageNumberLimit={minPageNumberLimit}
                />
              </Col>
            </Row>
        </Container>
    </>
  )
};
export default Home;