import { actionCreatorHOF } from "../common/baseState";

export const LOADER_PREFIX = "LOADER://"

export const LOADER_UPDATE = LOADER_PREFIX + 'LOADER/UPDATE';

export const loaderUpdate = (data) => actionCreatorHOF(LOADER_UPDATE, data);