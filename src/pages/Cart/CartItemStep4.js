import React from 'react'
import LunarPhaseHeader from '../../components/LunarPhaseHeader'
import Breadcrumb from '../../components/Breadcrumb'
import BgMountain from './components/BgMountain'
import ScStepRow from './components/ScStepRow'
import ScLabel from './components/ScLabel'
import ScCartChecked from './components/ScCartChecked/'

function CartItemStep4() {
  return (
    <>
      <LunarPhaseHeader />
      <Breadcrumb />

      <BgMountain />
      <ScStepRow step={4} />
      {/*-------------- 第四頁 --------------*/}
      <ScLabel />
      <ScCartChecked showContent3={false} showShipSel={false} />
    </>
  )
}

export default CartItemStep4
