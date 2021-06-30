import React, { useState, useEffect } from 'react'

import ScItemChecked from './ScItemChecked'
import ShipSel from './ShipSel'
import ScPriceRowCheck from './ScPriceRowCheck'

function ScContent2() {
  const [isHidden, setIsHidden] = useState(true)
  const [shipPrice, setShipPrice] =useState(0)

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
  return (
    <>
      {/*  bar  */}
      <div className="d-flex select-bar align-items-center"></div>
      <div className="sc-Wrap d-flex flex-column justify-content-around">
        <ScItemChecked 
          isHidden={isHidden}
          setIsHidden={setIsHidden}
          toggleIsHidden={toggleIsHidden}
          orderItemsStr={orderItemsStr}
          sum={sum}
          amountSum={amountSum}
        />
        <ShipSel 
          setShipPrice={setShipPrice}
        />
        <ScPriceRowCheck 
          orderItemsStr={orderItemsStr}
          sum={sum}
          shipPrice={shipPrice}
        />
      </div>
    </>
  )
}

export default ScContent2
