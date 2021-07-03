import React from 'react'
import LunarPhaseHeader from '../../components/LunarPhaseHeader'
import Breadcrumb from '../../components/Breadcrumb'

import ScStepRow from './components/ScStepRow'
import ScCartChecked from './components/ScCartChecked'
import BgMountain from './components/BgMountain'
import ScBtn from './components/ScBtn'
import ScLabel from './components/ScLabel'

//網址 /cart/item/step2
function CartItemStep2() {
  return (
    <>
      <LunarPhaseHeader />
      <Breadcrumb />

      <BgMountain />
      <ScStepRow step={2} />
      {/*-------------- 第二頁 --------------*/}
      <ScLabel />
      <ScCartChecked
        showContent3={false}
        showShipSel={true}
        showContent4={false}
      />
      <ScBtn
        prevUrl={'/cart/item/step1'}
        nextUrl={'/cart/item/step3'}
        showStep1={true}
        showStep2={true}
      />
    </>
  )
}

export default CartItemStep2
