import React from 'react'

function CreditData() {
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
          <label className="sc-inputLabel" htmlFor>
            信用卡號碼：
          </label>
          <input className="w-100" type="text" />
          <label className="sc-inputLabel" htmlFor>
            持卡人姓名：
          </label>
          <input className="w-100" type="text" />
          <div className="d-flex">
            <div className="d-flex flex-column mr-1">
              <label className="sc-inputLabel" htmlFor>
                有效日期：
              </label>
              <input className="w-100" type="text" />
            </div>
            <div className="d-flex flex-column ml-1">
              <label className="sc-inputLabel" htmlFor>
                安全碼：
              </label>
              <input className="w-100" type="text" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CreditData
