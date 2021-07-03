import React, {useEffect} from 'react'

function ScPriceRowCheck(props) {
  const {orderItemsStr, sum} = props

  let cartShipPrice = JSON.parse(localStorage.getItem('cartShipPrice'))

  // let cartShipPrice
  useEffect(() => {
    // console.log(isCon, isHome, totalPrice, shipPrice)
    let cartShipPrice = JSON.parse(localStorage.getItem('cartShipPrice'))
    return cartShipPrice
  }, [])
  return (
    <>
      {/* 總金額：商品小計 + 運費 */}
      <div className="sc-priceListRow">
        <div className="col-3 d-flex justify-content-between p-0 ml-auto">
          <div className="sc-describeFont">商品總金額:</div>
          <div className="sc-describeFont">
            <span>NT {sum(orderItemsStr)}</span>
          </div>
        </div>
        <div className="col-3 d-flex justify-content-between p-0 ml-auto">
          <div className="sc-describeFont">運費總金額:</div>
          <div className="sc-describeFont">
            <span>NT {cartShipPrice}</span>
          </div>
        </div>
      </div>
      {/* 總金額列 */}
      <div className="w-100 d-flex jus justify-content-end my-2 px-0">
        <div className="totalPriceFont col-3 px-0">總計</div>
        <div className="totalPriceFont-med col-3 px-0">
          NT<span>${sum(orderItemsStr)+cartShipPrice}</span>
        </div>
      </div>
    </>
  )
}

export default ScPriceRowCheck
