import React, {useEffect, useState} from 'react'
import HomeData from './HomeData'
import CreditData from './CreditData'
import sevenCity from '../../../../../data/711/711.json'
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


  return(
    <>
      {SelCon}
      {SelPayment}
      <HomeData
        isCon={isCon}
        homeUserName={homeUserName}
        setHomeUserName={setHomeUserName}
        homeUserPhone={homeUserPhone}
        setHomeUserPhone={setHomeUserPhone}
        homeUserAddress={homeUserAddress}
        setHomeUserAddress={setHomeUserAddress}
      />
      <CreditData
        cardNum={cardNum}
        setCardNum={setCardNum}
        cardName={cardName}
        setCardName={setCardName}
        cardDate={cardDate}
        setCardDate={setCardDate}
        cardCode={cardCode}
        setCardCode={setCardCode}
      />
    </>
  )
}

export default ScContent3