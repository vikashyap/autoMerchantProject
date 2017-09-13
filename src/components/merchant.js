import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadMerchants, editMerchants } from '../actions.js';
import Styles from  '../App.css';
import Modal from 'react-modal';
import logo from '../logo.png';
import { Link } from 'react-router';
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    background            :'#25b7c4',
    border                :'2px solid rgba(53, 88, 187, 0.45)'
  }
};

class Merchant extends Component {
 constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      isEdit:false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.removeData = this.removeData.bind(this)
  }
    openModal = (index) => {
    this.setState({modalIsOpen: true});
    this.setState({activeIndex: index});
  }

  afterOpenModal = () => {
    // references are now sync'd and can be accessed.
  }

  closeModal = () => {
    this.setState({modalIsOpen: false});
  }
  removeData = (index)=>{ 
    this.props.merchants.data.splice(this.state.activeIndex,1);
    this.closeModal();
  }
  editMerchant = (item)=>{ 
    this.props.editMerchants(item);
 
    }  
	componentWillMount = () => {  
		this.props.loadMerchants(); 
	}
   render() {
    const merchantData = this.props.merchants ||{};
    let row='';
    if(merchantData.data){
      if(merchantData.data.length===0){
          row = <div className="timeline-wrapper">
            <img src="https://vignette1.wikia.nocookie.net/roblox-apocalypse-rising/images/0/03/Temporary_not_available.jpg/revision/latest?cb=20151114170813" className="App-logo notAvailable" alt="logo" />
          </div>
        }else{
      row = merchantData.data.map((items,key) =>
         <tr key = {key}> 
         <td><img src={items.avatarUrl}className="App-logo tableLogo" alt="NA" /></td>
          <td>{!this.state.isEdit?items.id:'a'}</td>
          <td>{items.firstname}</td>
          <td>{items.lastname}</td>
          <td>{items.email}</td>
          <td>{items.phone}</td>
          <td>{items.hasPremium?"Available":"NA"}</td>
          <td>{items.bids.length}</td>
          <td><i onClick={this.openModal.bind(this,key)} className=" merchantIcon fa fa-trash fa-2x"></i>
          <Link to="/editMerchant"><i onClick={this.editMerchant.bind(this,items)} className=" merchantIcon fa fa-pencil fa-2x" aria-hidden="true"></i></Link></td>
        </tr>
        );
      }
    }
    return (
        <div className="container">
        <div><Link to="/addMerchant"><button id="merchantButton">Add Merchant</button></Link></div>
    {!this.props.loading && <div className="showbox">
      <div className="loader">
        <svg className="circular" viewBox="25 25 50 50">
          <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10"/>
        </svg>
      </div>
    </div>}
    <section>
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
</section>
<Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal">
        <h1> Remove Merchant </h1>
        <div className="modalContainer">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Are you sure you want to delete ??</p>
        <button onClick={this.removeData}>Confirm</button>
        <button onClick={this.closeModal}>Cancel</button>
        </div>
        </Modal>
       </div>                                 
    );
  }
}
const mapStateToProps = state => {
    console.log(state);
    return {
        merchants: state.merchants,
        loading : state.loading
    };
};
const mapDispatchToProps = dispatch => {
    return { 
    loadMerchants: () => {
            dispatch(loadMerchants());
        },  
        editMerchants: (data) => {
            dispatch(editMerchants(data));
        } 
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Merchant);
