import React, { useState, useEffect } from 'react'

function HomeData() {
  return (
    <>
      {/* 收貨人資料 */}
      <div className="pb-2 mb-3 mt-5 titleDivider">
        <div className="scTitle col-5">收貨人資料</div>
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
        <label className="sc-inputLabel" htmlFor>
          寄送地址：
        </label>
        <div>
          <select className="sc-contentFont" name id>
            <option value>縣市</option>
          </select>
          <select className="sc-contentFont" name id>
            <option value>區域</option>
          </select>
          <input className="w-50" type="text" />
        </div>
      </div>
    </>
  )
}

export default HomeData
