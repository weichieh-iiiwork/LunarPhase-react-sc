import React, { useState } from 'react'

function Form() {
  // 養成習慣，先定義有哪些欄位屬性
  const [fields, setFields] = useState({
    username: '',
    email: '',
    password: '',
  })

  // 每個欄位的錯誤訊息
  // 我們把錯誤訊息變成一個狀態
  const [fieldErrors, setFieldErrors] = useState({
    username: '',
    email: '',
    password: '',
  })

  // 處理每個欄位的變動
  const handleFieldChange = (e) => {
    // 更新輸入欄位
    const updatedFields = {
      ...fields,
      [e.target.name]: e.target.value,
    }

    setFields(updatedFields)
  }

  // 處理表單送出
  const handleSubmit = (e) => {
    // 阻擋表單送出預設行為
    e.preventDefault()

    // FormData: 沒有外觀的表單
    const data = new FormData(e.target)

    console.log(data.get('email'))
    console.log(data.get('password'))

    // 利用狀態來得到輸入的值
    console.log(fields)

    // ex. 送出表單資料到伺服器
    // fetch('/api/form-submit-url', {
    //   method: 'POST',
    //   body: data,
    // })
  }

  // form有更動會觸發這個函式
  // onChange 可以偵測使用者正在更動哪個欄位
  // 代表可以先把這個欄位的錯誤訊息先清空
  const handleChange = (e) => {
    console.log('更動欄位：', e.target.name)

    // 該欄位錯誤訊息清空
    const updatedFieldErrors = {
      ...fieldErrors,
      [e.target.name]: '',
    }

    setFieldErrors(updatedFieldErrors)
  }

  // 有錯誤的訊息會觸發在這裡
  const handleInvalid = (e) => {
    e.preventDefault()

    const updatedFieldErrors = {
      ...fieldErrors,
      [e.target.name]: e.target.validationMessage,
    }

    setFieldErrors(updatedFieldErrors)
  }

  return (
    <>
    {/* 錯誤訊息顯示在欄位的下方，
    但錯誤訊息依然是瀏覽器的預設錯誤訊息
    ，只是統一css風格 */}
      <form
        onSubmit={handleSubmit}
        onChange={handleChange}
        onInvalid={handleInvalid}
      >
        <div className="form-group">
          <label>帳號</label>
          <input
            type="text"
            name="username"
            value={fields.username}
            onChange={handleFieldChange}
            required
            placeholder="帳號"
          />
          {fieldErrors.username && (
            <small className="text-danger form-text">
              {fieldErrors.username}
            </small>
          )}
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={fields.email}
            onChange={handleFieldChange}
            required
            placeholder="email信箱"
          />
          {fieldErrors.email && (
            <small className="text-danger form-text">
              {fieldErrors.email}
            </small>
          )}
        </div>

        <div className="form-group">
          <label>密碼</label>
          <input
            type="password"
            name="password"
            value={fields.password}
            onChange={handleFieldChange}
            placeholder="密碼"
            required
            minLength="6"
          />
          {fieldErrors.password && (
            <small className="text-danger form-text">
              {fieldErrors.password}
            </small>
          )}
        </div>
        <button type="submit">提交</button>
      </form>
    </>
  )
}

export default Form
