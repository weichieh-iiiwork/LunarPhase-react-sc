import React, { useState} from 'react'
import { Link } from 'react-router-dom'

function ProductList(props) {
  const [mycart, setMycart] = useState([])
  const [productName, setProductName] = useState('')


  const updateCartToLocalStorage = (item) =>{
    const currentCart = JSON.parse(localStorage.getItem('cart')) || []
    const index = currentCart.findIndex((v) => v.id === item.id)

    if (index > -1) {
      //currentCart[index].amount++
      setProductName('這個商品已經加過了')

      return
    } else {
      currentCart.push(item)
    }

    localStorage.setItem('cart', JSON.stringify(currentCart))

    // 設定資料
    setMycart(currentCart)
    setProductName('產品：' + item.name + '已成功加入購物車')

  }

  // const spinner = (
  //   <>
  //     <div className="d-flex justify-content-center">
  //       <div className="spinner-border" role="status">
  //         <scspan className="sr-only">Loading...</scspan>
  //       </div>
  //     </div>
  //   </>
  // )

  const message = (
    <>
      <h6>加入購物車訊息:</h6>
      <p>{productName}</p>
      <Link to="/cart/test">
        <button >到購物車</button>
      </Link>
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
            <h5 className="card-title">弦月柔棉 日用薄型衛生棉 15片</h5>
            <p className="card-text">
            親膚少刺激嚴選天然無漂白素材6大無添加新升級波紋瞬潔層
            </p>
            <p className="card-text text-danger">NTD 100元</p>
          </div>
          <div className="card-footer">
            <button
              type="button"
              className="btn btn-success"
              onClick={() => {
                updateCartToLocalStorage({
                  id: 2,
                  name: '弦月柔棉 日用薄型衛生棉',
                  amount: 1,
                  price: 100,
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
            <h5 className="card-title">滿月柔棉 夜用加長衛生棉 7片</h5>
            <p className="card-text">
            親膚少刺激嚴選天然無漂白素材6大無添加新升級波紋瞬潔層
            </p>
            <p className="card-text text-danger">NTD 120元</p>
          </div>
          <div className="card-footer">
            <button
              type="button"
              className="btn btn-success"
              onClick={() => {
                updateCartToLocalStorage({
                  id: 9,
                  name: '滿月柔棉 夜用加長衛生棉 7片',
                  amount: 1,
                  price: 120,
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
            <h5 className="card-title">新月衛生棉條 一般型</h5>
            <p className="card-text">
            親膚少刺激嚴選天然無漂白素材6大無添加新升級波紋瞬潔層
            </p>
            <p className="card-text text-danger">NTD 150元</p>
          </div>
          <div className="card-footer">
            <button
              type="button"
              className="btn btn-success"
              onClick={() => {
                updateCartToLocalStorage({
                  id: 15,
                  name: '新月衛生棉條 一般型',
                  amount: 1,
                  price: 150,
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