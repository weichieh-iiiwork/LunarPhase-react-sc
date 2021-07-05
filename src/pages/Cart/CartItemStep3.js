import React from 'react'
import LunarPhaseHeader from '../../components/LunarPhaseHeader'
import Breadcrumb from '../../components/Breadcrumb'

import ScStepRow from './components/ScStepRow'
import ScCartChecked from './components/ScCartChecked/'
import ScBtn from './components/ScBtn'
import ScLabel from './components/ScLabel'

//網址 /cart/item
function CartItemStep3(props) {
  const { prevStep, nextStep } = props
  return (
    <>
      <LunarPhaseHeader />
      <Breadcrumb />

      <ScStepRow step={3} />
      {/*-------------- 第三頁 --------------*/}
      <ScLabel />
      <ScCartChecked
        showContent3={true}
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

export default CartItemStep3
