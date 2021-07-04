import React, { useEffect } from 'react'

function ShipSel(props) {
  const {
    orderItemsStr,
    sum,
    shipPrice,
    setShipPrice,
    isCon,
    setIsCon,
  } = props
  let totalPrice = sum(orderItemsStr)

  const shipPriceCalc = (price) => {
    if (isCon) {
      if (price < 900) {
        return 60
      } else {
        return 0
      }
    } 
    else {
      if (price < 900) {
        return 120
      } else {
        return 0
      }
    } 
  }

  const display = (
    <>
      {/* 選擇物流方式 */}
      <div className="pb-2 mb-3 mt-5 titleDivider">
        <div className="scTitle col-5">選擇物流方式</div>
      </div>
      <div className="d-flex align-items-center justify-content-start my-2">
        <input
          type="radio"
          className="ml-5"
          name="shipWay"
          value="便利商店"
          onChange={(e) => {
            setShipPrice(shipPriceCalc(totalPrice))
            setIsCon(true)
            localStorage.setItem(
              'cartShipPrice',
              JSON.stringify(shipPriceCalc(totalPrice))
            )
            localStorage.setItem('cartShip', JSON.stringify(e.target.value))
          }}
          checked={isCon}
        />
        <label className="sc-contentFont mb-0 ml-3">
          便利商店(未滿900元，運費60元)
        </label>
      </div>
      <div className="d-flex align-items-center justify-content-start my-2">
        <input
          type="radio"
          className="ml-5"
          name="shipWay"
          value="宅配"
          onChange={(e) => {
            setShipPrice(shipPriceCalc(totalPrice))
            setIsCon(false)
            localStorage.setItem(
              'cartShipPrice',
              JSON.stringify(shipPriceCalc(totalPrice))
            )
            localStorage.setItem('cartShip', JSON.stringify(e.target.value))
          }}
          checked={!isCon}
        />
        <label className="sc-contentFont mb-0 ml-3">
          宅配(未滿900元，運費120元)
        </label>
      </div>
    </>
  ) 

  useEffect(() => {
    // console.log(isCon, totalPrice, shipPrice)
  }, [])

  return <>
    {display}
  </>
}

export default ShipSel
