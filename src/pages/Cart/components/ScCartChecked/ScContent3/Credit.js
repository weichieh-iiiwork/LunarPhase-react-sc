import React, { useState, useEffect } from 'react'
import Cards from 'react-credit-cards'

export default class Credit extends React.Component {
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  }
  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name })
  }

  handleInputChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div id="PaymentForm">
        <div className="pb-2 mb-3 mt-5 titleDivider">
          <div className="scTitle col-5">信用卡資料</div>
        </div>
        <div className="d-flex">
          <div className="col-6 d-flex align-content-center mt-5">
            <Cards
              cvc={this.state.cvc}
              expiry={this.state.expiry}
              focused={this.state.focus}
              name={this.state.name}
              number={this.state.number}
            />
          </div>
          <div className="col-6 d-flex flex-column">
          <form>
            <label className="sc-inputLabel">信用卡號碼：</label>
            <input
              type="text"
              name="number"
              className="scInput w-100 mb-4"
              placeholder="Card Number"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
            <label className="sc-inputLabel">持卡人姓名：</label>
            <input
                className="scInput w-100 mb-4"
                type="text"
                name="name"
                placeholder="Name"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
            />
            <div className="d-flex">
                <div className="d-flex flex-column mr-1">
                <label className="sc-inputLabel">有效日期：</label>
                <input
                    className="scInput w-100 mb-4"
                    type="text"
                    name="expiry"
                    onChange={this.handleInputChange}
                    onFocus={this.handleInputFocus}
                />
                </div>
                <div className="d-flex flex-column ml-1">
                <label className="sc-inputLabel">安全碼：</label>
                <input className="scInput w-100 mb-4" type="text" 
                    name="cvc"
                    onChange={this.handleInputChange}
                    onFocus={this.handleInputFocus}
                />
                </div>
            </div>
          </form>

          </div>
        </div>
      </div>
    )
  }
}
