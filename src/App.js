import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom'

// 導入所需頁面
import LunarPhaseHeader from './components/LunarPhaseHeader'
import Breadcrumb from './components/Breadcrumb'
import CartIndex from './pages/Cart/CartIndex'


function App() {
  return (
    <>
      <LunarPhaseHeader/>
      <Breadcrumb/>
      <CartIndex/>
    </>
  )
}

export default App
