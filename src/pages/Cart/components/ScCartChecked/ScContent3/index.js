import React, {useState} from 'react'
import ConData from './ConData'
import HomeData from './HomeData'
import SelPayment from './SelPayment'
import CreditData from './CreditData'
import SelCon from './SelCon'

function ScCartChecked() {
  // 第三頁會新增顯示出來的區塊
  const [paymentWay, setPaymentWay] = useState("")
  const [conUserName, setConUserName] = useState('')
  const [conUserPhone, setConUserPhone] = useState('')
  const [homeUserName, setHomeUserName] = useState('')
  const [homeUserPhone, setHomeUserPhone] = useState('')
  const [homeUserAddress, setHomeUserAddress] = useState('')

  return(
    <>
      <SelCon/>
      <SelPayment
        paymentWay={paymentWay}
        setPaymentWay={setPaymentWay}
      />
      <ConData
        conUserName={conUserName}
        setConUserName={setConUserName}
        conUserPhone={conUserPhone}
        setConUserPhone={setConUserPhone}
      />
      <HomeData
        homeUserName={homeUserName}
        setHomeUserName={setHomeUserName}
        homeUserPhone={homeUserPhone}
        setHomeUserPhone={setHomeUserPhone}
        homeUserAddress={homeUserAddress}
        setHomeUserAddress={setHomeUserAddress}
      />
      <CreditData/>
    </>
  )
}

export default ScCartChecked