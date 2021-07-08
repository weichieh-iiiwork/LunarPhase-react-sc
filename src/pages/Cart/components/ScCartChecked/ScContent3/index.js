import React, {useEffect, useState} from 'react'
import sevenCity from '../../../../../data/711/711.json'
import ZipCode from './ZipCode'
import Credit from './Credit'

// 711.json
// { "xx縣":[{store1},{store2}],"XX市":[{store1},{store2}] }

function ScContent3(props) {
  const {
    inputs, onChangeForField,
    handleSubmit,handleChange,handleInvalid,fieldErrors,
    isCon,
    paymentWay, setPaymentWay,
    selectedConAddress, setSeletedConAddress,
    country, setCountry, township, setTownship,
  } = props

  const [cardNum, setCardNum] = useState('')
  const [cardName, setCardName] = useState('')
  const [cardDate, setCardDate] = useState('')
  const [cardCode, setCardCode] = useState('')

  // let sevenStores = sevenCity[seletedConCity];
  let sevenStores = sevenCity[inputs.conCity];
  
  // value={`{"store":"${store.POIName}店", "address":"${store.Address}"} `}
  const addData = (e) => {
    setSeletedConAddress(e.target.options[e.target.selectedIndex].getAttribute('data-address'))

  }

  const SelCon = (
    <>
      {/* 選擇取貨超商 */}
      <div className="pb-2 mb-3 mt-5 titleDivider">
        <div className="scTitle col-5">選擇取貨超商</div>
      </div>
      <div className="d-flex">
        <div className="col-3 d-flex flex-column">
          <select className="scSelect sc-contentFont ml-5 my-3 w-75" name="conType" 
            value={inputs.conType}
            onChange={onChangeForField }
            // onFocus={handleSubmit}
            // onClick={}
            >  
            <option value="-1">選擇超商</option>
            <option value="711">7-11</option>
            <option value="全家">全家</option>
            <option value="OK">OK</option>
          </select>

          <select className="scSelect sc-contentFont ml-5 my-3 w-75" name="conCity" 
            value={inputs.conCity}
            onChange={onChangeForField }
            // onFocus={handleSubmit}
                  >  
            <option value="-1">選擇縣市</option>
            {/* key直接用city是因為只要unique就好 */}
            {inputs.conType && Object.keys(sevenCity).map(city => {
                return(<option key={city} value={city}>{city}</option>)
            })}

          </select>
          
          <select className="scSelect sc-contentFont ml-5 my-3 w-75" name="conStore" 
            value={inputs.conStore}
            onChange={onChangeForField}
            onClick={addData}
            
            >
            <option value="-1">選擇門市</option>
            { 
              inputs.conCity &&
              sevenStores.map((store,index)=>{           
                return(<option key={index} value={`${store.POIName}門市`} data-address={store.Address}>{store.POIName}店</option>) 
            })}
          </select>
        </div>
        <div className="col-3 d-flex align-items-center justify-content-center ml-5">
        {(inputs.conType==="711") ? <img className="w-75" src="/img/Cart/711_logo.svg" alt="" /> : ""}
        {(inputs.conType==="全家") ? <img className="w-75" src="/img/Cart/family_logo.svg" alt="" /> : ""}
          {/* <img className="w-75" src="/img/Cart/711_logo.svg" alt="" /> */}
          {/* <img className="w-75" src="/img/Cart/family_logo.svg" alt="" /> */}
          
        </div>
        <div className="col-6 d-flex flex-column justify-content-center">
        {(inputs.conType && inputs.conCity && inputs.conStore) ? 
          
          (<>
            <div className="sc-contentFont sc-conFontTitle">{inputs.conType}</div>
          <div className="sc-contentFont sc-conFontTitle">{inputs.conStore}</div>
          <div className="sc-contentFont sc-conFont">{selectedConAddress}</div>
          </>)

          
          : ""
        }
        </div>
      </div>
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
            onChange={onChangeForField}
            placeholder="地址"
            // autoFocus
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
        <div className="form-group">
          <label className="sc-inputLabel" htmlFor="inputScname">姓名：</label>
          <input
            className={`scInput w-25 mb-4 form-control ${handleInvalid('scname')}`}
            type="text"
            id="inputScname"
            name="scname"
            value={inputs.scname}
            onChange={onChangeForField}
            placeholder="姓名"
            required
            aria-describedby="scnameHelp"
            // autoFocus="true"
          />
          <div className="valid-feedback">您的尊名有如天仙下凡，音容動人</div>
          <div className="invalid-feedback">要記得填姓名喔</div>
        </div>
        <div className="form-group">
        <label className="sc-inputLabel">連絡電話：</label>
          <input
            className={`scInput w-25 mb-4 form-control ${handleInvalid('phone')}`}
            type="text"
            name="phone"
            value={inputs.phone}
            onChange={onChangeForField}
            placeholder="聯絡電話"
            required
            // autoFocus="true"
          />
          <div className="valid-feedback">您的尊名有如天仙下凡，音容動人</div>
          <div className="invalid-feedback">要記得填電話喔</div>
        </div>
        
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