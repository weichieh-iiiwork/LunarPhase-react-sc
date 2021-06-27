import React, { useState, useEffect } from 'react'

function ScLabel() {
  return (
    <>
      {/* label */}
      <div className="col-10 mx-auto px-0">
        <div className="myLabelGroup d-flex">
          <div className="labelSquare">
            <div className="lableName">商品</div>
            <div className="labelTriangle" />
          </div>
          <div className="labelSquare bgWhite">
            <div className="lableName">訂閱</div>
            <div className="labelTriangleWhite" />
          </div>
          <div className="labelSquare bgWhite">
            <div className="lableName">活動</div>
            <div className="labelTriangleWhite" />
          </div>
        </div>
      </div>
    </>
  )
}

export default ScLabel
