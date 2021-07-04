import React, { useState } from 'react'

import ScItemChecked from './ScItemChecked'
import ShipSel from './ShipSel'
import ScPriceRowCheck from './ScPriceRowCheck'
import ScContent3 from './ScContent3'
import ScOrderId from './ScOrderId'
import ScOrderData from './ScOrderData'

function ScCartChecked(props) {
  const { showContent3, showShipSel, showContent4 } = props
  const [isHidden, setIsHidden] = useState(true) //下拉選單的顯示與否設定
  const [shipPrice, setShipPrice] = useState(0) //設定運費
  const [isCon, setIsCon] = useState(false) //物流是否為便利商店

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

  // `id`, `orderId`, `orderItemsId`, `checkPrice`, `checkQty`, `checkSubtotal`, `created_at`, `updated_at`
  async function addOrderToSever(e) {
    // e.preventDefault()
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
    //  `orderId`, `username`, `orderPrice`, `paymentTypeId`, `created_at`, `updated_at`
     data.orderInfo = {
      orderId: orderId,
      username: 'jessica',
      orderPrice: sum(orderItemsStr),
      paymentTypeId: 5,
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
            {showContent4 ? <ScOrderId/> : "" }        
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
            /> 
            : ''}

            {showContent3 ? <ScContent3 /> : ''}
            {showContent4 ? <ScOrderData/> : "" }

            <ScPriceRowCheck
              orderItemsStr={orderItemsStr}
              sum={sum}
              // shipPrice={shipPrice}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default ScCartChecked
