import React from 'react'
import LunarPhaseHeader from '../../components/LunarPhaseHeader'
import Breadcrumb from '../../components/Breadcrumb'

import ScStepRow from './components/ScStepRow'
import ScCart from './components/ScCart/'

import ScBtn from './components/ScBtn'
import ScLabel from './components/ScLabel'

//網址 /cart/item
function CartItemStep1(props) {
  const { nextStep } = props
  return (
    <>
      <LunarPhaseHeader />
      <Breadcrumb />

      <ScStepRow step={1} />
      {/*-------------- 第一頁 --------------*/}
      <ScLabel />
      <ScCart />
      <ScBtn
        nextStep={nextStep} 
        showStep1={false}
        showStep2={true}
      />
    </>
  )
}

export default CartItemStep1
