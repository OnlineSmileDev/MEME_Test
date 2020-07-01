import BaseService from '../BaseService';

const resource = 'storage';

export default {
    upload(data) {
        return BaseService.post(`${resource}/create`, data);
    }
}