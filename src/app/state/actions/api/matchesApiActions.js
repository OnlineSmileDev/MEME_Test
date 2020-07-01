import { actionCreatorHOF } from "../common/baseState";

export const MATCHES_PREFIX = 'MATCHES://';

export const FETCH_CURRENTMATCH_BEGIN = MATCHES_PREFIX + 'FETCH/CURRENT/BEGIN';
export const FETCH_CURRENTMATCH_SUCCESS = MATCHES_PREFIX + 'FETCH/CURRENT/SUCCESS';
export const FETCH_CURRENTMATCH_FAILURE = MATCHES_PREFIX + 'FETCH/CURRENT/FAILURE';

export const fetchCurrentMatchBegin = (data) => actionCreatorHOF(FETCH_CURRENTMATCH_BEGIN, data);
export const fetchCurrentMatchSuccess = (data) => actionCreatorHOF(FETCH_CURRENTMATCH_SUCCESS, data);
export const fetchCurrentMatchFailure = (data) => actionCreatorHOF(FETCH_CURRENTMATCH_FAILURE, data);

export const FETCH_MATCHES_BEGIN = MATCHES_PREFIX + 'FETCH/BEGIN';
export const FETCH_MATCHES_SUCCESS = MATCHES_PREFIX + 'FETCH/SUCCESS';
export const FETCH_MATCHES_FAILURE = MATCHES_PREFIX + 'FETCH/FAILURE';

export const fetchMatchesBegin = (data) => actionCreatorHOF(FETCH_MATCHES_BEGIN, data);
export const fetchMatchesSuccess = (data) => actionCreatorHOF(FETCH_MATCHES_SUCCESS, data);
export const fetchMatchesFailure = (data) => actionCreatorHOF(FETCH_MATCHES_FAILURE, data);

//Fetch latest matches avatars
export const FETCH_LATESTMATCHES_BEGIN = MATCHES_PREFIX + 'FETCH/LATEST/BEGIN';
export const FETCH_LATESTMATCHES_SUCCESS = MATCHES_PREFIX + 'FETCH/LATEST/SUCCESS';
export const FETCH_LATESTMATCHES_FAILURE = MATCHES_PREFIX + 'FETCH/LATEST/FAILURE';

export const fetchLatestMatchesBegin = (data) => actionCreatorHOF(FETCH_LATESTMATCHES_BEGIN, data);
export const fetchLatestMatchesSuccess = (data) => actionCreatorHOF(FETCH_LATESTMATCHES_SUCCESS, data);
export const fetchLatestMatchesFailure = (data) => actionCreatorHOF(FETCH_LATESTMATCHES_FAILURE, data);

export const MATCH_RESPONSE_BEGIN = MATCHES_PREFIX + 'RESPOND/BEGIN';
export const MATCH_RESPONSE_SUCCESS = MATCHES_PREFIX + 'RESPOND/SUCCESS';
export const MATCH_RESPONSE_FAILURE = MATCHES_PREFIX + 'RESPOND/FAILURE';

export const matchResponseBegin = (data) => actionCreatorHOF(MATCH_RESPONSE_BEGIN, data);
export const matchResponseSuccess = (data) => actionCreatorHOF(MATCH_RESPONSE_SUCCESS, data);
export const matchResponseFailure = (data) => actionCreatorHOF(MATCH_RESPONSE_FAILURE, data);