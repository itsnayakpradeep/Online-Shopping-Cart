import React, { useState } from 'react'
import"./pagination.css"
import { Button } from 'react-bootstrap';

const Pagination = ({ 
                    PageNumber, 
                    products,
                    productsPerPage,
                    totalPosts,
                    currentPage,
                    handlePageChange,
                    handleNextBtn,
                    handlePrevBtn,
                    maxPageNumberLimit, 
                    minPageNumberLimit,
                    pageDecrementBtn,
                    pageIncrementBtn,
                    }) => {
    const PageNumbers = [];
    for(let i  = 1; i<=Math.ceil(totalPosts / productsPerPage); i++) {
        PageNumbers.push(i);
      }
    const renderPageNumbers = PageNumber.map((number) => {
        if(number < maxPageNumberLimit + 1 && number > minPageNumberLimit ){
          return (
            <div className='current-page' key={number}>
                <li 
                key={number} 
                id={number} 
                onClick={() => handlePageChange(number)} 
                className={currentPage === number ? "active": null}
                >
                    {number}
                </li>
            </div>
          )
        }
    })
  return (
            <>
            { products && products.length ? (
                <div className="pagination">
                    <ul className='page-numbers'>
                            <li>
                                <Button 
                                    onClick={() => handlePrevBtn()} 
                                    disabled={currentPage === PageNumber[0] ? true : false}
                                >
                                    Prev
                                </Button>
                            </li>
                                {pageDecrementBtn}
                                {renderPageNumbers}
                                {pageIncrementBtn}
                            <li>
                                <Button 
                                    onClick={() => handleNextBtn()} 
                                    disabled={currentPage === PageNumber[4] ? true : false}
                                >
                                    Next
                                </Button>
                            </li>
                        </ul>
                </div>) : null}
            </>
    )
}
export default Pagination