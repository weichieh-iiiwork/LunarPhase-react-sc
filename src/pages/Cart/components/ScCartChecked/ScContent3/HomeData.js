import React, {useEffect} from 'react'
// import disctricts from '../../../../../data/districts.json'

function HomeData(props) {
  const {
    homeUserName,
    setHomeUserName,
    homeUserPhone,
    setHomeUserPhone,
    homeUserAddress,
    setHomeUserAddress,
    isCon,
  } = props

  useEffect(() => {
    console.log(isCon)
    console.log()
  }, [])

  const displayAddress = (
    <>
      <label className="sc-inputLabel">寄送地址：</label>
      <input
        className="w-50 mb-4"
        type="text"
        name="homeUserAddress"
        value={homeUserAddress}
        onChange={(e) => {
          setHomeUserAddress(e.target.value)
        }}
      />
    </>
  )

  return (
    <>
      {/* 收貨人資料 */}
      <div className="pb-2 mb-3 mt-5 titleDivider">
        <div className="scTitle col-5">收貨人資料</div>
      </div>
      <div className="ml-5 d-flex flex-column">
        <label className="sc-inputLabel">姓名：</label>
        <input
          className="w-25 mb-4"
          type="text"
          name="homeUserName"
          value={homeUserName}
          onChange={(e) => {
            setHomeUserName(e.target.value)
          }}
        />
        <label className="sc-inputLabel">連絡電話：</label>
        <input
          className="w-25 mb-4"
          type="text"
          name="homeUserPhone"
          value={homeUserPhone}
          onChange={(e) => {
            setHomeUserPhone(e.target.value)
          }}
        />
        {/* 想透過判斷isCon來顯示地址 */}
        {/* {isCon ? {displayAddress}  : ""} */}
        {displayAddress}
        {/* <div>
          <select className="sc-contentFont" name="homeUserCity" id="">
            <option value>縣市</option>
          </select>
          <select className="sc-contentFont" name="homeUserArea" id="">
            <option value>區域</option>
          </select>
        </div> */}
      </div>
    </>
  )
}

export default HomeData
