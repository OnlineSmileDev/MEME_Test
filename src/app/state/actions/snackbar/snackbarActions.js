import { actionCreatorHOF } from "../common/baseState";

export const SNACKBAR_PREFIX = 'SNACKBAR://';

export const SNACKBAR_UPDATE = SNACKBAR_PREFIX + 'UPDATE';

export const snackbarUpdate = (data) => actionCreatorHOF(SNACKBAR_UPDATE, data);