import React from 'react'

import ScBar from './ScBar'
import ScFormTitle from './ScFormTitle'
import ScItem from './ScItem'

function ScContent1(props) {
  return (
    <>
      <div className="container-fluid">
        <div className="col-10 mx-auto px-0 shadow-sm ">
          <ScBar />
          <ScFormTitle />
          <ScItem />
        </div>
      </div>
    </>
  )
}

export default ScContent1
