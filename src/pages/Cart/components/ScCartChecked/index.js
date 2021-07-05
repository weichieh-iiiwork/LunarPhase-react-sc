import React, { useState } from 'react'

import ScItemChecked from './ScItemChecked'
import ShipSel from './ShipSel'
import ScPriceRowCheck from './ScPriceRowCheck'
import ScContent3 from './ScContent3'
import ScOrderData from './ScOrderData'

function ScCartChecked(props) {
  const { showContent3, showShipSel, showContent4 } = props
  const [isHidden, setIsHidden] = useState(true) //下拉選單的顯示與否
  const [isCon, setIsCon] = useState(false) //物流是否為便利商店
  const [shipPrice, setShipPrice] = useState(0) //運費
  const [shipType, setShipType] = useState("") //物流方式
  const [paymentWay, setPaymentWay] = useState("") //付款方式
  const [homeUserName, setHomeUserName] = useState('') //收貨人姓名
  const [homeUserPhone, setHomeUserPhone] = useState('') //收貨人電話
  const [homeUserAddress, setHomeUserAddress] = useState('') //收貨地址

  // 從localStorage取出購物車資訊，往子女元件傳遞
  const orderItems = localStorage.getItem('cart')
  const orderItemsStr = JSON.parse(orderItems)

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

  // isHidden的切換函式
  const toggleIsHidden = () => {
    setIsHidden(!isHidden)
  }

  // data格式:{
  // "orderItems":[{購物車第1筆商品},{購物車第2筆商品},...],
  // "orderInfo":{
  //    "orderId":1625385519035,"username":"jessica","orderPrice":2200,"paymentTypeId":5
  //    }
  // }
  // `id`, `orderId`, `orderItemsId`, `checkPrice`, `checkQty`, `checkSubtotal`, `created_at`, `updated_at`
  async function addOrderToSever(e) {
    const orderId = +new Date()
    let data = {
      orderItems: []
    }
     for (let item of orderItemsStr) {
       const tempObj = {
        orderId: orderId,
        orderItemsId: item.id,
        checkPrice: item.price,
        checkQty: item.amount,
        checkSubtotal: item.price*item.amount,
       }
       data.orderItems.push(tempObj)
     }
    //  `orderId`, `username`, `receiverName`, `receiverPhone`, `orderPrice`, `shippingType`, `shippingPrice`, `conAddress`, `homeAddress`, `paymentType`, `created_at`, `updated_at`
     data.orderInfo = {
      orderId:orderId,
      username:'jessica',
      receiverName:homeUserName,
      receiverPhone:homeUserPhone,
      orderPrice: sum(orderItemsStr)+shipPrice,
      shippingType:isCon,
      shippingPrice:shipPrice,
      conAddress:'',
      homeAddress:homeUserAddress,
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
    console.log('JSON',JSON.stringify(data))
    // console.log('JSON parse',JSON.parse(JSON.stringify(data)).orderItems)
  
    const response = await fetch(request)
    const dataRes = await response.json()
  
    console.log('伺服器回傳的json資料', dataRes)
  
  }

  const ScOrderId = (
    <>
      {/* 訂單編號 */}
      <div className="pb-2 mb-3 titleDivider d-flex justify-content-start align-items-center">
        <div className="scTitle col-2">訂單編號</div>
        <div className="sc-nameFont">1155664464</div>
      </div>
    </>
  )

  return (
    <>
      
      <div className="container-fluid">
        <div className="col-10 mx-auto px-0 shadow-sm ">
          {/*  bar  */}
          <div className="d-flex select-bar align-items-center"></div>
          <button
            onClick={()=>{addOrderToSever()}}
            >模擬加入訂單</button>
          <div className="sc-Wrap d-flex flex-column justify-content-around">
            {showContent4 ? ScOrderId : "" }        
            <ScItemChecked
              isHidden={isHidden}
              setIsHidden={setIsHidden}
              toggleIsHidden={toggleIsHidden}
              orderItemsStr={orderItemsStr}
              sum={sum}
              amountSum={amountSum}
            />
            {showShipSel ? 
            <ShipSel 
              setShipPrice={setShipPrice}
              shipPrice={shipPrice} 
              orderItemsStr={orderItemsStr}
              sum={sum}
              isCon={isCon}
              setIsCon={setIsCon}
              shipType={shipType}
              setShipType={setShipType}
            /> 
            : ''}

            {showContent3 ? 
            <ScContent3 
              isCon={isCon}
              paymentWay={paymentWay}
              setPaymentWay={setPaymentWay}
              homeUserName={homeUserName}
              setHomeUserName={setHomeUserName}
              homeUserPhone={homeUserPhone}
              setHomeUserPhone={setHomeUserPhone}
              homeUserAddress={homeUserAddress}
              setHomeUserAddress={setHomeUserAddress}

            /> : ''}
            {showContent4 ? <ScOrderData/> : "" }

            <ScPriceRowCheck
              orderItemsStr={orderItemsStr}
              sum={sum}
              shipPrice={shipPrice}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default ScCartChecked
