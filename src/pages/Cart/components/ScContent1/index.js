import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

import ScBar from './ScBar'
import ScFormTitle from './ScFormTitle'
import ScItem from './ScItem'
import ScPriceRow from './ScPriceRow'

function ScContent1(props) {
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
      <ScBar />
      <ScFormTitle />
      <ScItem />
      <ScPriceRow />
    </>
  )
}

export default ScContent1
