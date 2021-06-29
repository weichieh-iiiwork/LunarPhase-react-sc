import React, { useState, useEffect } from 'react'

import ScItemChecked from './ScItemChecked'
import ShipSel from './ShipSel'
import ScPriceRowCheck from './ScPriceRowCheck'

function ScContent2() {
  const [isHidden, setIsHidden] = useState(true)
  
  // isHidden的切換函式
  const toggleIsHidden = () => {
    setIsHidden(!isHidden)
  }
  return (
    <>
      {/*  bar  */}
      <div className="d-flex select-bar align-items-center"></div>
      <div className="sc-Wrap d-flex flex-column justify-content-around">
        <ScItemChecked 
          isHidden={isHidden}
          setIsHidden={setIsHidden}
          toggleIsHidden={toggleIsHidden}
        />
        <ShipSel />
        <ScPriceRowCheck />
      </div>
    </>
  )
}

export default ScContent2
