import BaseService from '../BaseService';

const resource = 'waitlist';

export default {
    claim(data) {
        return BaseService.post(`${resource}/code/claim`, data);
    }
}
