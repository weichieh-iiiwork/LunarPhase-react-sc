import React from 'react'

function SelPayment() {
  return (
    <>
      {/* 付款方式 */}
      <div className="pb-2 mb-3 mt-5 titleDivider">
        <div className="scTitle col-5">付款方式</div>
      </div>
      <div className="d-flex">
        <div className="d-flex align-items-center justify-content-start my-2">
          <div className="myRadio ml-5" />
          <div className="sc-contentFont mb-0 ml-3">貨到付款</div>
        </div>
        <div className="d-flex align-items-center justify-content-start my-2">
          <div className="myRadio ml-5" />
          <div className="sc-contentFont mb-0 ml-3">信用卡/金融卡</div>
        </div>
        <div className="d-flex align-items-center justify-content-start my-2">
          <div className="myRadio ml-5" />
          <div className="sc-contentFont mb-0 ml-3">銀行轉帳</div>
        </div>
      </div>
    </>
  )
}

export default SelPayment
