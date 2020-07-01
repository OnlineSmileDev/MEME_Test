import BaseService from '../BaseService';

const resource = 'chat';

export default {
    summary(data) {
        return BaseService.get(`${resource}/summary?id=${data.id}`);
    },
    fetch(data) {
        return BaseService.get(`${resource}/fetch?id=${data.id}`);
    },
    send(data) {
        return BaseService.post(`${resource}/send`, data);
    },
    fetchHistory(data) {
        return BaseService.get(`${resource}/fetch/history?from=${data.fromUserId}&to=${data.toUserId}`);
    },
};