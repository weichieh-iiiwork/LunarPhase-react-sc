import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

// 導入所需頁面
import Home from './pages/Home'
// import CartItemStep1 from './pages/Cart/CartItemStep1'
// import CartItemStep2 from './pages/Cart/CartItemStep2'
// import CartItemStep3 from './pages/Cart/CartItemStep3'
// import CartItemStep4 from './pages/Cart/CartItemStep4'
import ProductList from './pages/Product/ProductList'
import CartItem from './pages/Cart/CartItem'



function App() {


  return (
    <Router>

      <>
        <Switch>
          <Route path="/cart/item">
            <CartItem />
          </Route>
      
          
          {/* 測試購物車存資料到localStorage */}
          <Route path="/productlist">
            <ProductList/>
          </Route>
          {/* 測試購物車存資料到localStorage結束 */}

          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </>
    </Router>
  )
}

export default App
