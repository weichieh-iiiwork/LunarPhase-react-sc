import React, { useState, useEffect } from 'react'

function ScAd() {
  return (
    <>
      <div className="col-10 mx-auto mb-5 ">
        <div className="sc-adRow position-relative d-flex flex-column justify-content-start ">
          <div className="h5-tc ml-5 pl-5 py-4">你可能會喜歡</div>
          <div className="d-flex  justify-content-center align-items-center ">
            <div className="hotTag position-absolute d-flex align-items-center ">
              <div className="hotTagTitle ">HOT</div>
              <img className="w-100" src="/img/Cart/ribbon-silhouette.svg" alt="" />
            </div>
            <div className="ad-arrow">
              <img className="w-100" src="/img/Cart/arrowLeft.svg" alt="" />
            </div>
            <div className="itemPic mx-2">
              <img className="w-100" src="/img/Product/mc01-00.jpg" alt=""/>
            </div>
            <div className="itemPic mx-2">
              <img className="w-100" src="/img/Product/mc02-00.jpg" alt=""/>
            </div>
            <div className="itemPic mx-2">
              <img className="w-100" src="/img/Product/pt01-00.jpg" alt=""/>
            </div>
            <div className="itemPic mx-2">
              <img className="w-100" src="/img/Product/tp01-00.jpg" alt=""/>
            </div>
            <div className="ad-arrow">
              <img className="w-100" src="/img/Cart/arrowRight.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ScAd
