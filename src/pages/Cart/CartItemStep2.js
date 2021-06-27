import React, { useState, useEffect } from 'react'
import LunarPhaseHeader from '../../components/LunarPhaseHeader'
import Breadcrumb from '../../components/Breadcrumb'

import ScStepRow from './components/ScStepRow'
import ScContent2 from './components/ScContent2'
import BgMountain from './components/BgMountain'
import ScBtn from './components/ScBtn'
import ScLabel from './components/ScLabel'


//網址 /cart/item-cart/step2
function CartItemStep2() {
  return (
    <>
      <LunarPhaseHeader />
      <Breadcrumb />

      <BgMountain />
      <div className="container-fluid">
        <ScStepRow 
          step={2}
        />
        {/*-------------- 第二頁 --------------*/}
        <ScLabel />
        <div className="col-10 mx-auto px-0 shadow-sm ">
          <ScContent2 />
        </div>
        <ScBtn 
          prevUrl={"/cart/item/step1"}
          nextUrl={"/cart/item/step3"}
          showStep1={true}
        />
      </div>
    </>
  )
}

export default CartItemStep2
