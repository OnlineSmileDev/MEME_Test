import { actionCreatorHOF } from "../common/baseState";

export const MEMEITEM_PREFIX = 'MEMEITEM://';

export const FETCH_MEMEITEM_BEGIN = MEMEITEM_PREFIX + 'FETCH/BEGIN';
export const FETCH_MEMEITEM_SUCCESS = MEMEITEM_PREFIX + 'FETCH/SUCCESS';
export const FETCH_MEMEITEM_FAILURE = MEMEITEM_PREFIX + 'FETCH/FAILURE';

export const fetchMemeItemBegin = (data) => actionCreatorHOF(FETCH_MEMEITEM_BEGIN, data);
export const fetchMemeItemSuccess = (data) => actionCreatorHOF(FETCH_MEMEITEM_SUCCESS, data);
export const fetchMemeItemFailure = (data) => actionCreatorHOF(FETCH_MEMEITEM_FAILURE, data);

export const FETCH_USER_MEMEITEM_BEGIN = MEMEITEM_PREFIX + 'FETCH/USERLIST/BEGIN';
export const FETCH_USER_MEMEITEM_SUCCESS = MEMEITEM_PREFIX + 'FETCH/USERLIST/SUCCESS';
export const FETCH_USER_MEMEITEM_FAILURE = MEMEITEM_PREFIX + 'FETCH/USERLIST/FAILURE';

export const fetchUserMemeItemBegin = (data) => actionCreatorHOF(FETCH_USER_MEMEITEM_BEGIN, data);
export const fetchUserMemeItemSuccess = (data) => actionCreatorHOF(FETCH_USER_MEMEITEM_SUCCESS, data);
export const fetchUserMemeItemFailure = (data) => actionCreatorHOF(FETCH_USER_MEMEITEM_FAILURE, data);

export const UPDATE_USER_MEMEITEM = MEMEITEM_PREFIX + 'UPDATE/USERLIST/ITEM';
export const updateUserMemeItem = (data) => actionCreatorHOF(UPDATE_USER_MEMEITEM, data);

export const RESPOND_MEMEITEM_BEGIN = MEMEITEM_PREFIX + 'RESPOND/BEGIN';
export const RESPOND_MEMEITEM_SUCCESS = MEMEITEM_PREFIX + 'RESPOND/SUCCESS';
export const RESPOND_MEMEITEM_FAILURE = MEMEITEM_PREFIX + 'RESPOND/FAILURE';

export const respondMemeItemBegin = (data) => actionCreatorHOF(RESPOND_MEMEITEM_BEGIN, data);
export const respondMemeItemSuccess = (data) => actionCreatorHOF(RESPOND_MEMEITEM_SUCCESS, data);
export const respondMemeItemFailure = (data) => actionCreatorHOF(RESPOND_MEMEITEM_FAILURE, data);

export const CALCULATE_HUMORSTYLE_BEGIN = MEMEITEM_PREFIX + 'HUMORSTYLE/BEGIN';
export const CALCULATE_HUMORSTYLE_SUCCESS = MEMEITEM_PREFIX + 'HUMORSTYLE/SUCCESS';
export const CALCULATE_HUMORSTYLE_FAILURE = MEMEITEM_PREFIX + 'HUMORSTYLE/FAILURE';

export const calculateHumorStyleBegin = (data) => actionCreatorHOF(CALCULATE_HUMORSTYLE_BEGIN, data);
export const calculateHumorStyleSuccess = (data) => actionCreatorHOF(CALCULATE_HUMORSTYLE_SUCCESS, data);
export const calculateHumorStyleFailure = (data) => actionCreatorHOF(CALCULATE_HUMORSTYLE_FAILURE, data);

/** Fetch meme response */
export const FETCH_MEMERESPONSE_BEGIN = MEMEITEM_PREFIX + 'FETCH/RESPONSE/BEGIN';
export const FETCH_MEMERESPONSE_SUCCESS = MEMEITEM_PREFIX + 'FETCH/RESPONSE/SUCCESS';
export const FETCH_MEMERESPONSE_FAILURE = MEMEITEM_PREFIX + 'FETCH/RESPONSE/FAILURE';

export const fetchMemeResponseBegin = (data) => actionCreatorHOF(FETCH_MEMERESPONSE_BEGIN, data);
export const fetchMemeResponseSuccess = (data) => actionCreatorHOF(FETCH_MEMERESPONSE_SUCCESS, data);
export const fetchMemeResponseFailure = (data) => actionCreatorHOF(FETCH_MEMERESPONSE_FAILURE, data);