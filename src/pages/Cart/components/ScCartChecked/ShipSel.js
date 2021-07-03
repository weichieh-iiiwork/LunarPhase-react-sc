import React from 'react'

function ShipSel(props) {
  const {setShipPrice, orderItemsStr, sum} = props
  // const priceCon = (totalPrice) =>{
  //   if(totalPrice<900) {
  //     return 60
  //   } else {
  //     return 0
  //   }
  // }
  // const priceHome = (totalPrice) =>{
  //   if(totalPrice<900) {
  //     return 120
  //   } else {
  //     return 0
  //   }
  // }

  return (
    <>
      {/* 選擇物流方式 */}
      <div className="pb-2 mb-3 mt-5 titleDivider">
        <div className="scTitle col-5">選擇物流方式</div>
      </div>
      <div className="d-flex align-items-center justify-content-start my-2">
        <input type="radio" className="ml-5" name="shipWay"
          value="便利商店"
          onChange={(e)=>{
            setShipPrice(60)
            localStorage.setItem('cartShip', JSON.stringify(e.target.value))
          }}
          checked={JSON.parse(localStorage.getItem('cartShip'))==="便利商店"}
        />
        <label className="sc-contentFont mb-0 ml-3" >
          便利商店(未滿900元，運費60元)
        </label>
      </div>
      <div className="d-flex align-items-center justify-content-start my-2">
        <input type="radio" className="ml-5" name="shipWay"
          value="宅配"
          onChange={(e)=>{
            setShipPrice(120)
            localStorage.setItem('cartShip', JSON.stringify(e.target.value))
            }}
          checked={JSON.parse(localStorage.getItem('cartShip'))==="宅配"}
        />
        <label className="sc-contentFont mb-0 ml-3" >
          宅配(未滿900元，運費120元)
        </label>
      </div>
    </>
  )
}

export default ShipSel
