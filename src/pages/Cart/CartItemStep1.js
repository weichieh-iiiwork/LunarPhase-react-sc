import React from 'react'
import LunarPhaseHeader from '../../components/LunarPhaseHeader'
import Breadcrumb from '../../components/Breadcrumb'

import ScStepRow from './components/ScStepRow'
import ScCart from './components/ScCart/'

import ScBtn from './components/ScBtn'
import ScLabel from './components/ScLabel'
import ScAd from './components/ScAD'

//網址 /cart/item
function CartItemStep1(props) {
  const { nextStep, setStep,orderItemsStr, amountSum} = props
  return (
    <>
      <LunarPhaseHeader 
        amountSum={amountSum}
        orderItemsStr={orderItemsStr}
      />
      <Breadcrumb />

      <ScStepRow step={1} 
        setStep={setStep}
      />
      {/*-------------- 第一頁 --------------*/}
      <ScLabel />
      <ScCart />
      
      <ScBtn
        nextStep={nextStep} 
        showStep1={false}
        showStep2={true}
      />
      <ScAd/>
    </>
  )
}

export default CartItemStep1
