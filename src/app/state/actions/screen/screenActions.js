import { actionCreatorHOF } from "../common/baseState";

export const SCREEN_PREFIX = 'SCREEN://';

export const UPDATE_SCREEN_PARAM = SCREEN_PREFIX + 'UPDATE/PARAM';

export const updateScreenParam = (data) => actionCreatorHOF(UPDATE_SCREEN_PARAM, data);