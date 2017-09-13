import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadMerchants } from '../actions.js';
import Modal from 'react-modal';
import logo from '../logo.png';
import { Link } from 'react-router';
const AddBids = (props) => {
   const row = props.merchant.formData.bids.map((items,key) =>
          <tr key = {key}>
          <td>{items.id}</td>
          <td>{items.carTitle}</td>
          <td>{items.amount}</td>
          <td><i onClick={props.self.openModal.bind(this,key)} className=" merchantIcon fa fa-trash fa-2x"></i></td>
         </tr>
        );
    return (
<fieldset className="basicInfo">
            <legend><h3>Add Bids</h3></legend>
            <div className="formContainer">
                <input className="inputBox" type="text" value={props.merchant.bidData.carTitle} name="carTittle" onChange={props.self.bidFormChange.bind(props.self, "carTitle")} placeholder="Car Tittle"/>
                {props.merchant.bidData.carTitle.length>0 && <i className="fa fa-check check" aria-hidden="true"></i>}
                {props.merchant.bidData.carTitle.length===0 && <i className="fa fa-times close" aria-hidden="true"></i>}
                <input className="inputBox" type="text" value={props.merchant.bidData.amount} name="amount" onChange={props.self.bidFormChange.bind(props.self, "amount")} name="amount" placeholder="Amount"/>
                {props.merchant.bidData.amount.length>0 && <i className="fa fa-check check" aria-hidden="true"></i>}
                {props.merchant.bidData.amount.length===0 && <i className="fa fa-times close" aria-hidden="true"></i>}
                <button disabled={!props.self.formBidsValidate()} onClick={props.self.addBids}>Add</button>   
                </div>
               { props.merchant.formData.bids.length >0 && <section>
                      <div className="tbl-header">
                        <table cellPadding="0" cellSpacing="0">
                          <thead>
                            <tr>
                              <th>Id</th>
                              <th>Car Title</th>  
                              <th>Amount</th>
                              <th>Action</th>
                             </tr>
                          </thead>
                        </table>
                      </div>
                      <div className="tbl-content">
                        <table cellPadding="0" cellSpacing="0">
                          <tbody>
                           {row}
                          </tbody>
                        </table>
                      </div>
              </section>}
        </fieldset>
        )
      }
export default AddBids;