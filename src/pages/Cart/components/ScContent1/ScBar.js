import React from 'react'

function ScBar() {
  return (
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
}

export default ScBar
