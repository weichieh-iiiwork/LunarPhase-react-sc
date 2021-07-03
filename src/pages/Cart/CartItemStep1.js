import React from 'react'
import LunarPhaseHeader from '../../components/LunarPhaseHeader'
import Breadcrumb from '../../components/Breadcrumb'

import ScStepRow from './components/ScStepRow'
import ScContent1 from './components/ScContent1'
import BgMountain from './components/BgMountain'
import ScBtn from './components/ScBtn'
import ScLabel from './components/ScLabel'

//網址 /cart/item/step1
function CartItemStep1() {
  return (
    <>
      <LunarPhaseHeader />
      <Breadcrumb />

      <BgMountain />
      <ScStepRow step={1} />
      {/*-------------- 第一頁 --------------*/}
      <div className="container-fluid">
        <ScLabel />
        <div className="col-10 mx-auto px-0 shadow-sm ">
          <ScContent1 />
        </div>
        <ScBtn
          prevUrl={'/cart/item/step1'}
          nextUrl={'/cart/item/step2'}
          showStep1={false}
        />
      </div>
    </>
  )
}

export default CartItemStep1
