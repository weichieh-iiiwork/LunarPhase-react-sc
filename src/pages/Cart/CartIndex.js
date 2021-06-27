import React, { useState, useEffect } from 'react'
import ScStepRow from './components/ScStepRow'
import ScContent1 from './components/ScContent1'
import BgMountain from './components/BgMountain'
import ScBtn from './components/ScBtn'

function CartIndex() {
  return (
    <>
      <BgMountain/>
      <div className="container-fluid">
        <ScStepRow />
        {/*-------------- 第一頁 --------------*/}
        <ScContent1 />
        <ScBtn/>
        
      </div>
    </>
  )
}

export default CartIndex
