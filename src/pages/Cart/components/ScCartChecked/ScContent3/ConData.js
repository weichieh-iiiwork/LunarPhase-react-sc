import React from 'react'

function ConData() {
  return (
    <>
      {/* 取貨人資料 */}
      <div className="pb-2 mb-3 mt-5 titleDivider">
        <div className="scTitle col-5">取貨人資料</div>
      </div>
      <div className="ml-5 d-flex flex-column">
        <label className="sc-inputLabel" htmlFor>
          姓名：
        </label>
        <input className="w-25" type="text" />
        <label className="sc-inputLabel" htmlFor>
          連絡電話：
        </label>
        <input className="w-25" type="text" />
      </div>
    </>
  )
}

export default ConData
