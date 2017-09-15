import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadMerchants, editMerchants,deleteMerchant } from '../actions.js';
import Modal from 'react-modal';
import logo from '../logo.png';
import { Link } from 'react-router';
import BidsTable from './bidsTable';
import Pagination from './pagination';
import MerchantTable from './merchantTable';
import GridView from './gridView';

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
      modalIsOpenHst: false,
      isEdit:false,
      isGrid:false,
      sortedBids:[],
      pageOfItems: []
    };

    // bind function in constructor instead of render
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModalHst = this.openModalHst.bind(this);
    this.closeModalHst = this.closeModalHst.bind(this);
    this.removeData = this.removeData.bind(this);
    this.onChangePage = this.onChangePage.bind(this)
  }
    openModal = (id) => {
    this.setState({modalIsOpen: true});
    this.setState({activeIndex: id});
  }

  closeModal = () => {
    this.setState({modalIsOpen: false});
  }
  openModalHst = (index) => {
    this.setState({modalIsOpenHst: true});
     const data = this.props.merchants.data.filter(function (item) {
                return item.id === index;
                  });
     this.setState({sortedBids:data})
  }

  closeModalHst = (index) => {
    this.setState({modalIsOpenHst: false});
  }
   onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }

  removeData = ()=>{ 
    this.props.deleteMerchant(this.state.activeIndex)
    this.closeModal();
    this.props.loadMerchants(); 
  }
  editMerchant = (item)=>{ 
    this.props.editMerchants(item);
 
    }  
    changeMode = (val)=>{
      this.setState({isGrid:val})
    }
	componentWillMount = () => {  
		this.props.loadMerchants(); 
	}
   render() {
    const merchantData = this.props.merchants ||{};
     return (
        <div className="container">
        <div>
        <i disabled={this.state.isGrid} onClick={this.changeMode.bind(this,false)} className={`fa fa-table fa-2x iconTable ${this.state.isGrid?'disabledClass':''}`} aria-hidden="true"></i>
        <i disabled={!this.state.isGrid}onClick={this.changeMode.bind(this,true)} className={`fa fa-th fa-2x iconGrid ${!this.state.isGrid?'disabledClass':''}`} aria-hidden="true"></i>
        <Link to="/addMerchant"><button id="merchantButton">Add Merchant</button></Link></div>
    {!this.props.loading && <div className="showbox">
      <div className="loader">
        <svg className="circular" viewBox="25 25 50 50">
          <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10"/>
        </svg>
      </div>
    </div>}
    <section>
    {!this.state.isGrid?<MerchantTable self={this}/>:<GridView self={this}/>}
 
 {merchantData.data && <Pagination items={merchantData.data} onChangePage={this.onChangePage} />}
</section>
<Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Remove Merchant">
        <h1> Remove Merchant </h1>
        <div className="modalContainer">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Are you sure you want to delete ??</p>
        <button onClick={this.removeData}>Confirm</button>
        <button onClick={this.closeModal}>Cancel</button>
        </div>
        </Modal>

        <Modal
          isOpen={this.state.modalIsOpenHst}
          onRequestClose={this.closeModalHst}
          style={customStyles}
          contentLabel="Bids Sorted History">
          <h1> Bids Sorted History </h1>
        <div className="modalHistoryContainer">
        <img src={logo} className="App-logo" alt="logo" />
          {this.state.sortedBids.length>0 &&<BidsTable action={false}  data ={this.state.sortedBids[0].bids}/>}
        <button onClick={this.closeModalHst}>Ok</button>
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
        },
        deleteMerchant: (id) => {
            dispatch(deleteMerchant(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Merchant);
