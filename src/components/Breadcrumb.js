import React from 'react'
import { Link } from 'react-router-dom'

function Breadcrumb() {
  return (
    <>
      <div className="top-line container-fluid">
        <div className="d-flex justify-content-between">
          <div className="bread-box">
            <div className="bread d-flex">
              <Link to="/">HOME</Link>
              <p>&gt;</p>
              <Link to="/cart/item">CART</Link>
              
              <p>-----------</p>
              <Link to="/productlist">商品測試頁</Link>
              <Link to="/evlist">活動測試頁</Link>

            </div>
          </div>
          <div className="search-box">
            <div className="search">
              <input
                className="search-input"
                type="text"
                placeholder="Search"
              />
              <button className="search-button" href="#/">
                <i className="fas fa-search" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Breadcrumb
