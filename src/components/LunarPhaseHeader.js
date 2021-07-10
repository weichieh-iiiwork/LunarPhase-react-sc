import React from 'react'
import { Link } from 'react-router-dom'

function LunarPhaseHeader(props) {
  const { orderItemsStr, amountSum} = props
  return(
    <>
      <nav className="nav-bar nav-bar-fixed container-fluid">
        <div className="nav-bar-top d-flex">
          <div className="col-4" />
          <div className="nav-logo col-4 d-flex justify-content-center">
            <img src="/../img/Cart/logo-s-dark.svg" alt="" />
          </div>
          <div className="nav-member-act col-4 d-flex justify-content-end">
            <div className="">
              <p className="small">來賓 您好</p>
            </div>
            <div className="ml-2">
              <a href="#/" className="mx-0" >
                <i className="fas fa-user" />
              </a>
              <div />
            </div>
            <div className="ml-2">
              <a href="#/" className="mx-0">
                <i className="fas fa-bookmark" />
              </a>
              <p className="small mx-0">(0)</p>
            </div>
            <div className="ml-2">
            <Link to="/cart/item" className="mx-0">
              <i className="fas fa-shopping-cart" />
            </Link>

              {/* <p className="small mx-0">({amountSum(orderItemsStr)})</p> */}
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
              <a href="#order">ORDER</a>
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