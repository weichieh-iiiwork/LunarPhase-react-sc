import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
// react-icon
import { FaShoppingCart } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa'
import { FaBookmark } from 'react-icons/fa'

function LunarPhaseHeader(props) {
  const {cartQty, setCartQty, qty} = props
  return(
    <>
      <nav className="nav-bar nav-bar-fixed container-fluid">
        <div className="nav-bar-top d-flex">
          <div className="col-4" />
          <div className=" col-4 d-flex justify-content-center">
            <img className="nav-logo" src="/../img/Cart/logo-s-dark.svg" alt="" />
          </div>
          <div className="nav-member-act col-4 d-flex justify-content-end">
            <div className="">
              <p className="small">來賓 您好</p>
            </div>
            <div className="ml-2">
              <Link to="/login" className="mx-0">
                <FaUser />
              </Link>
              <div />
            </div>
            <div className="ml-2">
              <Link to="/cart/item" className="mx-0">
                <FaBookmark />
              </Link>              
              <p className="small mx-0">(0)</p>
            </div>
            <div className="ml-2">
              <Link to="/cart/item" className="mx-0">
                <FaShoppingCart />
              </Link>

              <p className="small mx-0">({cartQty.totalQty})</p>
            </div>
          </div>
        </div>
        <div className="nav-bar-bottom">
          <ul className="d-flex justify-content-around col-11 mx-auto">
            <li>
              {/* <a href="#shop">SHOP</a> */}
              <Link to="/productlist">商品列表</Link>
            </li>
            <li>
              {/* <a href="#article">ARTICLE</a> */}
              <Link to="/evlist">活動列表</Link>
            </li>
            <li>
              <a href="/orderlist">訂單查詢</a>
            </li>
            <li>
              <a href="#event">EVENT</a>
            </li>
            <li>
              <a href="#join-us">JOIN US</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default LunarPhaseHeader