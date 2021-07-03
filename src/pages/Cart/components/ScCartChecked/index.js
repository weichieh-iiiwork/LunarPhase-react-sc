import React, { useState } from 'react'

import ScItemChecked from './ScItemChecked'
import ShipSel from './ShipSel'
import ScPriceRowCheck from './ScPriceRowCheck'
import ScContent3 from './ScContent3'
import ScOrderId from './ScOrderId'
import ScOrderData from './ScOrderData'

function ScContent2(props) {
  const { showContent3, showShipSel, showContent4 } = props
  const [isHidden, setIsHidden] = useState(true)
  const [shipPrice, setShipPrice] = useState(0)
  const [isCon, setIsCon] = useState(false)
  const [isHome, setIsHome] = useState(false)

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
      <div className="container-fluid">
        <div className="col-10 mx-auto px-0 shadow-sm ">
          {/*  bar  */}
          <div className="d-flex select-bar align-items-center"></div>
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
              isHome={isHome}
              setIsHome={setIsHome}
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

export default ScContent2
