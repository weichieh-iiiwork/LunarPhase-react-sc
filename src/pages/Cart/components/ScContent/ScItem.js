import React, { useState, useEffect} from 'react'

function ScItem() {

  return(
    <>
      {/* 商品列表 */}
      <div className="itemRow d-flex bdBottom align-items-center position-relative">
          {/* <input class="selectOne ml-3" type="checkbox" name="selectOne" id="item2"> */}
          <div className="col-6 d-flex align-items-center">
            <div className="myCheckbox selectOne ml-4" />
            <div className="itemPic ml-5" />
            <div className="sc-nameFont itemName">
              <div className="mb-0">
                弦月柔棉xxx
                <br />
                棉條20個
              </div>
            </div>
          </div>
          <div className="d-flex col-2 justify-content-center">
            <div className="sc-qtyFont p-2 scBtn scBtnSub">-</div>
            <div className="sc-qtyFont p-2">20</div>
            <div className="sc-qtyFont p-2 scBtn scBtnAdd">+</div>
          </div>
          <div className="sc-priceFont col-2">$ 600</div>
          <div className="sc-priceFont col-2">$ 12,000</div>
          <div className="delOne position-absolute">
            <i className="fas fa-times p-3 scBtn " />
          </div>
        </div>
        {/* 商品列表(selected) */}
        <div className="itemRow d-flex bdBottom align-items-center position-relative selected">
          {/* <input class="selectOne ml-3" type="checkbox" name="selectOne" id="item2"> */}
          <div className="col-6 d-flex align-items-center">
            <div className="myCheckbox selectOne ml-4" />
            <div className="itemPic ml-5" />
            <div className="sc-nameFont itemName">
              <div className="mb-0">
                弦月柔棉xxx
                <br />
                日用薄型衛生棉 15片
              </div>
            </div>
          </div>
          <div className="d-flex col-2 justify-content-center">
            <div className="sc-qtyFont p-2 scBtn scBtnSub">-</div>
            <div className="sc-qtyFont p-2">1</div>
            <div className="sc-qtyFont p-2 scBtn scBtnAdd">+</div>
          </div>
          <div className="sc-priceFont col-2">$ 600</div>
          <div className="sc-priceFont col-2">$ 600</div>
          <div className="delOne position-absolute">
            <i className="fas fa-times p-3 scBtn " />
          </div>
        </div>
    </>
  )
}

export default ScItem