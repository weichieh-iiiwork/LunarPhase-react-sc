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
          <input type="radio" className="ml-5" name="paymentWay"
              // onClick={()=>{}}
          />
          {/* <div className="myRadio ml-5"></div> */}
          <label className="sc-contentFont mb-0 ml-3">貨到付款</label>
        </div>
        <div className="d-flex align-items-center justify-content-start my-2">
          <input type="radio" className="ml-5" name="paymentWay"
              // onClick={()=>{}}
          />
          {/* <div className="myRadio ml-5"></div> */}
          <label className="sc-contentFont mb-0 ml-3">信用卡/金融卡</label>
        </div>
        <div className="d-flex align-items-center justify-content-start my-2">
          <input type="radio" className="ml-5" name="paymentWay"
              // onClick={()=>{}}
          />
          {/* <div className="myRadio ml-5"></div> */}
          <label className="sc-contentFont mb-0 ml-3">銀行轉帳</label>
        </div>
      </div>
    </>
  )
}

export default SelPayment
