import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

import ScLabel from '../ScLabel'
import ScItemChecked from './ScItemChecked'
import ShipSel from './ShipSel'
import ScPriceRowCheck from './ScPriceRowCheck'

function ScContent2(props) {
  // const searchParams = new URLSearchParams(
  //   props.location.search
  // )
  // const searchParamsStep = searchParams.get('step')
  // const [scStep, setScStep] = useState('1')

  // useEffect(() => {
  //   if(parseInt(searchParamsStep)>=1 && parseInt(searchParamsStep)<=4){
  //     const step = searchParamsStep
  //     setScStep(step)
  //   }

  // },[])

  return (
    <>
      {/*  bar  */}
      <div className="d-flex select-bar align-items-center"></div>
      <div className="sc-Wrap d-flex flex-column justify-content-around">
        <ScItemChecked />
        <ShipSel />
        <ScPriceRowCheck />
      </div>
    </>
  )
}

export default ScContent2
