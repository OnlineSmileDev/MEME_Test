import { actionCreatorHOF } from "../common/baseState";

export const STORAGE_API_PREFIX = 'API://STORAGE/';

export const STORAGE_UPLOAD_BEGIN = STORAGE_API_PREFIX + 'UPLOAD/BEGIN';
export const STORAGE_UPLOAD_SUCCESS = STORAGE_API_PREFIX + 'UPLOAD/SUCCESS';
export const STORAGE_UPLOAD_FAILURE = STORAGE_API_PREFIX + 'UPLOAD/FAILURE';


export const storageUploadBegin = (data) => actionCreatorHOF(STORAGE_UPLOAD_BEGIN, data);
export const storageUploadSuccess = (data) => actionCreatorHOF(STORAGE_UPLOAD_SUCCESS, data);
export const storageUploadFailure = (data) => actionCreatorHOF(STORAGE_UPLOAD_FAILURE, data);