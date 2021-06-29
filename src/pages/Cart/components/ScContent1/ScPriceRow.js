import React, { useState, useEffect } from 'react'


function ScPriceRow(props) {
  const { mycartDisplay } = props

  // 計算總價用的函式
  const sum = (items) => {
    let total = 0
    for (let i = 0; i < items.length; i++) {
      total += items[i].amount * items[i].price
    }
    return total
  }
  return (
    <>
      {/* 總金額列 */}
      <div className="w-100 priceRow px-0">
        <div className=" col-10 bdBottom d-flex flex-column align-items-center py-5 mx-auto">
          <div className="w-100 totalQtyFont my-2 px-0 py-3 bdBottom">
            共<span>3</span>件商品
          </div>
          <div className="w-100 d-flex jus justify-content-end my-2 px-0">
            <div className="totalPriceFont col-3 px-0">總計</div>
            <div className="totalPriceFont-med col-3 px-0">
              NT<span>{sum(mycartDisplay)}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ScPriceRow
