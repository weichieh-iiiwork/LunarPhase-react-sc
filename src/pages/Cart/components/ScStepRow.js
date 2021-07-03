import React from 'react'

// #10 <i className=`stepCircle ${condition ? 'stepActive' : ''}` />
// #10 <i className=`stepCircle ${this.props.step === 1 ? 'stepActive' : ''}` />

function ScStepRow(props) {
  const { step } = props
  return (
    <>
      {/* 購物車流程 */}
      <div className="container-fluid">
        <div className="scStepRow col-10 px-0 d-flex mx-auto justify-content-center">
          <div className="step">
            <div className="d-flex align-items-center">
              <i className={`stepCircle ${step === 1 ? 'stepActive' : ''}`} />
              <i className="stepLine" />
              <i className="stepArrow right" />
            </div>
            <div className="stepFont">
              <a href="/cart/item/step1">確認購物車</a>
            </div>
          </div>
          <div className="step">
            <div className="d-flex align-items-center">
              <i className={`stepCircle ${step === 2 ? 'stepActive' : ''}`} />
              <i className="stepLine" />
              <i className="stepArrow right" />
            </div>
            <div className="stepFont">
              <a href="/cart/item/step2">物流選擇</a>
            </div>
          </div>
          <div className="step">
            <div className="d-flex align-items-center">
              <i className={`stepCircle ${step === 3 ? 'stepActive' : ''}`} />
              <i className="stepLine" />
              <i className="stepArrow right" />
            </div>
            <div className="stepFont">
              <a href="/cart/item/step3">填寫資料</a>
            </div>
          </div>
          <div className="step">
            <div className="d-flex align-items-center">
              <i className={`stepCircle ${step === 4 ? 'stepActive' : ''}`} />
            </div>
            <div className="stepFont">
              <a href="/cart/item/step4">完成訂購</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ScStepRow
