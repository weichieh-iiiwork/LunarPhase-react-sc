import React from 'react'
import LunarPhaseHeader from '../../components/LunarPhaseHeader'
import Breadcrumb from '../../components/Breadcrumb'

import ScStepRow from './components/ScStepRow'
import ScCartChecked from './components/ScCartChecked'
import ScBtn from './components/ScBtn'
import ScLabel from './components/ScLabel'

//網址 /cart/item
function CartItemStep2(props) {
  const { prevStep, nextStep } = props
  return (
    <>
      <LunarPhaseHeader />
      <Breadcrumb />

      <ScStepRow step={2} />
      {/*-------------- 第二頁 --------------*/}
      <ScLabel />
      <ScCartChecked
        showContent3={false}
        showShipSel={true}
        showContent4={false}
      />
      <ScBtn
        prevStep={prevStep}
        nextStep={nextStep} 
        showStep1={true}
        showStep2={true}
      />
    </>
  )
}

export default CartItemStep2
