import React, { useState, useEffect } from 'react'
import LunarPhaseHeader from '../../components/LunarPhaseHeader'
import Breadcrumb from '../../components/Breadcrumb'

import ScStepRow from './components/ScStepRow'
import ScContent1 from './components/ScContent1'
import BgMountain from './components/BgMountain'
import ScBtn from './components/ScBtn'
import ScLabel from './components/ScLabel'

//網址 /cart/item-cart/step1
function CartItemStep1() {
  return (
    <>
      <LunarPhaseHeader />
      <Breadcrumb />

      <BgMountain />
      <div className="container-fluid">
        <ScStepRow />
        {/*-------------- 第一頁 --------------*/}
        <ScLabel />
        <div className="col-10 mx-auto px-0 shadow-sm ">
          <ScContent1 />
        </div>
        <ScBtn />
      </div>
    </>
  )
}

export default CartItemStep1
