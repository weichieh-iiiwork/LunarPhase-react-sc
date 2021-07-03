import React, {useState} from 'react'

function ConData(props) {
  const {conUserName, setConUserName, conUserPhone, setConUserPhone} = props

  return (
    <>
      {/* 取貨人資料 */}
      <div className="pb-2 mb-3 mt-5 titleDivider">
        <div className="scTitle col-5">取貨人資料</div>
      </div>
      <div className="ml-5 d-flex flex-column">
        <label className="sc-inputLabel">
          姓名：
        </label>
        <input className="w-25 mb-4" type="text" name="conUserName"
          value={conUserName}
          onChange={(e) => {
            setConUserName(e.target.value)
        }}
        />
        <label className="sc-inputLabel">
          連絡電話：
        </label>
        <input className="w-25 mb-4" type="text" name="conUserPhone"
          value={conUserPhone}
          onChange={(e) => {
            setConUserPhone(e.target.value)
          }}
        />
      </div>
    </>
  )
}

export default ConData
