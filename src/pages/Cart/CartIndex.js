import React, { useState, useEffect } from 'react'
import ScStepRow from './components/ScStepRow'
import ScContent from './components/ScContent'
import BgMountain from './components/BgMountain'
import ScBtn from './components/ScBtn'

function CartIndex() {
  return (
    <>
      <BgMountain/>
      <div className="container-fluid">
        <ScStepRow />
        {/*-------------- 第一頁 --------------*/}
        <ScContent />
        <ScBtn/>
        
      </div>
    </>
  )
}

export default CartIndex
