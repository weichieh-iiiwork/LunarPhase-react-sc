import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom'

// 導入所需頁面
import Home from './pages/Home'
import LunarPhaseHeader from './components/LunarPhaseHeader'
import Breadcrumb from './components/Breadcrumb'
import CartItemStep1 from './pages/Cart/CartItemStep1'
import CartItemStep2 from './pages/Cart/CartItemStep2'
// import CartItemStep3 from './pages/Cart/CartItemStep3'
// import CartItemStep4 from './pages/Cart/CartItemStep4'



function App() {
  const [auth, setAuth] = useState(true)

  return (
    <Router>

      <>
        <Switch>
        
          <Route path="/cart/item/step2">
            <CartItemStep2 auth={auth} />
          </Route>
          <Route path="/cart/item/step1">
            <CartItemStep1 auth={auth} />
          </Route>
          <Route exact path="/">
            <Home auth={auth} />
          </Route>
        </Switch>
      </>
    </Router>
  )
}

export default App
