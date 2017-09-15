import React  from 'react';
import { Link } from 'react-router';  
const MerchantTable = (props) => {
const merchantData = props.self.props.merchants ||{};
    let row='';
    if(merchantData.data) {
      if(merchantData.data.length===0){
          row = <div className="timeline-wrapper">
            <img src="https://vignette1.wikia.nocookie.net/roblox-apocalypse-rising/images/0/03/Temporary_not_available.jpg/revision/latest?cb=20151114170813" className="App-logo notAvailable" alt="logo" />
          </div>
    }else{
     row = props.self.state.pageOfItems.map((items,key) =>
         <tr key = {key}> 
         <td><img src={items.avatarUrl}className="App-logo tableLogo" alt="NA" /></td>
          <td>{items.id}</td>
          <td>{items.firstname}</td>
          <td>{items.lastname}</td>
          <td>{items.email}</td>
          <td>{items.phone}</td>
          <td>{items.hasPremium?"Available":"NA"}</td>
          <td>{items.bids.length} <button onClick={props.self.openModalHst.bind(props.self,items.id)} disabled={!items.bids.length>0} title="Bids Sorted History"  className={`bidHistory ${items.bids.length===0 ? 'disabledClass':''}`}>Bids</button></td>
          <td><i onClick={props.self.openModal.bind(props.self,items.id)} className=" merchantIcon fa fa-trash fa-2x"></i>
          <Link to="/editMerchant"><i onClick={props.self.editMerchant.bind(props.self,items)} className=" merchantIcon fa fa-pencil fa-2x" aria-hidden="true"></i></Link></td>
        </tr>
        );
    }
  }
    return (
      <div>
        <div className="tbl-header">
         <table cellPadding="0" cellSpacing="0">
            <thead>
              <tr>
                <th>Avatar</th>
                <th>Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>phone</th>
                <th>Premium</th>
                <th>Bids Count</th>
                <th>Actions</th>
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
        </div>  
        )
      }
export default MerchantTable;