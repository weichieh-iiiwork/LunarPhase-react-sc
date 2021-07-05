import React, {useEffect, useState} from 'react'
import sevenCity from '../../../../../data/711/711.json'
// 711.json
// { "xx縣":[{store1},{store2}],"XX市":[{store1},{store2}] }



function SelCon() {
    const [seletedConCity, setSeletedConCity] = useState('')
    const [seletedConStore, setSeletedConStore] = useState('')
    // let sevenStores = await import(`../../../../../data/711/${seletedConCity}.json`)
    
    let sevenStores = sevenCity[seletedConCity];
    useEffect(() => {
      console.log('seletedConCity',seletedConCity)
        console.log('sevenCity',sevenCity)
        console.log('sevenStores',sevenStores)
      }, [sevenStores])
    
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
}

export default SelCon
