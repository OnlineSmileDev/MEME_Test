import { actionCreatorHOF } from "../common/baseState";

export const USER_API_PREFIX = 'API://USER/';

/* login user*/
export const LOGIN_BEGIN = USER_API_PREFIX + 'LOGINBEGIN';
export const LOGIN_SUCCESS = USER_API_PREFIX + 'LOGINSUCCESS';
export const LOGIN_FAILURE = USER_API_PREFIX + 'LOGINFAILURE';

export const loginBegin = (data) => actionCreatorHOF(LOGIN_BEGIN, data);
export const loginSuccess = (data) => actionCreatorHOF(LOGIN_SUCCESS, data);
export const loginFailure = (data) => actionCreatorHOF(LOGIN_FAILURE, data);

/* update user*/
export const UPDATEUSER_BEGIN = USER_API_PREFIX + ' UPDATEUSER/BEGIN';
export const UPDATEUSER_SUCCESS = USER_API_PREFIX + ' UPDATEUSER/SUCCESS';
export const UPDATEUSER_FAILURE = USER_API_PREFIX + ' UPDATEUSER/FAILURE';

export const UpdateUserBegin = (data) => actionCreatorHOF(UPDATEUSER_BEGIN, data);
export const UpdateUserSuccess = (data) => actionCreatorHOF(UPDATEUSER_SUCCESS, data);
export const UpdateUserFailure = (data) => actionCreatorHOF(UPDATEUSER_FAILURE, data);

/* invite code */
export const WAITLISTCODE_BEGIN = USER_API_PREFIX + 'WAITLISTCODE/BEGIN';
export const WAITLISTCODE_SUCCESS = USER_API_PREFIX + 'WAITLISTCODE/SUCCESS';
export const WAITLISTCODE_FAILURE = USER_API_PREFIX + 'WAITLISTCODE/FAILURE';

export const waitlistCodeBegin = (data) => actionCreatorHOF(WAITLISTCODE_BEGIN, data);
export const waitlistCodeSuccess = (data) => actionCreatorHOF(WAITLISTCODE_SUCCESS, data);
export const waitlistCodeFailure = (data) => actionCreatorHOF(WAITLISTCODE_FAILURE, data);

/* Fetch user profile  */
export const FETCHUSER_BEGIN = USER_API_PREFIX + 'FETCHUSER/BEGIN';
export const FETCHUSER_SUCCESS = USER_API_PREFIX + 'FETCHUSER/SUCCESS';
export const FETCHUSER_FAILURE = USER_API_PREFIX + 'FETCHUSER/FAILURE';

export const fetchUserBegin = (data) => actionCreatorHOF(FETCHUSER_BEGIN, data);
export const fetchUserSuccess = (data) => actionCreatorHOF(FETCHUSER_SUCCESS, data);
export const fetchUserFailure = (data) => actionCreatorHOF(FETCHUSER_FAILURE, data);

/**Reset user */
export const RESETUSER_BEGIN = USER_API_PREFIX + 'RESETUSER/BEGIN';
export const RESETUSER_SUCCESS = USER_API_PREFIX + 'RESETUSER/SUCCESS';
export const RESETUSER_FAILURE = USER_API_PREFIX + 'RESETUSER/FAILURE';

export const resetUserBegin = (data) => actionCreatorHOF(RESETUSER_BEGIN, data);
export const resetUserSuccess = (data) => actionCreatorHOF(RESETUSER_SUCCESS, data);
export const resetUserFailure = (data) => actionCreatorHOF(RESETUSER_FAILURE, data);