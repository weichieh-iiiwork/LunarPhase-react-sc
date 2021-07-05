import React, {useEffect, useState} from 'react'
import sevenCity from '../../../../../data/711/711.json'
import ZipCode from './ZipCode'
// 711.json
// { "xx縣":[{store1},{store2}],"XX市":[{store1},{store2}] }

function ScContent3(props) {
  const {
    isCon,
    paymentWay, setPaymentWay,
    homeUserName, setHomeUserName,
    homeUserPhone, setHomeUserPhone,
    homeUserAddress, setHomeUserAddress,
  } = props

  const [cardNum, setCardNum] = useState('')
  const [cardName, setCardName] = useState('')
  const [cardDate, setCardDate] = useState('')
  const [cardCode, setCardCode] = useState('')
  const [seletedConCity, setSeletedConCity] = useState('')
  const [seletedConStore, setSeletedConStore] = useState('')

  let sevenStores = sevenCity[seletedConCity];
  // useEffect(() => {
  //   console.log('seletedConCity',seletedConCity)
  //     console.log('sevenCity',sevenCity)
  //     console.log('sevenStores',sevenStores)
  //   }, [sevenStores])

  const SelCon = (
    <>
      {/* 選擇取貨超商 */}
      <div className="pb-2 mb-3 mt-5 titleDivider">
        <div className="scTitle col-5">選擇取貨超商</div>
      </div>
      <div className="d-flex justify-content-start">
        <h5 className="mx-2">711</h5>
        <h5 className="mx-2">全家</h5>
      </div>
      <select className="scSelect sc-contentFont ml-5 my-3 w-25" name="conCity" 
        value={seletedConCity}
        onChange={(e) => {
            setSeletedConCity(e.target.value)
              }}>
        <option value="-1">選擇縣市</option>
        {/* key直接用city是因為只要unique就好 */}
        { Object.keys(sevenCity).map(city => {
            return(<option key={city} value={city}>{city}</option>)
        })}

      </select>
      <select className="scSelect sc-contentFont ml-5 my-3 w-25" name="conStore" 
        value={seletedConStore}
        onChange={(e) => {
            setSeletedConStore(e.target.value)
              }}>
        <option value="-1">選擇門市</option>
        { seletedConCity &&
          sevenStores.map((store,index)=>{
            return(<option key={index} value={store.POIName}>{store.POIName}店</option>) 
        })}
      </select>
    </>
  )

  const SelPayment = (
    <>
      {/* 付款方式 */}
      <div className="pb-2 mb-3 mt-5 titleDivider">
        <div className="scTitle col-5">付款方式</div>
      </div>
      <div className="d-flex">
        <div className="d-flex align-items-center justify-content-start my-2">
          <input type="radio" className="scInput ml-5" name="paymentWay"
            value="貨到付款"
            onChange={(e)=>{setPaymentWay(e.target.value)}}
          
          />
          {/* <div className="myRadio ml-5"></div> */}
          <label className="sc-contentFont mb-0 ml-3">貨到付款</label>
        </div>
        <div className="d-flex align-items-center justify-content-start my-2">
          <input type="radio" className="scInput ml-5" name="paymentWay"
            value="信用卡"
            onChange={(e)=>{setPaymentWay(e.target.value)}}
          />
          {/* <div className="myRadio ml-5"></div> */}
          <label className="sc-contentFont mb-0 ml-3">信用卡</label>
        </div>       
      </div>
    </>
  )

  const HomeDataAddress = (
    <>
      <label className="sc-inputLabel">寄送地址：</label>
      <div>
          <ZipCode/>
          <input
            className="scInput w-50 mb-4"
            type="text"
            name="homeUserAddress"
            value={homeUserAddress}
            onChange={(e) => {
              setHomeUserAddress(e.target.value)
            }}
          />
        </div>
    </>
  )
  const HomeData = (
    <>
      {/* 收貨人資料 */}
      <div className="pb-2 mb-3 mt-5 titleDivider">
        <div className="scTitle col-5">收貨人資料</div>
      </div>
      <div className="ml-5 d-flex flex-column">
        <label className="sc-inputLabel">姓名：</label>
        <input
          className="scInput w-25 mb-4"
          type="text"
          name="homeUserName"
          value={homeUserName}
          onChange={(e) => {
            setHomeUserName(e.target.value)
          }}
        />
        <label className="sc-inputLabel">連絡電話：</label>
        <input
          className="scInput w-25 mb-4"
          type="text"
          name="homeUserPhone"
          value={homeUserPhone}
          onChange={(e) => {
            setHomeUserPhone(e.target.value)
          }}
        />
        {/* 想透過判斷isCon來顯示地址 */}
        {/* {isCon ? {HomeDataAddress}  : ""} */}
        {HomeDataAddress}       
      </div>
    </>
  )

const CreditData = (
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
            className="scInput w-100 mb-4"
            type="text"
            name="cardNum"
            value={cardNum}
            onChange={(e) => {
              setCardNum(e.target.value)
            }}
          />
          <label className="sc-inputLabel">持卡人姓名：</label>
          <input
            className="scInput w-100 mb-4"
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
                className="scInput w-100 mb-4"
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
              <input className="scInput w-100 mb-4" type="text" 
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

  return(
    <>
      {SelCon}
      {SelPayment}
      {HomeData}     
      {CreditData}
    </>
  )
}

export default ScContent3