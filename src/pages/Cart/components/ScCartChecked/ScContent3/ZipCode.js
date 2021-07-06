import { useState } from 'react'
import { countries, townships, postcodes } from '../../../../../data/townships'

function ZipCode(props) {
  const {country, setCountry, township, setTownship}=props
  console.log(countries, townships, postcodes)
  // 記錄陣列的索引值，預設值是-1，相當於"請選擇xxx"
  const [countryId, setCountryId] = useState(-1)
  const [townshipId, setTownshipId] = useState(-1)

  // setCountry(countries[countryId])
  // setTownship(townships[townshipId])
  return (
    <>
    {/* 選單遇到一樣的問題，無法改變選擇後畫面 */}
    {/* value={`{"id":"${index}", "val":"${value}"}`} */}
      <select
        value={countryId}
        onChange={(e) => {
          console.log('countryId',countryId)
          console.log('townshipId',townshipId)
          console.log('countryId類型',typeof(+JSON.parse(e.target.value).id),+JSON.parse(e.target.value).id)
          // 將字串轉成數字
          setCountryId(+e.target.value)
          // 重置township的值
          setTownshipId(-1)
          // setCountry(JSON.parse(e.target.value).val)
        }}
        className="scSelect sc-contentFont mb-4"
        name="homeUserCity"
        >
        <option value="-1">選擇縣市</option>
        {countries.map((value, index) => (
          <option key={index} value={index}>
            {value}
          </option>
        ))}
      </select>
      <select 
        value={townshipId}
        onChange={(e) => {
          // 將字串轉成數字
          setTownshipId(+e.target.value)
          // setTownship(JSON.parse(e.target.value).val)
        }}
        className="scSelect sc-contentFont mb-4" name="homeUserArea" id="">
        <option value="-1">選擇區域</option>
        {countryId > -1 &&
          townships[countryId].map((value, index) => (
            <option key={index} value={index}>
              {value}
            </option>
          ))}
      </select>
      {/* 如果country與township的索引值均大於-1時(也就是都有選的情況下)，呈現postcode */}
      {/* `條件 && 呈現` 是 `if(條件){呈現}` 的簡寫法，只在React JSX中可以使用 */}
      {/* <h3>
        郵遞區號:
        {countryId > -1 && townshipId > -1 && postcodes[countryId][townshipId]}
      </h3> */}
    </>
  )
}

export default ZipCode
