import React, { useState, useEffect } from 'react'
import Navbar from '../components/NavBar'
import AdTest from './ScCarousel/AdTest'
import ScAd from './Cart/components/ScAD'
function Login() {
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')
//   const [userData, setUserData] = useState({})
  const [user, setUser] = useState('')
  const [auth, setAuth] = useState('')

  async function loginToSever() {
    const newData = { account, password }

    // 連接的伺服器資料網址
    const url = 'http://localhost:4567/login'

    // 注意資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify(newData),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    console.log(JSON.stringify(newData))

    const response = await fetch(request)
    const data = await response.json()

    console.log('伺服器回傳的json資料', data)

    // 要等驗証過，再設定資料(簡單的直接設定)
    if (data.success){
        alert('登入成功')
        // setUserData(data.data)
        setUser(data.data.userName)
        setAuth(data.success)
        // console.log('data',data)
        // console.log('userData',userData)
        // console.log('userData',userData.userName)
        // console.log('auth',auth)
    } 
    else{
        alert('登入失敗')
        setAuth(data.success)
    } 
  }

  return (
    <>
      <Navbar 
          auth={auth}
          user={user}
      />
      <div className="col-8 mx-auto mt-5">
        <h5>登入頁面</h5>
        <input
          className="scInput"
          type="text"
          size="25"
          placeholder="電子信箱"
          value={account}
          onChange={(e) => {
            setAccount(e.target.value)
          }}
        />
        <input
          className="scInput"
          type="text"
          size="25"
          placeholder="輸入密碼"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />
        <button
          className="btn-soft-green p-tc"
          onClick={() => {
            loginToSever()
          }}
        >
          登入
        </button>
      </div>
      <div className="mt-5"></div>

      <AdTest/>
      <div className="mt-5"></div>
      <ScAd/>
    </>
  )
}

export default Login
