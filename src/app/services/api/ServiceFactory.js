import AccountService from './users/AccountService';
import WaitListService from './users/WaitListService';
import StorageService from './storage/StorageService';
import MemeItemService from './meme-item/MemeItemService';
import MatchService from './matches/MatchService';
import ChatService from './chat/ChatService';
const services = {
    user: AccountService,
    waitlist: WaitListService,
    storage: StorageService,
    memeItem: MemeItemService,
    match: MatchService,
    chat: ChatService
};

export default ServiceFactory = {
    get: name => services[name]
};