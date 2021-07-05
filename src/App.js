import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

// 導入所需頁面
import Home from './pages/Home'
import CartItemStep1 from './pages/Cart/CartItemStep1'
import CartItemStep2 from './pages/Cart/CartItemStep2'
import CartItemStep3 from './pages/Cart/CartItemStep3'
import CartItemStep4 from './pages/Cart/CartItemStep4'
import ProductList from './pages/Product/ProductList'



function App() {
  const [auth, setAuth] = useState(true)

  return (
    <Router>

      <>
        <Switch>
        <Route path="/cart/item/step4">
            <CartItemStep4 auth={auth} />
          </Route>
          <Route path="/cart/item/step3">
            <CartItemStep3 auth={auth} />
          </Route>
          <Route path="/cart/item/step2">
            <CartItemStep2 auth={auth} />
          </Route>
          <Route path="/cart/item/step1">
            <CartItemStep1 auth={auth} />
          </Route>
          
          {/* 測試購物車存資料到localStorage */}
          
          <Route path="/productlist">
            <ProductList/>
          </Route>
          {/* 測試購物車存資料到localStorage結束 */}

          <Route exact path="/">
            <Home auth={auth} />
          </Route>
        </Switch>
      </>
    </Router>
  )
}

export default App
