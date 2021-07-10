import React, { useState} from 'react'
import { Link } from 'react-router-dom'

function ProductList(props) {
  const [mycart, setMycart] = useState([])
  const [productName, setProductName] = useState('')


  const updateCartToLocalStorage = (item) =>{
    const currentCart = JSON.parse(localStorage.getItem('evcart')) || []
    const index = currentCart.findIndex((v) => v.id === item.id)

    if (index > -1) {
      //currentCart[index].amount++
      setProductName('這個活動已經加過了')

      return
    } else {
      currentCart.push(item)
    }

    localStorage.setItem('evcart', JSON.stringify(currentCart))

    // 設定資料
    setMycart(currentCart)
    setProductName('活動：' + item.name + '已成功加入購物車')

  }

  // const spinner = (
  //   <>
  //     <div className="d-flex justify-content-center">
  //       <div className="spinner-border" role="status">
  //         <span className="sr-only">Loading...</span>
  //       </div>
  //     </div>
  //   </>
  // )

  const message = (
    <>
      <h6>加入購物車訊息:</h6>
      <p>{productName}</p>
      <Link to="/cart/item">
        <button >到購物車step1</button>
      </Link>
      
    </>
  )

  const display = (
    <>
      <div className="card-deck">
        <div className="card">
          <img
            src="https://via.placeholder.com/250x150"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">一起去旅行！</h5>
            <p className="card-text">
            wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
            </p>
            <p className="card-text text-danger">NTD 600元</p>
          </div>
          <div className="card-footer">
            <button
              type="button"
              className="btn btn-success"
              onClick={() => {
                updateCartToLocalStorage({
                  id: 1,
                  name: '一起去旅行！',
                  amount: 1,
                  price: 600,
                })
              }}
            >
              加入購物車
            </button>
          </div>
        </div>
        <div className="card">
          <img
            src="https://via.placeholder.com/250x150"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">布衛生棉工坊</h5>
            <p className="card-text">
            wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
            </p>
            <p className="card-text text-danger">NTD 400元</p>
          </div>
          <div className="card-footer">
            <button
              type="button"
              className="btn btn-success"
              onClick={() => {
                updateCartToLocalStorage({
                  id: 2,
                  name: '布衛生棉工坊',
                  amount: 1,
                  price: 400,
                })
              }}
            >
              加入購物車
            </button>
          </div>
        </div>
        <div className="card">
          <img
            src="https://via.placeholder.com/250x150"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">淨灘顧地球</h5>
            <p className="card-text">
            wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
            </p>
            <p className="card-text text-danger">NTD 900元</p>
          </div>
          <div className="card-footer">
            <button
              type="button"
              className="btn btn-success"
              onClick={() => {
                updateCartToLocalStorage({
                  id: 3,
                  name: '淨灘顧地球',
                  amount: 1,
                  price: 900,
                })
              }}
            >
              加入購物車
            </button>
          </div>
        </div>
      </div>
    </>
  )

  return(
    <>
      {message}
      {display}
    </>
  )
}

export default ProductList