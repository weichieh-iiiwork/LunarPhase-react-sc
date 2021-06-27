import React, { useState, useEffect } from 'react'

function ScItemChecked() {
  return (
    <>
      {/* 訂單商品 */}
      <div className="dropdownItemsTitle d-flex justify-content-between align-items-center pb-2 titleDivider">
        <div className="scTitle col-5">訂單商品</div>
        <div className="sc-formTitle hidden col-1">數量</div>
        <div className="sc-formTitle hidden col-2">單價</div>
        <div className="sc-formTitle hidden col-2">總價</div>
        <div className="col-2" />
      </div>
      <div className="dropdownItemsPanel">
        <div className="dropdownItem my-2 d-flex align-items-center py-3">
          <div className="col-5 d-flex align-items-center sc-nameFont">
            <div className="itemPic-sm mr-3" />
            <div>弦月柔棉 日用薄型衛生棉 15片</div>
          </div>
          <div className="col-1 sc-priceFont">1</div>
          <div className="col-2 sc-priceFont">$ 600</div>
          <div className="col-2 sc-priceFont">$ 600</div>
          <div className="col-2 sc-priceFont">商品詳細頁</div>
        </div>
        <div className="dropdownItem my-2 d-flex align-items-center py-3">
          <div className="col-5 d-flex align-items-center sc-nameFont">
            <div className="itemPic-sm mr-3" />
            <div>弦月柔棉 日用薄型衛生棉 15片</div>
          </div>
          <div className="col-1 sc-priceFont">1</div>
          <div className="col-2 sc-priceFont">$ 600</div>
          <div className="col-2 sc-priceFont">$ 600</div>
          <div className="col-2 sc-priceFont">商品詳細頁</div>
        </div>
      </div>
      <div className="dropdownItems d-flex justify-content-end align-items-center mt-2 ml-auto">
        <div className="sc-describeFont mx-3">
          訂單金額(<span>41</span> 件商品)
        </div>
        <div className="sc-describePriceFont mx-4">NT 12,000</div>
        <img
          id="dropdownBtn"
          className="icon18px dropdownIcon"
          src="/../img/Cart/dropdownBtn.svg"
          alt=""
        />
      </div>
    </>
  )
}

export default ScItemChecked
