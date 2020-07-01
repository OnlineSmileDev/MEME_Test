import rootSaga from '../middleware/saga/rootSaga';
import Reactotron from 'reactotron-react-native'
import createSagaMiddleware from 'redux-saga';
import reactotron from '../middleware/reactron/ReactotronConfig';
import { applyMiddleware } from 'redux';

const middleware = [];
const enhancers = [];

const sagaMonitor = Reactotron.createSagaMonitor()
export const sagaMiddleware = createSagaMiddleware({ sagaMonitor })

middleware.push(sagaMiddleware);

enhancers.push(applyMiddleware(...middleware))
enhancers.push(reactotron.createEnhancer());


export const rootMiddleware = enhancers;