import Qs from 'qs';
import axios from 'axios';

export function serviceCall(requestData) {
    // axios.defaults.headers.post['Content-Type'] = 'application/json';
    return new Promise((resolve, reject) => {
        requestData.params = requestData.params || {};
        requestData.params['_format'] = 'json';
        requestData.params['time'] = Number(new Date());
        const request = {
            url: requestData.url,
            method: requestData.method || 'GET',
            headers: requestData.headers || {},
            paramsSerializer: function(params) {
                return Qs.stringify(params, { arrayFormat: 'brackets' });
            },
            data: JSON.stringify(requestData.data || {}),
            validateStatus: function(status) {
                return status >= 200 && status < 300;
            },
            params: requestData.params,
            timeout: 95000
        };
        request.headers['Content-Type'] = 'application/json';
        axios(request).then(resolve).catch(function(error) {
            console.warn('Server response error: ', error);
            reject(error.response ? error.response : error);
        });
    });
}
