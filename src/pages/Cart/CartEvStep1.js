import React from 'react'
import LunarPhaseHeader from '../../components/LunarPhaseHeader'
import Breadcrumb from '../../components/Breadcrumb'

import ScStepRow from './components/ScStepRow'
import ScEvCart from './components/ScEvCart/'

import ScBtn from './components/ScBtn'
import ScEvLabel from './components/ScEvLabel'

//網址 /cart/event
function CartEvStep1(props) {
  const { nextStep, setStep, cartQty } = props
  return (
    <>
      <LunarPhaseHeader 
        cartQty={cartQty} />
      <Breadcrumb />

      <ScStepRow step={1} setStep={setStep} />
      {/*-------------- 第一頁 --------------*/}
      <ScEvLabel />
      <ScEvCart />
      <ScBtn nextStep={nextStep} showStep1={false} showStep2={true} />
    </>
  )
}

export default CartEvStep1
