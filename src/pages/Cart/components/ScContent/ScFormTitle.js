import React, { useState, useEffect } from 'react'

function ScFormTitle() {
  return (
    <>
      {/* 列表標題 */}
      <div className="d-flex sc-formTitle bdBottom py-1">
        <div className="col-6 d-flex ">
          <div className="firstTitle">商品項目</div>
        </div>
        <div className="col-2">數量</div>
        <div className="col-2">單價</div>
        <div className="col-2">總價</div>
      </div>
    </>
  )
}

export default ScFormTitle
