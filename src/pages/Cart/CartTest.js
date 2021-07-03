import React, { useState, useEffect } from 'react'
import LunarPhaseHeader from '../../components/LunarPhaseHeader'
import ScStepRow from './components/ScStepRow'
import ScLabel from './components/ScLabel'
import ScBtn from './components/ScBtn'
import ScBar from './components/ScCart/ScBar'
import ScFormTitle from './components/ScCart/ScFormTitle'
import ScPriceRow from './components/ScCart/ScPriceRow'

function CartTest() {
  const [mycart, setMycart] = useState([])
  const [dataLoading, setDataLoading] = useState(false)
  const [mycartDisplay, setMycartDisplay] = useState([])

  function getCartFromLocalStorage() {
    // 開啟載入的指示圖示
    setDataLoading(true)

    const newCart = localStorage.getItem('cart') || '[]'

    console.log(JSON.parse(newCart))

    setMycart(JSON.parse(newCart))
  }

  useEffect(() => {
    getCartFromLocalStorage()
  }, [])

  // 每次mycart資料有改變，1秒後關閉載入指示
  // componentDidUpdate
  useEffect(() => {
    setTimeout(() => setDataLoading(false), 1000)

    // mycartDisplay運算
    let newMycartDisplay = []

    //尋找mycartDisplay
    for (let i = 0; i < mycart.length; i++) {
      //尋找mycartDisplay中有沒有此mycart[i].id
      //有找到會返回陣列成員的索引值
      //沒找到會返回-1
      const index = newMycartDisplay.findIndex(
        (value) => value.id === mycart[i].id
      )
      //有的話就數量+1
      if (index !== -1) {
        //每次只有加1個數量
        //newMycartDisplay[index].amount++
        //假設是加數量的
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

  // 計算總價用的函式
  // const sum = (items) => {
  //   let total = 0
  //   for (let i = 0; i < items.length; i++) {
  //     total += items[i].amount * items[i].price
  //   }
  //   return total
  // }

  function resetLocalStorage(){
    setMycart ("")
    localStorage.removeItem('cart')

    }

  const loading = (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  )

  const display = (
    //   為何最外層還是要加上<></>
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
            <div className="delOne position-absolute">
              <i className="fas fa-times p-3 scBtn " />
            </div>
        </div>
        )
      })}
      </>
  )

  return (
    <>
      <LunarPhaseHeader />
      <div className="container-fluid">
        <ScStepRow step={1} />
      </div>
      <button
      onClick={()=>{resetLocalStorage()}}
      >建立訂單</button>
      <ScLabel />
      <div className="col-10 mx-auto px-0 shadow-sm ">
        <ScBar />
        <ScFormTitle />
        {dataLoading ? loading : display}
        <ScPriceRow />
      </div>
      <ScBtn
        prevUrl={'/cart/item/step1'}
        nextUrl={'/cart/item/step2'}
        showStep1={false}
      />
    </>
  )
}

export default CartTest
