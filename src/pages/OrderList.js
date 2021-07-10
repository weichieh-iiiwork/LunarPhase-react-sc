// import React, { useState, useEffect } from 'react'
// import LunarPhaseHeader from '../components/LunarPhaseHeader'

// function OrderList() {
 
//     async function getOrderListFromServer(){
//         const url = 'http://localhost:5500/orderlist'

//         // 注意資料格式要設定，伺服器才知道是json格式
//         const request = new Request(url, {
//             method: 'GET',
//             headers: new Headers({
//             Accept: 'application/json',
//             'Content-Type': 'application/json',
//             }),
//         })

//         const response = await fetch(request)
//         const data = await response.json()

//     }
    
//     useEffect(() => {
//         getOrderListFromServer()
//       }, [])


//   return (
//     <>
//     <LunarPhaseHeader/>
//     <div className="col-10 mt-5 mx-auto">
//       <h2>訂單查詢</h2>
//       <p></p>
//       <div className="my-2 d-flex align-items-center py-3">
//         <div className="col-5 d-flex align-items-center sc-nameFont">
//           <div className="itemPic-sm mr-3" />
//           <div>名稱</div>
//         </div>
//         <div className="col-1 sc-priceFont">數量</div>
//         <div className="col-2 sc-priceFont">$ 價格</div>
//         <div className="col-2 sc-priceFont">$ 小計</div>
//         <div className="col-2 sc-priceFont">商品詳細頁</div>
//       </div>

//     </div>
//     </>
//   )
// }

// export default OrderList
