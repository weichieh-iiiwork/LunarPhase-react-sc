import React from 'react'
import LunarPhaseHeader from '../../components/LunarPhaseHeader'
import Breadcrumb from '../../components/Breadcrumb'
import BgMountain from './components/BgMountain'
import ScStepRow from './components/ScStepRow'
import ScLabel from './components/ScLabel'
import ScContent2 from './components/ScContent2/'

function CartItemStep4() {

  return(
    <>
      <LunarPhaseHeader />
      <Breadcrumb />

      <BgMountain />
      <div className="container-fluid">
        <ScStepRow 
          step={4}
        />
        {/*-------------- 第四頁 --------------*/}
        <ScLabel />
        <div className="col-10 mx-auto px-0 shadow-sm ">
          <ScContent2 
            showContent3={false}
            showShipSel={false}
          />
        </div>
        </div>

    </>
  )
}

export default CartItemStep4