import React, {useEffect, useState} from 'react'
import sevenCity from '../../../../../data/711/711.json'
import ZipCode from './ZipCode'
import Credit from './Credit'

// 711.json
// { "xx縣":[{store1},{store2}],"XX市":[{store1},{store2}] }

function ScContent3(props) {
  const {
    inputs, setInputs,onChangeForField,
    isCon,
    paymentWay, setPaymentWay,
    seletedConCity, setSeletedConCity,
    seletedConStore, setSeletedConStore,
    selectedConAddress, setSeletedConAddress,
    country, setCountry, township, setTownship,
  } = props

  const [cardNum, setCardNum] = useState('')
  const [cardName, setCardName] = useState('')
  const [cardDate, setCardDate] = useState('')
  const [cardCode, setCardCode] = useState('')

  let sevenStores = sevenCity[seletedConCity];
  // value={`{"store":"${store.POIName}店", "address":"${store.Address}"} `}

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
          console.log(e.target.getAttribute('data-address'))
            setSeletedConStore(e.target.value)
            setSeletedConAddress(e.target.dataset.address)
              }}>
        <option value="-1">選擇門市</option>
        { 
          seletedConCity &&
          sevenStores.map((store,index)=>{           
            return(<option key={index} value={store.POIName} data-address={store.Address}>{store.POIName}店</option>) 
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
  // 要注意寫法
  const HomeDataAddress = ()=>(
    <>
      <label className="sc-inputLabel">寄送地址：</label>
      <div>
          <ZipCode
            country={country}
            setCountry={setCountry}
            township={township}
            setTownship={setTownship}
          />
          <input
            className="scInput w-50 mb-4"
            type="text"
            name="homeAddress"
            value={inputs.homeAddress}
            onChange={onChangeForField('homeAddress')}
            placeholder="地址"
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
          name="name"
          value={inputs.name}
          onChange={onChangeForField('name')}
          placeholder="姓名"
        />
        <label className="sc-inputLabel">連絡電話：</label>
        <input
          className="scInput w-25 mb-4"
          type="text"
          name="phone"
          value={inputs.phone}
          onChange={onChangeForField('phone')}
          placeholder="聯絡電話"
        />
        {/* 透過判斷isCon來顯示地址 */}
        { !isCon && <HomeDataAddress/> }
      </div>
    </>
  )

 

const CreditData = (
  <>
      {/* 信用卡資料 */}
      <div className="pb-2 mb-3 mt-5 titleDivider">
        <div className="scTitle col-5">信用卡資料</div>
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
      {/* {CreditData} */}
      <Credit/>
    </>
  )
}

export default ScContent3