import React, {useState} from 'react'
// import ConData from './ConData'
import HomeData from './HomeData'
import SelPayment from './SelPayment'
import CreditData from './CreditData'
import SelCon from './SelCon'

function ScContent3(props) {
  const {
    isCon,
    paymentWay, setPaymentWay,
    // conUserName, setConUserName,
    // conUserPhone, setConUserPhone,
    homeUserName, setHomeUserName,
    homeUserPhone, setHomeUserPhone,
    homeUserAddress, setHomeUserAddress,


  } = props
  // 第三頁會新增顯示出來的區塊
  // const [paymentWay, setPaymentWay] = useState("")
  // // // 想要刪除這個區塊，合併到另一個區塊之中
  // // // const [conUserName, setConUserName] = useState('')
  // // // const [conUserPhone, setConUserPhone] = useState('')
  // const [homeUserName, setHomeUserName] = useState('')
  // const [homeUserPhone, setHomeUserPhone] = useState('')
  // const [homeUserAddress, setHomeUserAddress] = useState('')
  const [cardNum, setCardNum] = useState('')
  const [cardName, setCardName] = useState('')
  const [cardDate, setCardDate] = useState('')
  const [cardCode, setCardCode] = useState('')




  return(
    <>
      <SelCon/>
      <SelPayment
        paymentWay={paymentWay}
        setPaymentWay={setPaymentWay}
      />
      {/* <ConData
        conUserName={conUserName}
        setConUserName={setConUserName}
        conUserPhone={conUserPhone}
        setConUserPhone={setConUserPhone}
      /> */}
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