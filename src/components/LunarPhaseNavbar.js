import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

// react-icon
import { FaShoppingCart, FaUser, FaBookmark } from 'react-icons/fa'

function LunarPhaseNavbar(props) {
  const [sticky, setSticky] = useState(false)
  const {cartQty} = props

  useEffect(() => {
    window.onscroll = function () {
      navbarSticky()
    }
    const navbar = document.getElementById('navbar')
    const sticky = navbar.offsetTop
    function navbarSticky() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add('sticky')
        setSticky(true)
      } else {
        navbar.classList.remove('sticky')
      }
    }
    window.onscroll = function () {
      navbarSticky()
    }
  }, [])
  return (
    <>
      <nav id="navbar">
        <div className={sticky ? 'nav-bar sticky' : 'nav-bar'}>
          <div className="nav-bar-top d-flex">
            <div className="col-4" />
            <div className="col-4 d-flex justify-content-center">
              <Link to="/">
                <h1>
                  <img
                    className="nav-logo"
                    src="/img/Index/logo-s-dark.svg"
                    alt="Lunar_Phase"
                  />
                </h1>
              </Link>
            </div>
            <div className="nav-member-act col-4 d-flex justify-content-end ">
              <div className="mt-2">
                <p className="small">來賓 您好</p>
              </div>
              <div className="ml-2 mt-2">
                <Link to="/" className="mx-0">
                  <FaUser />
                </Link>
                <div />
              </div>
              <div className="ml-2 mt-2">
                <Link to="/" className="mx-0">
                  <FaBookmark />
                </Link>
                <p className="small mx-0 mb-2">(0)</p>
              </div>
              <div className="ml-2 mt-2">
                <Link to="/" className="mx-0">
                  <FaShoppingCart />
                </Link>
                <p className="small mx-0 mb-2">({cartQty.totalQty})</p>
              </div>
            </div>
          </div>
          <div className="nav-bar-bottom">
            <ul className="d-flex justify-content-around col-11 mx-auto mt-1">
              <li>
                <Link to="/product">PRODUCT</Link>
              </li>
              <li>
                <Link to="/article">ARTICLE</Link>
              </li>
              <li>
                <Link to="/kit">KIT</Link>
              </li>
              <li>
                <Link to="/event">EVENT</Link>
              </li>
              <li>
                <Link to="/member">JOIN US</Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <Navbar
            bg="bg-nav-bar-mobile"
            expand="lg"
            className="nav-bar-mobile bg-nav-bar-mobile"
          >
            <Container fluid>
              <Navbar.Brand href="#home">
                <h1>
                  <img
                    className="nav-logo"
                    src="/img/Index/logo-s-dark.svg"
                    alt="Lunar_Phase"
                  />
                </h1>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto text-center">
                  <Nav.Link href="/product">PRODUCT</Nav.Link>
                  <Nav.Link href="/aarticle">ARTICLE</Nav.Link>
                  <Nav.Link href="/kit">KIT</Nav.Link>
                  <Nav.Link href="/event">EVENT</Nav.Link>
                  <Nav.Link href="/login">JOIN US</Nav.Link>
                  <NavDropdown title="會員中心" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      會員資料
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      我的收藏
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      購物車
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">登出</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </nav>
    </>
  )
}
export default LunarPhaseNavbar



// function LunarPhaseNavbar(props) {
//   const {cartQty} = props
//   return(
//     <>
//       <nav className="nav-bar sticky nav-bar-fixed container-fluid">
//         <div className="nav-bar-top d-flex">
//           <div className="col-4" />
//           <div className=" col-4 d-flex justify-content-center">
//             <img className="nav-logo" src="/../img/Cart/logo-s-dark.svg" alt="" />
//           </div>
//           <div className="nav-member-act col-4 d-flex justify-content-end">
//             <div className="">
//               <p className="small">來賓 您好</p>
//             </div>
//             <div className="ml-2">
//               <Link to="/login" className="mx-0">
//                 <FaUser />
//               </Link>
//               <div />
//             </div>
//             <div className="ml-2">
//               <Link to="/cart/item" className="mx-0">
//                 <FaBookmark />
//               </Link>              
//               <p className="small mx-0">(0)</p>
//             </div>
//             <div className="ml-2">
//               <Link to="/cart/item" className="mx-0">
//                 <FaShoppingCart />
//               </Link>

//               <p className="small mx-0">({cartQty.totalQty})</p>
//             </div>
//           </div>
//         </div>
//         <div className="nav-bar-bottom">
//           <ul className="d-flex justify-content-around col-11 mx-auto">
//             <li>
//               {/* <a href="#shop">SHOP</a> */}
//               <Link to="/productlist">商品列表</Link>
//             </li>
//             <li>
//               {/* <a href="#article">ARTICLE</a> */}
//               <Link to="/evlist">活動列表</Link>
//             </li>
//             <li>
//               <a href="/orderlist">訂單查詢</a>
//             </li>
//             <li>
//               <a href="#event">EVENT</a>
//             </li>
//             <li>
//               <a href="#join-us">JOIN US</a>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </>
//   )
// }

// export default LunarPhaseNavbar