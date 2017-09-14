import { serviceCall } from './service-call';
import data  from './merchant.json'
export function showLoader() {
    return {
        type: 'SHOW_LOADER_MERCHANTS',
        payload: true
    };
}

export function loadMerchants() {
    return {
        type: 'LOAD_MERCHANTS',
        payload: { data:data}
    };
}
export function addMerchants(data) {
    return {
        type: 'ADD_MERCHANTS',
        payload: { data:data}
    };
}
export function editMerchants(data) {
    return {
        type: 'EDIT_MERCHANTS',
        payload: { data:data}
    };
}
export function editOneMerchant(data) {
    return {
        type: 'EDIT_ONE_MERCHANT',
        payload: { data:data}
    };
}
