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
          
            <label className="sc-inputLabel">信用卡號碼：</label>
            <input
              type="text"
              name="number"
              value={this.props.inputs.number}
              className="scInput w-100 mb-4"
              placeholder="卡號"
              onChange={(e)=>{this.handleInputChange(e); this.props.onChangeForField(e)}}
              onFocus={this.handleInputFocus}
              maxLength="16"
            />
            <label className="sc-inputLabel">持卡人姓名：</label>
            <input
                className="scInput w-100 mb-4"
                type="text"
                name="name"
                value={this.props.inputs.name}
                placeholder="姓名"
                onChange={(e)=>{this.handleInputChange(e); this.props.onChangeForField(e)}}
                onFocus={this.handleInputFocus}
            />
            <div className="d-flex">
                <div className="d-flex flex-column mr-1">
                <label className="sc-inputLabel">有效日期：</label>
                <input
                    className="scInput w-100 mb-4"
                    type="text"
                    name="expiry"
                    value={this.props.inputs.expiry}
                    onChange={(e)=>{this.handleInputChange(e); this.props.onChangeForField(e)}}
                    onFocus={this.handleInputFocus}
                    maxLength="4"
                    placeholder="MMYY"

                />
                </div>
                <div className="d-flex flex-column ml-1">
                <label className="sc-inputLabel">安全碼：</label>
                <input className="scInput w-100 mb-4" type="text" 
                    name="cvc"
                    value={this.props.inputs.cvc}
                    onChange={(e)=>{this.handleInputChange(e); this.props.onChangeForField(e)}}
                    onFocus={this.handleInputFocus}
                    maxLength="3"
                    placeholder="卡片背後三碼"
                />
                </div>
            </div>
          

          </div>
        </div>
      </div>
    )
  }
}
