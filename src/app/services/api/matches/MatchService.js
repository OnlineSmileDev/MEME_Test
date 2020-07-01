import BaseService from '../BaseService';

const resource = 'match';

export default {
    fetch(data) {
        return BaseService.get(`${resource}/fetch?profileId=${data.profileId}&maxCount=${data.maxCount}`);
    },
    latest(data) {
        return BaseService.get(`${resource}/fetch/latest?id=${data.id}&count=${data.count}`);
    },
    respond(data) {
        return BaseService.post(`${resource}/respond`, data);
    },
};