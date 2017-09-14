import React from 'react';
import BidsTable from './bidsTable'
const AddBids = (props) => {
      return (
<fieldset className="basicInfo">
            <legend><h3>Add Bids</h3></legend>
            <div className="formContainer">
                <input className="inputBox" type="text" value={props.merchant.bidData.carTitle} name="carTittle" onChange={props.self.bidFormChange.bind(props.self, "carTitle")} placeholder="Car Tittle"/>
                {props.merchant.bidData.carTitle.length>0 && <i className="fa fa-check check" aria-hidden="true"></i>}
                {props.merchant.bidData.carTitle.length===0 && <i className="fa fa-times close" aria-hidden="true"></i>}
                <input className="inputBox" type="text" value={props.merchant.bidData.amount} name="amount" onChange={props.self.bidFormChange.bind(props.self, "amount")} placeholder="Amount only numbers"/>
                {props.merchant.bidData.amount.length>0 && <i className="fa fa-check check" aria-hidden="true"></i>}
                {props.merchant.bidData.amount.length===0 && <i className="fa fa-times close" aria-hidden="true"></i>}
                <button disabled={!props.self.formBidsValidate()} onClick={props.self.addBids}>Add</button>   
                </div>
                <BidsTable action={true} self={props.self} data ={props.merchant.formData.bids}/>
        </fieldset>
        )
      }
export default AddBids;