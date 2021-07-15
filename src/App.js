import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

// 導入所需頁面
import Home from './pages/Home'
import ProductList from './pages/Product/ProductList'
import CartItem from './pages/Cart/CartItem'
import Form from './pages/Form'
import EvList from './pages/Product/EvList'
import CartEv from './pages/Cart/CartEv'
import OrderList from './pages/OrderList'
import ScrollToTop from './components/ScrollToTop'
import Login from './pages/Login'
// import CartItemOrder from './pages/Cart/CartItemOrder'



function App() {


  const [cartQty, setCartQty] = useState(
  {
    itemsQty: 0,
    eventsQty: 0,
    kitsQty: 0,
    totalQty: 0,
  })

  return (
    <Router>
      <>
      {/* <LunarPhaseHeader 
        cartQty={cartQty}
        setCartQty={setCartQty}
      /> */}
      <ScrollToTop>
        <Switch>
          <Route path="/cart/event">
            <CartEv 
            />
          </Route>
          {/* <Route path="/cart/item/order">
            <CartItemOrder 
              cartQty={cartQty}
              // setCartQty={setCartQty}
            />
          </Route> */}
          <Route path="/cart/item">
            <CartItem 
              cartQty={cartQty}
              setCartQty={setCartQty}
            />
          </Route>
          <Route path="/form">
            <Form/>
          </Route>
          
      
          <Route path="/login">
            <Login/>
          </Route>
          {/* 測試購物車存資料到localStorage；測試撈訂單 */}
          <Route path="/orderlist">
            <OrderList/>
          </Route>

          <Route path="/productlist">
            <ProductList/>
          </Route>
          <Route path="/evlist">
            <EvList/>
          </Route>
          {/* 測試購物車存資料到localStorage結束 */}

          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </ScrollToTop>
      </>
    </Router>
  )
}

export default App
