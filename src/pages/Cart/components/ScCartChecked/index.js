import React, { useState } from 'react'

import ScItemChecked from './ScItemChecked'
import ShipSel from './ShipSel'
import ScPriceRowCheck from './ScPriceRowCheck'
import ScContent3 from './ScContent3'

function ScCartChecked(props) {
  const { 
    isCon, setIsCon,
    showContent3, showShipSel, showContent4,
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
    sum,
    amountSum,
    addOrderToSever,
    orderItemsStr
  
  } = props
  const [isHidden, setIsHidden] = useState(true) //下拉選單的顯示與否
  


  // isHidden的切換函式
  const toggleIsHidden = () => {
    setIsHidden(!isHidden)
  }



  const ScOrderId = (
    <>
      {/* 訂單編號 */}
      <div className="pb-2 mb-3 titleDivider d-flex justify-content-start align-items-center">
        <div className="scTitle col-2">訂單編號</div>
        <div className="sc-nameFont">{11111111}</div>
      </div>
    </>
  )

  const ScOrderData = (
    <>
      {/* 收件地址與資料 */}
      <div className="pb-2 mb-3 mt-5 titleDivider">
        <div className="scTitle col-5">收件地址與資料</div>
      </div>
      <div className="ml-5 d-flex mt-3">
        <div className="orderPic">
          <img src="/img/Cart/gift.svg" alt="" />
        </div>
        <div className="sc-contentFont ml-5">
          姓名：黃XX
          <br />
          電話：(+886)09XXXXXXXX
          <br />
          超商：全家
          <br />
          地址：新莊中悅店 新北市新莊區中平路400號1樓
          <br />
        </div>
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
            {showContent4 ? ScOrderData : "" }

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
