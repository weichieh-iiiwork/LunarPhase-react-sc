import React, { useState, useEffect } from 'react'
import CartItemStep1 from './CartItemStep1'
import CartItemStep2 from './CartItemStep2'
import CartItemStep3 from './CartItemStep3'
import CartItemStep4 from './CartItemStep4'

function CartItem() {
  const [step, setStep] = useState(1);
  const [isCon, setIsCon] = useState(false) //物流是否為便利商店
  const [shipPrice, setShipPrice] = useState(0) //運費
  const [shipType, setShipType] = useState('') //物流方式
  const [paymentWay, setPaymentWay] = useState('') //付款方式
  const [homeUserName, setHomeUserName] = useState('') //收貨人姓名
  const [homeUserPhone, setHomeUserPhone] = useState('') //收貨人電話
  const [homeUserAddress, setHomeUserAddress] = useState('') //收貨地址
  const [country, setCountry] = useState('')
  const [township, setTownship] = useState('')
  const [seletedConCity, setSeletedConCity] = useState('') //超商縣市
  const [seletedConStore, setSeletedConStore] = useState('') //超商店家
  const [selectedConAddress, setSeletedConAddress] = useState('') //超商地址
  const [scOrderId, setScOrderId] = useState(0) //訂單編號

  // 從localStorage取出購物車資訊，往子女元件傳遞
  const orderItems = localStorage.getItem('cart')
  const orderItemsStr = JSON.parse(orderItems)

  const [inputs, setInputs] = useState({
    name: '', //收貨人姓名
    phone: '', //收貨人電話
    homeAddress: '', //收貨地址
    country:'', //收貨地址(縣市)
    township:'', //收貨地址(區域)
    conAddress:'', //超商地址
    conCity: '', //超商(縣市)
    conStore:'', //超商(店家)
    shipPrice:0, //運費
    shipType:'', //物流方式
    paymentWay:'', //付款方式
  })

  const onChangeForField = (fieldName) => (event) => {
    setInputs((state) => ({
      ...state,
      [fieldName]: event.target.value,
    }))
  }

  /*
   data格式:{
   "orderItems":[{購物車第1筆商品},{購物車第2筆商品},...],
   "orderInfo":{
      "orderId":1625385519035,"username":"jessica","orderPrice":2200,"paymentTypeId":5
      }
   }
  */
  // 計算總價用的函式
  const sum = (items) => {
    let total = 0
    for (let i = 0; i < items.length; i++) {
      total += items[i].amount * items[i].price
    }
    return total
  }

  // 計算總商品數量的函式
  const amountSum = (items) => {
    let totalAmount = 0
    for (let i = 0; i < items.length; i++) {
      totalAmount += items[i].amount
    }
    return totalAmount
  }

  async function addOrderToSever(e) {
    const orderId = +new Date()
    setScOrderId(orderId)
    let data = {
      orderItems: [],
    }
    for (let item of orderItemsStr) {
      const tempObj = {
        orderId: orderId,
        orderItemsId: item.id,
        checkPrice: item.price,
        checkQty: item.amount,
        checkSubtotal: item.price * item.amount,
      }
      data.orderItems.push(tempObj)
    }
    //  `orderId`, `username`, `receiverName`, `receiverPhone`, `orderPrice`, `shippingType`, `shippingPrice`, `conStore`, `conAddress`, `homeAddress`, `paymentType`, `created_at`, `updated_at`
    data.orderInfo = {
      orderId: orderId,
      username: 'jessica',
      receiverName: inputs.name,
      receiverPhone: inputs.phone,
      orderPrice: sum(orderItemsStr) + shipPrice,
      shippingType: shipType,
      shippingPrice: shipPrice,
      conStore: seletedConCity+seletedConStore,
      conAddress: selectedConAddress,
      homeAddress: inputs.homeAddress,
      paymentType: paymentWay,
    }

    // 連接的伺服器資料網址
    const url = 'http://localhost:5500/cart/product/order/add'

    // 注意資料格式要設定，伺服器才知道是json格式
    // 轉成json檔傳到伺服器
    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    console.log('JSON', JSON.stringify(data))
    // console.log('JSON parse',JSON.parse(JSON.stringify(data)).orderItems)

    const response = await fetch(request)
    const dataRes = await response.json()

    console.log('伺服器回傳的json資料', dataRes)
  }


  useEffect(() => {
    console.log('step',step)
    console.log('isCon',isCon)
    console.log('shipPrice',shipPrice)
    console.log('shipType',typeof(shipType),shipType,'shipPrice',shipPrice)
    console.log('seletedConCity',seletedConCity,'seletedConStore',seletedConStore,'selectedConAddress',selectedConAddress)
    console.log('country',country,'township',township)
  }, [step, isCon, shipPrice, shipType,seletedConCity,seletedConStore,selectedConAddress,country,township])

  if(step===1) {
    return(
      <CartItemStep1
       nextStep={() => setStep(2)}/>
    ) 
  }
  if (step === 2){
    return(
      <CartItemStep2 
        prevStep={() => setStep(1)}
        nextStep={() => setStep(3)} 
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
        homeUserName={homeUserName}
        setHomeUserName={setHomeUserName}
        homeUserPhone={homeUserPhone}
        setHomeUserPhone={setHomeUserPhone}
        country={country}
        setCountry={setCountry}
        township={township}
        setTownship={setTownship}
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
        scOrderId={scOrderId}
      />
    ) 
  } 
  if (step === 3){
    return(
      <CartItemStep3 
        prevStep={() => setStep(2)}
        nextStep={() => { addOrderToSever(); return setStep(4)}}
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
        homeUserName={homeUserName}
        setHomeUserName={setHomeUserName}
        homeUserPhone={homeUserPhone}
        setHomeUserPhone={setHomeUserPhone}
        country={country}
        setCountry={setCountry}
        township={township}
        setTownship={setTownship}
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
        scOrderId={scOrderId}
      />
    ) 
  } 
	if (step === 4){
    return(
      <CartItemStep4 
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
        homeUserName={homeUserName}
        setHomeUserName={setHomeUserName}
        homeUserPhone={homeUserPhone}
        setHomeUserPhone={setHomeUserPhone}
        country={country}
        setCountry={setCountry}
        township={township}
        setTownship={setTownship}
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
        scOrderId={scOrderId}
      />
    ) 
  } 

}

export default CartItem
