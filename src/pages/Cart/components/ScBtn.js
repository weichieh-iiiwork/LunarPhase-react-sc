import React from 'react'
import { Link } from 'react-router-dom'

function ScBtn(props) {
  const {prevUrl, nextUrl, showStep1 } = props
  return (
    <>
      {/* 按鈕列 */}
      <div className="col-10 mx-auto">
        <div className="d-flex btnRow justify-content-between mb-2">
          <div className="bg-green p-4 fitContent">
          {showStep1 ? 
            (<Link to={prevUrl}>
              <button className="btn-soft-green">上一步</button>
            </Link>) :
              ""
          }           
          </div>
          <div className="bg-green p-4 fitContent">
            <Link to={nextUrl}>
              <button className="btn-soft-green">下一步</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default ScBtn
