import React, { useState, useEffect} from 'react'

function ScStepRow() {

  return(
    <>
      {/* 購物車流程 */}
  <div className="scStepRow col-10 px-0 d-flex mx-auto justify-content-center">
    <div className="step">
      <div className="d-flex align-items-center">
        <i className="stepCircle stepActive" />
        <i className="stepLine" />
        <i className="stepArrow right" />
      </div>
      <div className="stepFont">確認購物車</div>
    </div>
    <div className="step">
      <div className="d-flex align-items-center">
        <i className="stepCircle " />
        <i className="stepLine" />
        <i className="stepArrow right" />
      </div>
      <div className="stepFont">物流選擇 </div>
    </div>
    <div className="step">
      <div className="d-flex align-items-center">
        <i className="stepCircle " />
        <i className="stepLine" />
        <i className="stepArrow right" />
      </div>
      <div className="stepFont">填寫資料</div>
    </div>
    <div className="step">
      <div className="d-flex align-items-center">
        <i className="stepCircle " />
      </div>
      <div className="stepFont">完成訂購</div>
    </div>
  </div>
    </>
  )
}

export default ScStepRow