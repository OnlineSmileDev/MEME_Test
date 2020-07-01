import { TIMER_START, TIMER_STOP, TimerTypes } from "../actions/common/timerState";


export const timerState = {
    [TimerTypes.INTERVAL]: {}
}

export function timerReducer(state = timerState, action) {
    const { payload } = action;

    switch (action.type) {
        case TIMER_START:
            console.log('TIMER_START');
            return {
                ...state,
                [payload.type]: {
                    ...state[payload.type],
                    [payload.name]: payload.cinterval
                }
            }
        case TIMER_STOP:
            console.log('TIMER_STOP');
            let cinterval = state[payload.type][payload.name];
            if (cinterval && payload.type === TimerTypes.INTERVAL) {
                clearInterval(cinterval);
            }
            return {
                ...state,
                [payload.type]: {
                    ...state[payload.type],
                    [payload.name]: 0
                }
            }
        default:
            return {
                ...state
            }
    }
}