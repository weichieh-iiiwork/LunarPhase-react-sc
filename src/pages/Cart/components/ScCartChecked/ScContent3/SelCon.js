import React, {useEffect, useState} from 'react'
// import city from '../../../../../data/711/宜蘭縣.json'
import city2Con from '../../../../../data/711/711.json'

function SelCon() {
    const [seletedConCity, setSeletedConCity] = useState('')
    const [seletedConStore, setSeletedConStore] = useState('')

    
    
    // const stores = await import(`../../../../../data/711/${seletedConCity}.json`)
    let stores = city2Con[seletedConCity] ;
    useEffect(() => {
        console.log(city2Con[0])
        console.log('stores',stores)
      }, [stores])
    
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
        { Object.keys(city2Con).map(city => {
            return(<option key={city} value={city}>{city}</option>)
        })}

      </select>
      <select className="scSelect sc-contentFont ml-5 my-3 w-25" name="conStore" 
        value={seletedConStore}
        onChange={(e) => {
            setSeletedConStore(e.target.value)
              }}>
        <option value="-1">選擇門市</option>
        {/* Cannot read property 'map' of undefined */}
        {/* { seletedConCity > -1 &&
          city2Con[seletedConCity].map((store,index)=>{
            return(<option key={index} value={store.POIName}>{store.POIName}店</option>) 
        })} */}
      </select>
    </>
  )
}

export default SelCon
