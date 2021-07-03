import React, {useEffect}  from 'react'

function ShipSel(props) {
  const {setShipPrice, shipWay, setShipWay} = props
  
  useEffect(() => {
    console.log(shipWay)
  }, [shipWay])

  return (
    <>
      {/* 選擇物流方式 */}
      <div className="pb-2 mb-3 mt-5 titleDivider">
        <div className="scTitle col-5">選擇物流方式</div>
      </div>
      <div className="d-flex align-items-center justify-content-start my-2">
        <input type="radio" className="ml-5" name="shipWay"
          value="便利商店"
          onClick={()=>{
            setShipPrice(60)
            console.log(shipWay)}}
          onChange={(e)=>{setShipWay(e.target.value)}}
        />
        {/* <div className="myRadio ml-5" 
          onClick={()=>{setShipPrice(60)}}
        ></div> */}
        <label className="sc-contentFont mb-0 ml-3" >
          便利商店(未滿900元，運費60元)
        </label>
      </div>
      <div className="d-flex align-items-center justify-content-start my-2">
      {/* bootstrap覆蓋樣式 */}
      {/* <div className="d-flex my-2 custom-control custom-radio">
        <input className="custom-control-input" type="radio" name="selectOne" id=""/>
        <label for="radioBtn2" className="custom-control-label"></label> */}
        <input type="radio" className="ml-5" name="shipWay"
          value="宅配"
          onClick={()=>{setShipPrice(120)}}
          onChange={(e)=>{setShipWay(e.target.value)}}
          checked={`${(shipWay==="宅配") ? 'checked': ""}`}
        />
        {/* <div className="myRadio ml-5" 
          onClick={()=>{setShipPrice(120)}}
        ></div> */}
        <label className="sc-contentFont mb-0 ml-3" >
          宅配(未滿900元，運費120元)
        </label>
      </div>
    </>
  )
}

export default ShipSel
