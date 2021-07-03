import React from 'react'
import ConData from './ConData'
import HomeData from './HomeData'
import SelPayment from './SelPayment'
import CreditData from './CreditData'
import SelCon from './SelCon'

function ScCartChecked() {
  // 第三頁會新增顯示出來的區塊

  return(
    <>
      <SelCon/>
      <SelPayment/>
      <ConData/>
      <HomeData/>
      <CreditData/>
    </>
  )
}

export default ScCartChecked