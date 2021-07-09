import React from 'react'

function ScLabel(props) {
  return (
    <>
      {/* label */}
      <div className="container-fluid">
        <div className="col-10 mx-auto px-0">
          <div className="myLabelGroup d-flex">
            <div className="labelSquare">
              <div className="lableName">
                <a href="/cart/item">商品</a>
              </div>
              <div className="labelTriangle" />
            </div>
            <div className="labelSquare bgWhite">
              <div className="lableName">
                <a href="/cart/kit">月訂</a>
              </div>
              <div className="labelTriangleWhite" />
            </div>
            <div className="labelSquare bgWhite">
              <div className="lableName">
                <a href="/cart/event">活動</a>
              </div>
              <div className="labelTriangleWhite" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ScLabel
