import React from 'react'

function CreditData(props) {
  const {
    cardNum,
    setCardNum,
    cardName,
    setCardName,
    cardDate,
    setCardDate,
    cardCode,
    setCardCode,
  } = props
  return (
    <>
      {/* 信用卡資料 */}
      <div className="pb-2 mb-3 mt-5 titleDivider">
        <div className="scTitle col-5">收貨人資料</div>
      </div>
      <div className="d-flex">
        <div className="col-6">
          <div className="creditCard mr-4" />
        </div>
        <div className="col-6 d-flex flex-column">
          <label className="sc-inputLabel">信用卡號碼：</label>
          <input
            className="w-100 mb-4"
            type="text"
            name="cardNum"
            value={cardNum}
            onChange={(e) => {
              setCardNum(e.target.value)
            }}
          />
          <label className="sc-inputLabel">持卡人姓名：</label>
          <input
            className="w-100 mb-4"
            type="text"
            name="cardName"
            value={cardName}
            onChange={(e) => {
              setCardName(e.target.value)
            }}
          />
          <div className="d-flex">
            <div className="d-flex flex-column mr-1">
              <label className="sc-inputLabel">有效日期：</label>
              <input
                className="w-100 mb-4"
                type="text"
                name="cardDate"
                value={cardDate}
                onChange={(e) => {
                  setCardDate(e.target.value)
                }}
              />
            </div>
            <div className="d-flex flex-column ml-1">
              <label className="sc-inputLabel">安全碼：</label>
              <input className="w-100 mb-4" type="text" 
                name="cardCode"
                value={cardCode}
                onChange={(e) => {
                  setCardCode(e.target.value)
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CreditData
