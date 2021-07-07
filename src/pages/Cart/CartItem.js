import React, { useState, useEffect } from 'react'
import CartItemStep1 from './CartItemStep1'
import CartItemStep2 from './CartItemStep2'
import CartItemStep3 from './CartItemStep3'
import CartItemStep4 from './CartItemStep4'
import { countries, townships, postcodes } from '../../data/townships'

function CartItem() {
  const [step, setStep] = useState(1);
  const [isCon, setIsCon] = useState(false) //物流是否為便利商店
  const [shipPrice, setShipPrice] = useState(0) //運費
  const [shipType, setShipType] = useState('') //物流方式
  const [paymentWay, setPaymentWay] = useState('') //付款方式
  const [country, setCountry] = useState(-1)
  const [township, setTownship] = useState(-1)
  const [selectedConAddress, setSeletedConAddress] = useState('') //超商地址
  const [scOrderId, setScOrderId] = useState(0) //訂單編號

  // 從localStorage取出購物車資訊，往子女元件傳遞
  const orderItems = localStorage.getItem('cart')
  const orderItemsStr = JSON.parse(orderItems)

  const [inputs, setInputs] = useState({
    scname: '', //收貨人姓名  ok
    phone: '', //收貨人電話  ok
    homeAddress: '', //收貨地址  ok
    // country:'', //收貨地址(縣市)
    // township:'', //收貨地址(區域)
    // conAddress:'', //超商地址
    conCity: '', //超商(縣市)
    conStore:'', //超商(店家)
    // shipPrice:0, //運費
    // shipType:'', //物流方式
    // orderIdNum:'',
  })
  const [fieldErrors, setFieldErrors] = useState({
    scname: '', //收貨人姓名  ok
    phone: '', //收貨人電話  ok
    homeAddress: '', //收貨地址  ok
    conCity: '', //超商(縣市)
    conStore:'', //超商(店家)
    // orderIdNum:'',
  })

  // 處理每個欄位的變動 //handleFieldChange
  const onChangeForField = (e) => {
    // 更新輸入欄位
    const updatedInputs = {
      ...inputs,
      [e.target.name]: e.target.value,
    }

    setInputs(updatedInputs)
  }

  // 處理表單送出
  const handleSubmit = (e) => {
    // 阻擋表單送出預設行為
    e.preventDefault()

    // FormData: 沒有外觀的表單
    const data = new FormData(e.target)

    console.log('scname',data.get('scname'))
    console.log('phone',data.get('phone'))

    // 利用狀態來得到輸入的值
    console.log('inputs',inputs)

    // ex. 送出表單資料到伺服器
    // fetch('/api/form-submit-url', {
    //   method: 'POST',
    //   body: data,
    // })
  }
  // form有更動會觸發這個函式
  const handleChange = (e) => {
      console.log('更動欄位：', e.target.name)

      // 該欄位錯誤訊息清空
      const updatedFieldErrors = {
        ...fieldErrors,
        [e.target.name]: '',
      }

      setFieldErrors(updatedFieldErrors)
  }
  // 有錯誤的訊息會觸發在這裡
  const handleInvalid = (e) => {
    e.preventDefault()

    const updatedFieldErrors = {
      ...fieldErrors,
      [e.target.name]: e.target.validationMessage,
    }

    setFieldErrors(updatedFieldErrors)
  }

  // const onChangeForField = (fieldName) => (e) => {
  //   setInputs((state) => ({
  //     ...state,
  //     [fieldName]: e.target.value,
  //   }))
  // }

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
    // setInputs({...inputs,
    //   [inputs.orderIdNum]: orderId,})
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
      // orderId: inputs.orderIdNum,
      username: 'jessica',
      receiverName: inputs.scname,
      receiverPhone: inputs.phone,
      orderPrice: sum(orderItemsStr) + shipPrice,
      shippingType: shipType,
      shippingPrice: shipPrice,
      // conStore: seletedConCity+seletedConStore,
      conStore: inputs.conCity+inputs.conStore,
      conAddress: selectedConAddress,
      homeAddress: (country > -1  && township>-1)&& (postcodes[country][township]+countries[country]+townships[country][township]+inputs.homeAddress) ,
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
    console.log('selectedConAddress',selectedConAddress)
    console.log('country',country,'township',township)
  }, [step, isCon, shipPrice, shipType,selectedConAddress,country,township])

  const switchSteps = (step) =>{
    switch(step){
      case 1:
        return <CartItemStep1 
        nextStep={() => setStep(2)}
        setStep={setStep}
      />
      break
      case 2:
        return <CartItemStep2 
        prevStep={() => setStep(1)}
        nextStep={() => setStep(3)} 
        setStep={setStep}
        inputs={inputs}
        setInputs={setInputs}
        onChangeForField={onChangeForField}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        handleInvalid={handleInvalid}
        fieldErrors={fieldErrors}
        setFieldErrors={setFieldErrors}

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
        selectedConAddress={selectedConAddress}
        setSeletedConAddress={setSeletedConAddress}
        sum={sum}
        amountSum={amountSum}
        addOrderToSever={addOrderToSever}
        orderItemsStr={orderItemsStr}
        scOrderId={scOrderId}
      />
       break
      case 3:
        return <CartItemStep3 
        prevStep={() => setStep(2)}
        nextStep={() => { addOrderToSever(); return setStep(4)}}
        setStep={setStep}
        inputs={inputs}
        setInputs={setInputs}
        onChangeForField={onChangeForField}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        handleInvalid={handleInvalid}
        fieldErrors={fieldErrors}

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
        selectedConAddress={selectedConAddress}
        setSeletedConAddress={setSeletedConAddress}
        sum={sum}
        amountSum={amountSum}
        addOrderToSever={addOrderToSever}
        orderItemsStr={orderItemsStr} 
        scOrderId={scOrderId}
      />
       break
       case 4:
      return <CartItemStep4 
        setStep={setStep}
        inputs={inputs}
        setInputs={setInputs}
        onChangeForField={onChangeForField}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        handleInvalid={handleInvalid}
        fieldErrors={fieldErrors}

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
        selectedConAddress={selectedConAddress}
        setSeletedConAddress={setSeletedConAddress}
        sum={sum}
        amountSum={amountSum}
        addOrderToSever={addOrderToSever}
        orderItemsStr={orderItemsStr}
        scOrderId={scOrderId}
      />
       
       default:
       return ""
      }
  }
  return (<form
    onSubmit={handleSubmit}
    onChange={handleChange}
    onInvalid={handleInvalid}
  >
   {switchSteps(step)}
  </form>)
  // if(step===1) {
  //   return(
  //     <CartItemStep1
  //      nextStep={() => setStep(2)}
  //      setStep={setStep}
  //      />
  //   ) 
  // }
  // if (step === 2){
  //   return(
      
  //     <CartItemStep2 
  //       prevStep={() => setStep(1)}
  //       nextStep={() => setStep(3)} 
  //       setStep={setStep}
  //       inputs={inputs}
  //       setInputs={setInputs}
  //       onChangeForField={onChangeForField}
  //       handleSubmit={handleSubmit}
  //       handleChange={handleChange}
  //       handleInvalid={handleInvalid}
  //       fieldErrors={fieldErrors}
  //       setFieldErrors={setFieldErrors}

  //       isCon={isCon}
  //       setIsCon={setIsCon}
  //       shipPrice={shipPrice}
  //       setShipPrice={setShipPrice}
  //       shipType={shipType}
  //       setShipType={setShipType}
  //       paymentWay={paymentWay}
  //       setPaymentWay={setPaymentWay}
  //       country={country}
  //       setCountry={setCountry}
  //       township={township}
  //       setTownship={setTownship}
  //       seletedConCity={seletedConCity}
  //       setSeletedConCity={setSeletedConCity}
  //       seletedConStore={seletedConStore}
  //       setSeletedConStore={setSeletedConStore}
  //       selectedConAddress={selectedConAddress}
  //       setSeletedConAddress={setSeletedConAddress}
  //       sum={sum}
  //       amountSum={amountSum}
  //       addOrderToSever={addOrderToSever}
  //       orderItemsStr={orderItemsStr}
  //       scOrderId={scOrderId}
  //     />
     
  //   ) 
  // } 
  // if (step === 3){
  //   return(
      
  //     <CartItemStep3 
  //       prevStep={() => setStep(2)}
  //       nextStep={() => { addOrderToSever(); return setStep(4)}}
  //       setStep={setStep}
  //       inputs={inputs}
  //       setInputs={setInputs}
  //       onChangeForField={onChangeForField}
  //       handleSubmit={handleSubmit}
  //       handleChange={handleChange}
  //       handleInvalid={handleInvalid}
  //       fieldErrors={fieldErrors}

  //       isCon={isCon}
  //       setIsCon={setIsCon}
  //       shipPrice={shipPrice}
  //       setShipPrice={setShipPrice}
  //       shipType={shipType}
  //       setShipType={setShipType}
  //       paymentWay={paymentWay}
  //       setPaymentWay={setPaymentWay}
  //       country={country}
  //       setCountry={setCountry}
  //       township={township}
  //       setTownship={setTownship}
  //       seletedConCity={seletedConCity}
  //       setSeletedConCity={setSeletedConCity}
  //       seletedConStore={seletedConStore}
  //       setSeletedConStore={setSeletedConStore}
  //       selectedConAddress={selectedConAddress}
  //       setSeletedConAddress={setSeletedConAddress}
  //       sum={sum}
  //       amountSum={amountSum}
  //       addOrderToSever={addOrderToSever}
  //       orderItemsStr={orderItemsStr} 
  //       scOrderId={scOrderId}
  //     />
      
  //   ) 
  // } 
	// if (step === 4){
  //   return(
      
  //     <CartItemStep4 
  //       setStep={setStep}
  //       inputs={inputs}
  //       setInputs={setInputs}
  //       onChangeForField={onChangeForField}
  //       handleSubmit={handleSubmit}
  //       handleChange={handleChange}
  //       handleInvalid={handleInvalid}
  //       fieldErrors={fieldErrors}

  //       isCon={isCon}
  //       setIsCon={setIsCon}
  //       shipPrice={shipPrice}
  //       setShipPrice={setShipPrice}
  //       shipType={shipType}
  //       setShipType={setShipType}
  //       paymentWay={paymentWay}
  //       setPaymentWay={setPaymentWay}
  //       country={country}
  //       setCountry={setCountry}
  //       township={township}
  //       setTownship={setTownship}
  //       seletedConCity={seletedConCity}
  //       setSeletedConCity={setSeletedConCity}
  //       seletedConStore={seletedConStore}
  //       setSeletedConStore={setSeletedConStore}
  //       selectedConAddress={selectedConAddress}
  //       setSeletedConAddress={setSeletedConAddress}
  //       sum={sum}
  //       amountSum={amountSum}
  //       addOrderToSever={addOrderToSever}
  //       orderItemsStr={orderItemsStr}
  //       scOrderId={scOrderId}
  //     />
      
  //   ) 
  // } 

}

export default CartItem
