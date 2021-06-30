import React, { useState, useEffect} from 'react'
import ScPriceRow from './ScPriceRow'

function ScItem(props) {
  const [mycart, setMycart] = useState([])
  // const [dataLoading, setDataLoading] = useState(false)
  const [mycartDisplay, setMycartDisplay] = useState([])

  function getCartFromLocalStorage() {
    // 開啟載入的指示圖示
    // setDataLoading(true)

    const newCart = localStorage.getItem('cart') || '[]'

    console.log(JSON.parse(newCart))
    setMycart(JSON.parse(newCart))
  }
  useEffect(() => {
    getCartFromLocalStorage()
  }, [])

  // componentDidUpdate
  useEffect(() => {
    // setTimeout(() => setDataLoading(false), 1000)

    // mycartDisplay運算
    let newMycartDisplay = []

    //尋找mycartDisplay
    for (let i = 0; i < mycart.length; i++) {
      //尋找mycartDisplay中有沒有此mycart[i].id
      const index = newMycartDisplay.findIndex(
        (value) => value.id === mycart[i].id
      )
      //有的話就數量+1
      if (index !== -1) {
        newMycartDisplay[index].amount += mycart[i].amount
      } else {
        //沒有的話就把項目加入，數量為1
        const newItem = { ...mycart[i] }
        newMycartDisplay = [...newMycartDisplay, newItem]
      }
    }

    console.log(newMycartDisplay)
    setMycartDisplay(newMycartDisplay)
  }, [mycart])

  // 更新購物車中的商品數量
  const updateCartToLocalStorage = (item, isAdded = true) => {
    console.log(item, isAdded)
    const currentCart = JSON.parse(localStorage.getItem('cart')) || []

    // find if the product in the localstorage with its id
    const index = currentCart.findIndex((v) => v.id === item.id)

    console.log('index', index)
    // found: index! == -1
    if (index > -1) {
      isAdded ? currentCart[index].amount++ : currentCart[index].amount--
    }

    localStorage.setItem('cart', JSON.stringify(currentCart))

    // 設定資料
    setMycart(currentCart)
  }

  // 參考ProductList.js中updateCartToLocalStorage概念
  // 製作按下X按鈕執行delItem函式刪除localStorage單筆資料
  const delItem = (item) => {
    // 先複製原有的購物車內容
    const currentCart = JSON.parse(localStorage.getItem('cart')) || []

    // 找尋是否有此筆item.id的對應資料
    const index = currentCart.findIndex((v) => v.id === item.id)
    
    if (index > -1) {
      // 找到的話就透過splice來移除array中的那個物件
      // 再更新至localStorage cart之中並且更新Mycart
      currentCart.splice(index, 1)
      localStorage.setItem('cart', JSON.stringify(currentCart))
      setMycart(currentCart)
    }
  }
  

  // const loading = (
  //   <>
  //     <div className="d-flex justify-content-center">
  //       <div className="spinner-border" role="status">
  //         <span className="sr-only">Loading...</span>
  //       </div>
  //     </div>
  //   </>
  // )

  const display = (
    //   為何最外層還是要加上<></>
    // 商品列
      <>
      {mycartDisplay.map((item, index) => {
        return (
        <div key={item.id} className="itemRow d-flex bdBottom align-items-center position-relative">
            <div className="col-6 d-flex align-items-center">
              <div className="myCheckbox selectOne ml-4" />
              <div className="itemPic ml-5" />
              <div className="sc-nameFont itemName">
                <div className="mb-0">{item.name}</div>
              </div>
            </div>
            <div className="d-flex col-2 justify-content-center">
              <div
                className="sc-qtyFont p-2 scBtn scBtnSub"
                onClick={() => {
                  if (item.amount === 1) return
                  updateCartToLocalStorage(item, false)
                }}
              >
                -
              </div>
              <div className="sc-qtyFont p-2">{item.amount}</div>
              <div
                className="sc-qtyFont p-2 scBtn scBtnAdd"
                onClick={() => updateCartToLocalStorage(item, true)}
              >
                +
              </div>
            </div>
            <div className="sc-priceFont col-2">{item.price}</div>
            <div className="sc-priceFont col-2">{item.amount * item.price}</div>
            <div className="delOne position-absolute"
                  onClick={()=>{delItem(item)}}>
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
      mycartDisplay={mycartDisplay} />
    </>
  )
}

export default ScItem