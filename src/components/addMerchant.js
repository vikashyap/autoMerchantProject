import React, { Component } from 'react';
import Header from './header';
import { connect } from 'react-redux';
import {addMerchants, editOneMerchant } from '../actions.js';
import { Link } from 'react-router';
import validator from 'validator';
import BasicInfo from './basicInfo';
import logo from '../logo.png';
import AddComponentBids from './addBids';
import Modal from 'react-modal';
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
class AddMerchant extends Component {
    constructor() {
    super();

    this.state = {
      isNext: false,
      modalIsOpen: false,
      isClick:false,
      formData:{
        id:Math.random().toString(36).substring(7),
        firstname:'',
        lastname:'',
        avatarUrl:'',
        email:'',
        phone:'',
        hasPremium:false,
        bids:[]
      },
      bidData:{
        id:Math.random().toString(36).substring(7),
        amount:'',
        carTitle:'',
        created:Date()
      }
    };
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.removeData = this.removeData.bind(this)
    this.nextStep = this.nextStep.bind(this);
    this.addBids = this.addBids.bind(this);
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
    this.state.formData.bids.splice(this.state.activeIndex,1);
    this.closeModal();
  }

nextStep =()=>{
    this.setState({isNext: true});
    if(this.state.isNext && !this.props.selectedMerchants){
     this.props.addMerchants(this.state.formData);
     this.setState({isClick:true})
    }
    if(this.state.isNext && this.props.isEdit){
      this.props.editOneMerchant(this.state.formData);
    }

}
componentWillMount = () => {
    const selectedMerchant = this.props.selectedMerchants;
    if(selectedMerchant){
         let formData = {
        id:selectedMerchant.data.id,
        firstname:selectedMerchant.data.firstname,
        lastname:selectedMerchant.data.lastname,
        avatarUrl:selectedMerchant.data.avatarUrl,
        email:selectedMerchant.data.email,
        phone:selectedMerchant.data.phone,
        hasPremium:selectedMerchant.data.hasPremium,
        bids:selectedMerchant.data.bids
      }
      this.setState({ formData });
    }
}
generateID = () =>{   
 return Math.random().toString(36).substring(7);
}
formValidate = () =>{
        if(!validator.isEmail(this.state.formData.email)){
            return false;
        }
        if(validator.isEmpty(this.state.formData.firstname)){
            return false;
        }
        if(validator.isEmpty(this.state.formData.lastname)){
           return false;
        }
    return true;
       
}
formBidsValidate = () =>{
        if(validator.isEmpty(this.state.bidData.carTitle)){
            return false;
        }
        if(validator.isEmpty(this.state.bidData.amount.toString())){
           return false;
        }
    return true;
       
}
handleFormChange = (name, value) => {
    let formData = Object.assign({}, this.state.formData);
    if(name==='phone'){
      value.target.value = value.target.value.replace(/[^\d]/,'')
    }
    formData[name] = value.target.value;
    this.setState({ formData });
}
handleFormCheckChange = (name, value) => {
    let formData = Object.assign({}, this.state.formData);
    formData[name] = value.target.checked;
    this.setState({ formData });
}
bidFormChange = (name, value) => {
    let bidData = Object.assign({}, this.state.bidData);
    if(name==='amount'){
      value.target.value = value.target.value.replace(/[^\d]/,'')
    }
    bidData[name] = value.target.value;
    this.setState({ bidData });
}
addBids = ()=>{
   let formData = Object.assign({}, this.state.formData);
    formData.bids.push(this.state.bidData);
    this.setState({ formData });
    let bidData = Object.assign({}, this.state.bidData);
    bidData={
        id:Math.random().toString(36).substring(7),
        amount:'',
        carTitle:'',
        created:Date()
    }
    this.setState({ bidData });
    
}
  render() { 
    return (
      <div className="App">
        <Header/>
        <div>
        
        {!this.state.isNext?<button disabled={!this.formValidate()} className={`!this.formValidate()?'disabledClass':''`} onClick={this.nextStep} id="addmerchantButton">Next Step</button>:
        <Link to="/"><button id="addmerchantButton" onClick={this.nextStep}>Submit</button></Link>}</div>
        <div className="wrap">
        {!this.state.isNext ? <BasicInfo validator={validator} self = {this} merchant={this.state}/>:
          <AddComponentBids self = {this} merchant={this.state}/>}
</div>
<Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal">
        <h1> Remove Bid </h1>
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
  console.log(state)
    return {
        merchants: state.merchants,
        loading : state.loading,
        selectedMerchants: state.selectedMerchants,
        isEdit : state.isEdit
    };
};
const mapDispatchToProps = dispatch => {
    return { 
    addMerchants: (data) => {
            dispatch(addMerchants(data));
        },  
    editOneMerchant: (data) => {
            dispatch(editOneMerchant(data));
    }       
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddMerchant);