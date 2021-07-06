import React from 'react'
import LunarPhaseHeader from '../../components/LunarPhaseHeader'
import Breadcrumb from '../../components/Breadcrumb'

import ScStepRow from './components/ScStepRow'
import ScCartChecked from './components/ScCartChecked'
import ScBtn from './components/ScBtn'
import ScLabel from './components/ScLabel'

//網址 /cart/item
function CartItemStep2(props) {
  const { 
    prevStep, nextStep,
    isCon,
    setIsCon,
    shipPrice,
    setShipPrice,
    shipType,
    setShipType,
    paymentWay,
    setPaymentWay,
    homeUserName,
    setHomeUserName,
    homeUserPhone,
    setHomeUserPhone,
    homeUserAddress,
    setHomeUserAddress,
    seletedConCity, setSeletedConCity,
    seletedConStore, setSeletedConStore,
    selectedConAddress, setSeletedConAddress,
    sum,
    amountSum,
    addOrderToSever,
    orderItemsStr
  } = props
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
        isCon={isCon}
        setIsCon={setIsCon}
        shipPrice={shipPrice}
        setShipPrice={setShipPrice}
        shipType={shipType}
        setShipType={setShipType}
        paymentWay={paymentWay}
        setPaymentWay={setPaymentWay}
        homeUserName={homeUserName}
        setHomeUserName={setHomeUserName}
        homeUserPhone={homeUserPhone}
        setHomeUserPhone={setHomeUserPhone}
        homeUserAddress={homeUserAddress}
        setHomeUserAddress={setHomeUserAddress}
        seletedConCity={seletedConCity}
        setSeletedConCity={setSeletedConCity}
        seletedConStore={seletedConStore}
        setSeletedConStore={setSeletedConStore}
        selectedConAddress={selectedConAddress}
        setSeletedConAddress={setSeletedConAddress}
        sum={sum}
        amountSum={amountSum}
        addOrderToSever={addOrderToSever}
        orderItemsStr={orderItemsStr}
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
