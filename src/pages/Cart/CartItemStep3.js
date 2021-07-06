import React from 'react'
import LunarPhaseHeader from '../../components/LunarPhaseHeader'
import Breadcrumb from '../../components/Breadcrumb'

import ScStepRow from './components/ScStepRow'
import ScCartChecked from './components/ScCartChecked/'
import ScBtn from './components/ScBtn'
import ScLabel from './components/ScLabel'

//網址 /cart/item
function CartItemStep3(props) {
  const { 
    prevStep, nextStep,
    inputs, setInputs,onChangeForField,
    isCon,
    setIsCon,
    shipPrice,
    setShipPrice,
    shipType,
    setShipType,
    paymentWay,
    setPaymentWay,
    // homeUserName,
    // setHomeUserName,
    // homeUserPhone,
    // setHomeUserPhone,
    // homeUserAddress,
    // setHomeUserAddress,
    country, setCountry, township, setTownship,
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

      <ScStepRow step={3} />
      {/*-------------- 第三頁 --------------*/}
      <ScLabel />
      <ScCartChecked
        showContent3={true}
        showShipSel={true}
        showContent4={false}
        inputs={inputs}
        setInputs={setInputs}
        onChangeForField={onChangeForField}

        isCon={isCon}
        setIsCon={setIsCon}
        shipPrice={shipPrice}
        setShipPrice={setShipPrice}
        shipType={shipType}
        setShipType={setShipType}
        paymentWay={paymentWay}
        setPaymentWay={setPaymentWay}
        // homeUserName={homeUserName}
        // setHomeUserName={setHomeUserName}
        // homeUserPhone={homeUserPhone}
        // setHomeUserPhone={setHomeUserPhone}
        country={country}
        setCountry={setCountry}
        township={township}
        setTownship={setTownship}
        // homeUserAddress={homeUserAddress}
        // setHomeUserAddress={setHomeUserAddress}
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

export default CartItemStep3
