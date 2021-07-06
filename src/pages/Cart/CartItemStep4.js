import React from 'react'
import LunarPhaseHeader from '../../components/LunarPhaseHeader'
import Breadcrumb from '../../components/Breadcrumb'
import ScStepRow from './components/ScStepRow'
import ScLabel from './components/ScLabel'
import ScCartChecked from './components/ScCartChecked/'
import ScBtn from './components/ScBtn'

function CartItemStep4(props) {
  const { 
    inputs, setInputs,onChangeForField,
    isCon,
    setIsCon,
    shipPrice,
    setShipPrice,
    shipType,
    setShipType,
    paymentWay,
    setPaymentWay,
    country, setCountry, township, setTownship,
    seletedConCity, setSeletedConCity,
    seletedConStore, setSeletedConStore,
    selectedConAddress, setSeletedConAddress,
    sum,
    amountSum,
    addOrderToSever,
    orderItemsStr,
    scOrderId
  } = props
  return (
    <>
      <LunarPhaseHeader />
      <Breadcrumb />
      <ScStepRow step={4} />
      {/*-------------- 第四頁 --------------*/}
      <ScLabel />
      <ScCartChecked
        showContent3={false}
        showShipSel={false}
        showContent4={true}
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
        country={country}
        setCountry={setCountry}
        township={township}
        setTownship={setTownship}
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
        scOrderId={scOrderId}
      />
      <ScBtn
        showStep1={false}
        showStep2={false}
      />
    </>
  )
}

export default CartItemStep4
