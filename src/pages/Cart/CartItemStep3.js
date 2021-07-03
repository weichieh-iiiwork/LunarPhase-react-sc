import React from 'react'
import LunarPhaseHeader from '../../components/LunarPhaseHeader'
import Breadcrumb from '../../components/Breadcrumb'

import ScStepRow from './components/ScStepRow'
import ScContent2 from './components/ScContent2/'
import BgMountain from './components/BgMountain'
import ScBtn from './components/ScBtn'
import ScLabel from './components/ScLabel'

//網址 /cart/item/step3
function CartItemStep3() {
  return (
    <>
      <LunarPhaseHeader />
      <Breadcrumb />

      <BgMountain />
        <ScStepRow step={3} />
        {/*-------------- 第三頁 --------------*/}
        <ScLabel />
        <ScContent2
        showContent3={true} 
        showShipSel={true}
        />
        <ScBtn
          prevUrl={'/cart/item/step2'}
          nextUrl={'/cart/item/step4'}
          showStep1={true}
        />
    </>
  )
}

export default CartItemStep3
