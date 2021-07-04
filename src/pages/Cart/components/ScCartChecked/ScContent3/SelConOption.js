import { useState } from 'react'
import { countries, townships, postcodes } from '../../../../../data/townships'

function SelConOption() {
  console.log(countries, townships, postcodes)
  // 記錄陣列的索引值，預設值是-1，相當於"請選擇xxx"
  const [country, setCountry] = useState(-1)
  const [township, setTownship] = useState(-1)

  return (
    <>
      <select
        value={country}
        onChange={(e) => {
          // 將字串轉成數字
          setCountry(+e.target.value)
          // 重置township的值
          setTownship(-1)
        }}
        className="sc-contentFont mb-4"
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
        value={township}
        onChange={(e) => {
          // 將字串轉成數字
          setTownship(+e.target.value)
        }}
      >
        <option value="-1">選擇區域</option>
        {country > -1 &&
          townships[country].map((value, index) => (
            <option key={index} value={index}>
              {value}
            </option>
          ))}
      </select>
      
    </>
  )
}

export default SelConOption
