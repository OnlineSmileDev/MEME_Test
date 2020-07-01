import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import Reactotron from 'reactotron-react-native'

//import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import { rootMiddleware, sagaMiddleware } from '../../middleware/rootMiddleware';
import rootSaga from "../../middleware/saga/rootSaga";
import { screenReducer, screenState } from "./screen/screenReducer";
import { userReducer, userState } from "./user/userReducer";
import { memeItemReducer, memeItemState } from "./memeitem/memeItemReducer";
import { matchesReducer, matchesState } from "./user/matchesReducer";
import { timerState, timerReducer } from "../common/timerReducer";
import { RESETUSER_SUCCESS } from "../actions/api/userApiActions";
import { chatState, chatReducer } from "./chat/chatReducer";

const appReducers = combineReducers({
    user: userReducer,
    screen: screenReducer,
    memeItems: memeItemReducer,
    matches: matchesReducer,
    chats: chatReducer,
    timers: timerReducer
});

const reducers = (state, action) => {
    if (action.type === RESETUSER_SUCCESS) {
        AsyncStorage.removeItem('root');
        state = undefined;
    };
    return appReducers(state, action);
}
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    stateReconciler: autoMergeLevel2,
    timeout: null
};

const initState = {
    user: userState,
    screen: screenState,
    memeItems: memeItemState,
    matches: matchesState,
    chats: chatState,
    timers: timerState
};

const persistedReducer = persistReducer(persistConfig, reducers);


export const store = createStore(persistedReducer, initState, compose(...rootMiddleware));

sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);