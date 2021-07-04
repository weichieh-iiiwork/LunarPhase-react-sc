import React from 'react'

function ScItemChecked(props) {
  const {isHidden, toggleIsHidden, orderItemsStr, amountSum, sum} = props

  // `id`, `orderId`, `orderItemsId`, `checkPrice`, `checkQty`, `checkSubtotal`, `created_at`, `updated_at`
  async function addOrderToSever(e) {
    // e.preventDefault()
    const orderId = +new Date()
    let data = {
      orderItems: []
    }
     for (let item of orderItemsStr) {
       const tempObj = {
        orderId: orderId,
        orderItemsId: item.id,
        checkPrice: item.price,
        checkQty: item.amount,
        checkSubtotal: item.price*item.amount,
       }
       data.orderItems.push(tempObj)
     }
    //  `orderId`, `username`, `orderPrice`, `paymentTypeId`, `created_at`, `updated_at`
     data.orderInfo = {
      orderId: orderId,
      username: 'jessica',
      orderPrice: sum(orderItemsStr),
      paymentTypeId: 5,
     }

  
    // 連接的伺服器資料網址
    const url = 'http://localhost:5500/cart/product/order/add'
  
    // 注意資料格式要設定，伺服器才知道是json格式
    //  轉成json檔傳到伺服器
    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    console.log('JSON',JSON.stringify(data))
    // console.log('JSON parse',JSON.parse(JSON.stringify(data)).orderItems)
  
    const response = await fetch(request)
    const dataRes = await response.json()
  
    console.log('伺服器回傳的json資料', dataRes)
  
  
  }
  

  const displayItems = (
    <>
    {orderItemsStr.map((item, index)=>{
      return (
        <div key={item.id} className="dropdownItem my-2 d-flex align-items-center py-3">
          <div className="col-5 d-flex align-items-center sc-nameFont">
            <div className="itemPic-sm mr-3" />
            <div>{item.name}</div>
          </div>
          <div className="col-1 sc-priceFont">{item.amount}</div>
          <div className="col-2 sc-priceFont">$ {item.price}</div>
          <div className="col-2 sc-priceFont">$ {item.amount * item.price}</div>
          <div className="col-2 sc-priceFont">商品詳細頁</div>
        </div>
      )
    })}
    </>
  )
  const displayText = (
    <>
      <div className="dropdownBtnPanel d-flex justify-content-end align-items-center mt-2 ml-auto"
      onClick={()=>{toggleIsHidden()}}>
        <div className="sc-describeFont mx-3">
          訂單金額(<span>{amountSum(orderItemsStr)}</span> 件商品)
        </div>
        <div className="sc-describePriceFont mx-4">NT{sum(orderItemsStr)}</div>
        <img
          id="dropdownBtn"
          // className="icon18px dropdownIcon"
          className={`icon18px dropdownIcon ${isHidden ? '' : 'down'}`}
          src="/../img/Cart/dropdownBtn.svg"
          alt=""
        />
      </div>
    </>
  )

 
  return (
    <>
      {/* 訂單商品 */}
      <button
      onClick={()=>{addOrderToSever()}}
      >模擬加入訂單</button>
      <div className="dropdownItemsTitle d-flex justify-content-between align-items-center pb-2 titleDivider">
        <div className="scTitle col-5">訂單商品</div>
        <div className={`sc-formTitle ${isHidden ? 'hidden' : ''} col-1`}>數量</div>
        <div className={`sc-formTitle ${isHidden ? 'hidden' : ''} col-2`}>單價</div>
        <div className={`sc-formTitle ${isHidden ? 'hidden' : ''} col-2`}>總價</div>
        <div className="col-2" />
      </div>
      <div className={`dropdownItemsPanel ${isHidden ? 'hidden' : ''}`}>
        {displayItems}
      </div>
      {displayText}
      
    </>
  )
}

export default ScItemChecked
