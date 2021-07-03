import React, {useEffect, useState} from 'react'
import city from '../../../../../data/711/宜蘭縣.json'
import allCity from '../../../../../data/711/city.json'

function SelCon() {
    const [seletedConCity, setSeletedConCity] = useState('')
    const [seletedConStore, setSeletedConStore] = useState('')

    useEffect(() => {
        console.log(city.stores[0].POIName)
        console.log(allCity[0])
      }, [])
    

    
  return (
    <>
      {/* 選擇取貨超商 */}
      <div className="pb-2 mb-3 mt-5 titleDivider">
        <div className="scTitle col-5">選擇取貨超商</div>
      </div>
      <div className="d-flex justify-content-start">
        <h5 className="mx-2">711</h5>
        <h5 className="mx-2">全家</h5>
      </div>
      <select className="sc-contentFont ml-5 my-3 w-25" name="conCity" 
        value={seletedConCity}
        onChange={(e) => {
            setSeletedConCity(e.target.value)
              }}>
        <option value="選擇縣市">選擇縣市</option>
        {allCity.map((city,index) => {
            return(<option key={index} value={city}>{city}</option>) 
        })}

      </select>
      <select className="sc-contentFont ml-5 my-3 w-25" name="conStore" 
        value={seletedConStore}
        onChange={(e) => {
            setSeletedConStore(e.target.value)
              }}>
        <option value="0">選擇門市</option>
        {city.stores.map((store,index)=>{
            return(<option key={index} value={store.POIName}>{store.POIName}店</option>) 
        })}
      </select>
    </>
  )
}

export default SelCon
