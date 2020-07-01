import BaseService from '../BaseService';

const resource = 'user/account';

export default {
    create(data) {
        return BaseService.post(`${resource}/create`, data);
    },
    fetch(data) {
        return BaseService.get(`user/fetch?by=${data.by}&id=${data.id}`);
    },
    reset(data) {
        return BaseService.get(`user/reset?userId=${data.id}`);
    },
    update(data) {
        // console.log('uri::' + data.id);
        // console.log('body:'); console.log(data.body);
        return BaseService.post(`user/update/${data.id}`, data.body);
    },
    match(data) {
        return BaseService.post(`${resource}/match`, data);
    },
}