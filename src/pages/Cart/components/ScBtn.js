import React, { useState, useEffect} from 'react'

function ScBtn() {

  return(
    <>
      {/* 按鈕列 */}
      <div className="col-10 mx-auto">
          <div className="d-flex btnRow justify-content-between mb-2">
            <div className="bg-green p-4 fitContent"></div>
            <div className="bg-green p-4 fitContent">
              <button className="btn-soft-green">下一步</button>
            </div>
          </div>
        </div>
    </>
  )
}

export default ScBtn