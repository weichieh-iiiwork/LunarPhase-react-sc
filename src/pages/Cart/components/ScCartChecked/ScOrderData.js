import React, { useState, useEffect } from 'react'

function ScOrderData() {
  return (
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
}

export default ScOrderData
