import React, { useState, useEffect } from 'react'
import ScLabel from './ScLabel'
import ScBar from './ScBar'
import ScFormTitle from './ScFormTitle'
import ScItem from './ScItem'
import ScPriceRow from './ScPriceRow'

function ScContent() {
  return (
    <>
      <ScLabel />
      <div className="col-10 mx-auto px-0 shadow-sm ">
        <ScBar />
        <ScFormTitle />
        <ScItem/>
        <ScPriceRow/>
        
      </div>
    </>
  )
}

export default ScContent
