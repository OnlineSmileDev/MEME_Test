import { actionCreatorHOF } from "../common/baseState";

export const USER_PREFIX = 'USER://';

export const USER_LOAD_FROMSTORAGE = USER_PREFIX + 'LOAD/FROMSTORAGE';

export const userLoadFromStorage = (data) => actionCreatorHOF(USER_LOAD_FROMSTORAGE, data); 