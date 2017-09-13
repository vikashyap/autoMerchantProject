import React, { Component } from 'react';
import Header from './header';
import { connect } from 'react-redux';
import { loadMerchants, addMerchants, editOneMerchant } from '../actions.js';
import { Link } from 'react-router';
import { hashHistory } from 'react-router';
import validator from 'validator';
import BasicInfo from './basicInfo';
import AddComponentBids from './addBids';
class AddMerchant extends Component {
    constructor() {
    super();

    this.state = {
      isNext: false,
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
        created:''
      }
    };
    this.nextStep = this.nextStep.bind(this);
    this.addBids = this.addBids.bind(this);
}

nextStep =()=>{
    this.setState({isNext: true});
    if(this.state.isNext && !this.props.selectedMerchants){
     this.props.addMerchants(this.state.formData);
     this.setState({isClick:true})
    }
    if(this.state.isNext && this.props.selectedMerchants){
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
    bidData[name] = value.target.value;
    this.setState({ bidData });
}
addBids = ()=>{
   let formData = Object.assign({}, this.state.formData);
    formData.bids.push(this.state.bidData);
    this.setState({ formData });
}
  render() { 
    return (
      <div className="App">
        <Header/>
        <div>
        
        {!this.state.isNext?<button disabled={!this.formValidate()} onClick={this.nextStep} id="addmerchantButton">Next Step</button>:
        <Link to="/"><button id="addmerchantButton" onClick={this.nextStep}>Submit</button></Link>}</div>
        <div className="wrap">
        {!this.state.isNext ? <BasicInfo validator={validator} self = {this} merchant={this.state}/>:
          <AddComponentBids self = {this} merchant={this.state}/>}
</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        merchants: state.merchants,
        loading : state.loading,
        selectedMerchants: state.selectedMerchants
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