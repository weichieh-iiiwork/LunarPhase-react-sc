import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import LunarPhaseNavbar from '../../components/LunarPhaseNavbar'
import Breadcrumb from '../../components/Breadcrumb'
import OrLabel from './components/OrLabel'
import Footer from '../../components/Footer'
import DisplayOrderItems from './DisplayOrderItems'
var moment = require('moment') //日期格式化需要引入
const _ = require('lodash')

function DisplayOrder(props) {
  const { cartQty, bmQty } = props

  const [isHidden, setIsHidden] = useState([0,0,0,0,0,0,0,0,0,0]) //下拉選單的顯示與否
  const [orderAll, setOrderAll] = useState([]) //初始資料
  const [order, setOrder] = useState([])

  async function getOrderListFromServer() {
    const url = 'http://localhost:4567/orderlist'

    // 注意資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()

    setOrderAll(data.data)
  }

  useEffect(() => {
    getOrderListFromServer()
  }, [])

  function toggleIsHidden (i) {
    const newHidden = [...isHidden]
    newHidden[i]= newHidden[i] === 1 ? 0 : 1
    setIsHidden(newHidden)
  }
  const ScBar = (
    <>
      {/* bar */}
      <div className="d-flex bmbar align-items-center bdBottom">
        <div className="sc-contentFont ml-3"></div>
      </div>
    </>
  )
  const ScFormTitle = (
    <>
      {/* 列表標題 */}
      <div className="d-flex sc-formTitle bdBottom py-1">
        <div className="col-2">訂購時間</div>
        <div className="col-2">訂單編號</div>
        <div className="col-1">取貨人</div>
        <div className="col-1">金額</div>
        <div className="col-1">付款方式</div>
        <div className="col-1">物流方式</div>
        <div className="col-3">地址</div>
      </div>
    </>
  )
  // async function getOrderFromServer(scOrderId) {
  //   /* get orderid去取訂單資料 */
  //   const url = 'http://localhost:4567/orderlist/' + scOrderId
  //   console.log('scOrderId', scOrderId)

  //   const request = new Request(url, {
  //     method: 'GET',
  //     headers: new Headers({
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     }),
  //   })
  //   const response = await fetch(request)
  //   const dataRes = await response.json()
  //   console.log('訂單dataRes', dataRes)
  //   setOrder(dataRes)

  //   console.log('訂單scOrderId', scOrderId)
  //   // console.log('訂單order', order) //會是空的因為setOrder異步執行
  // }

  // function displayItems(getOrderFromServer, scOrderId) {
  //   getOrderFromServer(scOrderId)
  //   return (
  //     <>
  //       {!_.isEmpty(order) &&
  //         order.map((item, index) => {
  //           return (
  //             <div
  //               key={item.itemId}
  //               className="dropdownItem my-2 d-flex align-items-center py-3"
  //             >
  //               <div className="col-5 d-flex align-items-center sc-nameFont">
  //                 <div className="itemPic-sm mr-3 overflow-hidden">
  //                   <img
  //                     className="h-100"
  //                     src={`/img/Product/${item.itemCoverImg}`}
  //                     alt=""
  //                   />
  //                 </div>
  //                 <div>{item.itemName}</div>
  //               </div>
  //               <div className="col-1 sc-priceFont">{item.checkQty}</div>
  //               <div className="col-2 sc-priceFont">$ {item.checkPrice}</div>
  //               <div className="col-2 sc-priceFont">$ {item.checkSubtotal}</div>
  //               <Link className="col-2" to={`/product-detail/${item.itemId}`}>
  //                 <div className="sc-priceFont">商品詳細頁</div>
  //               </Link>
  //             </div>
  //           )
  //         })}
  //     </>
  //   )
  // }
  const OrderDisplay = () => (
    <>
      { orderAll?.map((v, i) => {
          console.log('hihi')
        return (
          
          <React.Fragment key={v.orderId}>
            <div
              className="d-flex orderDisplay dropdownBtnPanel"
              onClick={() => {
                toggleIsHidden(i)
              }}
            >
              <div className="col-2">
                {moment(v.created_at).format('YYYY-MM-DD')}
              </div>
              <div className="col-2">{v.orderId}</div>
              <div className="col-1">{v.receiverName}</div>
              <div className="col-1">{v.orderPrice}</div>
              <div className="col-1">{v.paymentType}</div>
              <div className="col-1">{v.shippingType}</div>
              <div className="col-3">
                {v.conStore ? v.conStore : v.homeAddress}
              </div>
            </div>
            {/* {console.log(isHidden[i])} */}
            <div className={`dropdownItemsPanel ${isHidden[i] ? 'hidden' : ''}`}>
             <DisplayOrderItems
               scOrderId={v.orderId}
             />
            </div>
          </React.Fragment>
        )
      })}
    </>
  )

  console.log(orderAll)
  
  return (
    <>
      <LunarPhaseNavbar bmQty={bmQty} cartQty={cartQty} />
      <Breadcrumb />
      {/* 背景山 */}
      <div className="bmbgMountainRow container-fluid p-0">
        <div className="bmbgMountain position-absolute">
          <img src="/img/Cart/bgMountain.svg" alt="" />
        </div>
      </div>
      <OrLabel />
      <div className="container-fluid">
        <div className="col-10 mx-auto px-0 shadow-sm ">
          {ScBar}
          {ScFormTitle}
          <OrderDisplay/>
          {/* {OrderDisplay} */}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default DisplayOrder