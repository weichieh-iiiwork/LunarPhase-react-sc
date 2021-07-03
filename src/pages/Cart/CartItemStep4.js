import React from 'react'
import LunarPhaseHeader from '../../components/LunarPhaseHeader'
import Breadcrumb from '../../components/Breadcrumb'
import BgMountain from './components/BgMountain'
import ScStepRow from './components/ScStepRow'
import ScLabel from './components/ScLabel'
import ScContent2 from './components/ScContent2/'

function CartItemStep4() {
  return (
    <>
      <LunarPhaseHeader />
      <Breadcrumb />

      <BgMountain />
      <ScStepRow step={4} />
      {/*-------------- 第四頁 --------------*/}
      <ScLabel />
      <ScContent2 showContent3={false} showShipSel={false} />
    </>
  )
}

export default CartItemStep4
