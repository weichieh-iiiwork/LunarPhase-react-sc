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
        {/*-------------- 第二頁 --------------*/}
      <div className="container-fluid">
        <ScLabel />
        <div className="col-10 mx-auto px-0 shadow-sm ">
          <ScContent2
          showContent3={true} 
          showShipSel={true}
          />
        </div>
        <ScBtn
          prevUrl={'/cart/item/step2'}
          nextUrl={'/cart/item/step4'}
          showStep1={true}
        />
      </div>
    </>
  )
}

export default CartItemStep3
