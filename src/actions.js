import { serviceCall } from './service-call';
export function showLoader() {
    return {
        type: 'SHOW_LOADER_MERCHANTS',
        payload: true
    };
}

export function loadMerchants() {
    return {
        type: 'LOAD_MERCHANTS',
        payload: serviceCall({
            url: "http://localhost:8080/merchants",
            params: {
                _format: 'json'
            }
        })
    };
}
export function deleteMerchant(id) {
    return {
        type: 'DELETE_MERCHANT',
        payload: serviceCall({
            url: `http://localhost:8080/merchants/${id}`,
            method: 'DELETE'
        })
    };
}
export function addMerchants(data) {
    debugger;
    return {
        type: 'ADD_MERCHANTS',
        payload: serviceCall({
            url: "http://localhost:8080/merchants",
            data:data,
            method: 'POST'
        })
    };
}
export function editMerchants(data) {
    return {
        type: 'EDIT_MERCHANTS',
        payload: { data:data}
    };
}
export function editOneMerchant(data) {
    debugger;
    return {
        type: 'EDIT_ONE_MERCHANT',
        payload: serviceCall({
            url: `http://localhost:8080/merchants/${data.id}`,
            data:data,
            method: 'PUT'
        })
    };
}
