import React from 'react'

function LunarPhaseHeader() {

  return(
    <>
      <nav className="nav-bar nav-bar-fixed container-fluid">
        <div className="nav-bar-top d-flex">
          <div className="col-4" />
          <div className="nav-logo col-4 d-flex justify-content-center">
            LOGO HERE
          </div>
          <div className="nav-member-act col-4 d-flex justify-content-end">
            <div className>
              <p className="small">來賓 您好</p>
            </div>
            <div className="ml-2">
              <a href className="mx-0" >
                <i className="fas fa-user" />
              </a>
              <div />
            </div>
            <div className="ml-2">
              <a href className="mx-0">
                <i className="fas fa-bookmark" />
              </a>
              <p className="small mx-0">(0)</p>
            </div>
            <div className="ml-2">
              <a href className="mx-0">
                <i className="fas fa-shopping-cart" />
              </a>
              <p className="small mx-0">(0)</p>
            </div>
          </div>
        </div>
        <div className="nav-bar-bottom">
          <ul className="d-flex justify-content-around col-11 mx-auto">
            <li>
              <a href="#shop">SHOP</a>
            </li>
            <li>
              <a href="#article">ARTICLE</a>
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