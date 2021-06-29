import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

import ScBar from './ScBar'
import ScFormTitle from './ScFormTitle'
import ScItem from './ScItem'


function ScContent1(props) {

  return (
    <>
      <ScBar />
      <ScFormTitle />
      <ScItem />
      
    </>
  )
}

export default ScContent1
