import React, { useState, useEffect} from 'react'
import ScPriceRow from './ScPriceRow'

function ScItem(props) {
  const [mycart, setMycart] = useState([])

  async function getProductsFromServer(productId){
    // 連接的伺服器資料網址
    const url = 'http://localhost:5500/cart/product'

    // 注意header資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'GET',
      credentials: 'include',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    console.log(data)
    // 設定資料
    setMycart(data)
  }

  
  // 一開始就會開始載入資料
  useEffect(() => {
    getProductsFromServer()
    // console.log(mycart)
  }, [])


  const display = (
    //   為何最外層還是要加上<></>
    // 商品列
      <>
      {mycart.map((item, index) => {
        return (
        <div key={item.itemId} className="itemRow d-flex bdBottom align-items-center position-relative">
            <div className="col-6 d-flex align-items-center">
              <div className="myCheckbox selectOne ml-4" />
              <div className="itemPic ml-5" />
              <div className="sc-nameFont itemName">
                <div className="mb-0">{item.itemName}</div>
              </div>
            </div>
            <div className="d-flex col-2 justify-content-center">
              <div
                className="sc-qtyFont p-2 scBtn scBtnSub"
                // onClick={() => {
                //   if (item.amount === 1) return
                //   updateCartToLocalStorage(item, false)
                // }}
              >
                -
              </div>
              <div className="sc-qtyFont p-2">{item.quantity}</div>
              <div
                className="sc-qtyFont p-2 scBtn scBtnAdd"
                // onClick={() => updateCartToLocalStorage(item, true)}
              >
                +
              </div>
            </div>
            <div className="sc-priceFont col-2">{item.itemPrice}</div>
            <div className="sc-priceFont col-2">{item.quantity * item.itemPrice}</div>
            <div className="delOne position-absolute"
                  // onClick={()=>{delItem(item)}}
                  >
              <i className="fas fa-times p-3 scBtn " />
            </div>
        </div>
        )
      })}
      </>
  )


  return(
    <>
    {/* {dataLoading ? loading : display} */}
    { display}
    <ScPriceRow
      mycart={mycart} />
    </>
  )
}

export default ScItem