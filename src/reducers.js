export default (state = {}, action) => {
  switch (action.type) {
        case 'LOAD_MERCHANTS': {
            const tempState = { ...state };
            tempState.loading = true;
            if(!state.merchants){
              tempState.merchants = action.payload
            }
            return tempState;
        }
        case 'ADD_MERCHANTS': {
            const tempState = { ...state };
            tempState.loading = true;
            let tempData=[];
            if(state.merchants){
             tempData = state.merchants.data;
            }
            tempData = tempData.concat(action.payload.data)
            return {...tempState, merchants:{data:tempData}};
        }
         case 'EDIT_MERCHANTS': {
            const data = action.payload.data;
            return {...state, selectedMerchants:{data}};
        }
         case 'EDIT_ONE_MERCHANT': {
            debugger
            let tempState = {...state };
            let mainData = tempState.merchants.data;
            let dataArr =[action.payload.data];
            mainData.forEach(function(type) {
             if(type.id !== action.payload.data.id){
                dataArr.push(type)
             }
             });
            
            return {...state,merchants:{data:dataArr},selectedMerchants:undefined};
        }
        default:
            return state;
    }
};
