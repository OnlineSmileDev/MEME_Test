import BaseService from '../BaseService';

const resource = 'memeitem';

export default {
    fetchList(data) {
        return BaseService.get(`${resource}/fetch/list?by=${data.by}`);
    },
    fetchUserList(data) {
        return BaseService.get(`${resource}/fetch/userlist?userId=${data.userId}&count=${data.count}`);
    },
    fetchUserListV2(data) {
        return BaseService.post(`${resource}/fetch/userlist/v2`, data);
    },
    respond(data) {
        return BaseService.post(`${resource}/respond`, data);
    },
    fetchHumorStyle(data) {
        return BaseService.get(`${resource}/humorstyle/user/${data.profileId}`);
    },
    fetchResponse(data) {
        return BaseService.get(`${resource}/fetch/responses?type=${data.type}&profileId=${data.profileId}`);
    }
};