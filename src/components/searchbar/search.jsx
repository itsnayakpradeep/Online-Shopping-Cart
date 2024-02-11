import React, {useState} from 'react'
import "./search.css"
const Search = ({ 
                search, 
                handleSearchInputChanges, 
                callSearchFunction 
              }) => {
  return (
          <>
            <div className='search'>
              <form className="form-search">
                  <input
                    placeholder='Search...'
                    value={search}
                    onChange={handleSearchInputChanges}
                    type="text"
                  />
                <button type="submit" onClick={callSearchFunction}>Search</button>
              </form>
            </div>
          </>
  )
}
export default Search;