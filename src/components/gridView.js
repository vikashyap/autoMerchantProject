import React  from 'react';
import { Link } from 'react-router';
const GridView = (props) => {
 const merchantData = props.self.props.merchants.data ||{};
    const row = props.self.state.pageOfItems.map((items,key) =>
    	 <li key={key}>
		      <div className="gridImage" style={{backgroundColor: ''}}>
		      <img className="roundImg App-logo " src={items.avatarUrl}/>
		      <div>
			      <strong className="gridName">{items.firstname} {items.lastname}</strong>
			   </div>
			   <sup>{items.email}</sup>
			   <div><sup>{items.phone}</sup></div>
			   <div className="gridIcons">
			   <Link to="/editMerchant"><i onClick={props.self.editMerchant.bind(props.self,items)} className=" editIcon merchantIcon  fa fa-pencil-square-o fa-2x" aria-hidden="true"></i></Link>
			   <i onClick={props.self.openModal.bind(props.self,items.id)} className=" deleteIcon merchantIcon fa fa-trash fa-2x"></i>
			   </div>
			   <button onClick={props.self.openModalHst.bind(props.self,items.id)} disabled={!items.bids.length>0} className={`gridBidsCount ${items.bids.length===0 ? 'disabledClass':''}`} title="Click to Watch Sorted History">BIDS Count {items.bids.length}</button>   
		      </div>
	    </li>
          );
    return (
  <ul className="thumb-list">
     {row}
 </ul>
	   )
      }
export default GridView;
