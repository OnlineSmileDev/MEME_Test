import { actionCreatorHOF } from "./baseState";

export const TIMER_PREFIX = 'TIMER://';
export const TIMER_START = TIMER_PREFIX + 'START/';
export const TIMER_STOP = TIMER_PREFIX + 'STOP/';

export const TimerTypes = {
    INTERVAL: 'setInterval',
    TIMEOUT: 'setTimeout'
}

export const timerStart = (data) => {
    return actionCreatorHOF(TIMER_START, data);
}
export const timerStop = (data) => {
    return actionCreatorHOF(TIMER_STOP, data);
}