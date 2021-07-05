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

  // 從localStorage取出購物車資訊，往子女元件傳遞
  const orderItems = localStorage.getItem('cart')
  const orderItemsStr = JSON.parse(orderItems)

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
    //  `orderId`, `username`, `receiverName`, `receiverPhone`, `orderPrice`, `shippingType`, `shippingPrice`, `conAddress`, `homeAddress`, `paymentType`, `created_at`, `updated_at`
    data.orderInfo = {
      orderId: orderId,
      username: 'jessica',
      receiverName: homeUserName,
      receiverPhone: homeUserPhone,
      orderPrice: sum(orderItemsStr) + shipPrice,
      shippingType: shipType,
      shippingPrice: shipPrice,
      conAddress: '',
      homeAddress: homeUserAddress,
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
  }, [step, isCon, shipPrice, shipType])

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
        sum={sum}
        amountSum={amountSum}
        addOrderToSever={addOrderToSever}
        orderItemsStr={orderItemsStr}
      />
    ) 
  } 
  if (step === 3){
    return(
      <CartItemStep3 
        prevStep={() => setStep(2)}
        nextStep={() => { addOrderToSever(); return setStep(4)}}
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
        sum={sum}
        amountSum={amountSum}
        addOrderToSever={addOrderToSever}
        orderItemsStr={orderItemsStr} 
      />
    ) 
  } 
	if (step === 4){
    return(
      <CartItemStep4 
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
        sum={sum}
        amountSum={amountSum}
        addOrderToSever={addOrderToSever}
        orderItemsStr={orderItemsStr}
      />
    ) 
  } 

}

export default CartItem
