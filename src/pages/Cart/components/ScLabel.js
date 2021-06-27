import React, { useState, useEffect } from 'react'

function ScLabel(props) {

  return (
    <>
      {/* label */}
      <div className="col-10 mx-auto px-0">
        <div className="myLabelGroup d-flex">
          <div className="labelSquare">
            <div className="lableName">
              <a href="/cart/item-cart/step1">商品</a>
            </div>
            <div className="labelTriangle" />
          </div>
          <div className="labelSquare bgWhite">
            <div className="lableName">
              <a href="/cart/order-cart/step1">訂閱</a>
            </div>
            <div className="labelTriangleWhite" />
          </div>
          <div className="labelSquare bgWhite">
            <div className="lableName">
            <a href="/cart/event-cart/step1">活動</a>
            </div>
            <div className="labelTriangleWhite" />
          </div>
        </div>
      </div>
    </>
  )
}

export default ScLabel
