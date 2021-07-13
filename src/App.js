import React, { useEffect, useState } from 'react'
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
import LunarPhaseHeader from './components/LunarPhaseHeader'



function App() {


  // const [qty, setQty] = useState(0)
  const [cartQty, setCartQty] = useState(
  {
    itemsQty: 0,
    eventsQty: 0,
    kitsQty: 0,
    totalQty: 0,
  })

  // 從localStorage取出購物車資訊，往子女元件傳遞
  const orderItems = localStorage.getItem('cart') || 0
  const orderItemsStr = JSON.parse(orderItems)
  const orderEvents = localStorage.getItem('evcart') || 0
  const orderEventsStr = JSON.parse(orderEvents)
  const orderKits = localStorage.getItem('kitcart') || 0
  const orderKitsStr = JSON.parse(orderKits)

  // 計算總商品數量的函式
  const amountSum = (items) => {
    let totalAmount = 0
    for (let i = 0; i < items.length; i++) {
      totalAmount += items[i].amount
    }
    return totalAmount
  }


  return (
    <Router>
      <>
      <LunarPhaseHeader 
        cartQty={cartQty}
        setCartQty={setCartQty}
        // qty={qty}
      />
      <ScrollToTop>
        <Switch>
          <Route path="/cart/event">
            <CartEv 
              cartQty={cartQty}
              orderEventsStr={orderEventsStr}
            />
          </Route>
          <Route path="/cart/item">
            <CartItem 
              cartQty={cartQty}
              setCartQty={setCartQty}
              orderItemsStr={orderItemsStr}
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
