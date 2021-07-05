import React from 'react'

import ScFormTitle from './ScFormTitle'
import ScItem from './ScItem'

function ScCart(props) {
  const ScBar = (
    <>
      {/* 全選bar */}
      <div className="d-flex select-bar align-items-center bdBottom">
        {/* <input class="myCheckbox ml-3" type="radio" name="selectAll" id=""> */}
        <div id="selectAll" className="myCheckbox selectAll ml-4 mr-5" />
        <div className="sc-contentFont ml-3">全選</div>
        <i className="fas fa-trash ml-auto p-3 scBtn" />
      </div>
    </>
  )


  return (
    <>
      <div className="container-fluid">
        <div className="col-10 mx-auto px-0 shadow-sm ">
          {ScBar}
          <ScFormTitle />
          <ScItem />
        </div>
      </div>
    </>
  )
}

export default ScCart
