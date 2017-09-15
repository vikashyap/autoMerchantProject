export default (state = {}, action) => {
  switch (action.type) {
        case 'LOAD_MERCHANTS': {
            const tempState = { ...state };
            tempState.loading = true;
            tempState.isEdit=false
            tempState.merchants = action.payload
            return tempState;
        }
        case 'ADD_MERCHANTS': {
            const tempState = { ...state };
            tempState.loading = true;
            return {...tempState};
        }
         case 'DELETE_MERCHANTS': {
            const tempState = { ...state };
            tempState.loading = true;
            return tempState;
        }
        case 'EDIT_MERCHANTS': {
            const data = action.payload.data;
            return {...state, selectedMerchants:{data},isEdit:true};
        }
         case 'EDIT_ONE_MERCHANT': {  
            return {...state,selectedMerchants:false,isEdit:false};
        }
        default:
            return state;
    }
};
