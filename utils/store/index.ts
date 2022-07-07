import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import logger from 'redux-logger';
import rootReducer from './reducers';

let sagaMiddleware = createSagaMiddleware();
export const initializeStore = () => configureStore({
  reducer: {rootReducer
  },
  middleware : (getDefaultMiddleware) => getDefaultMiddleware({ thunk:false }).prepend(sagaMiddleware).concat(logger),
});
const store = configureStore({
  reducer: {rootReducer
  },
  middleware : (getDefaultMiddleware) => getDefaultMiddleware({ thunk:false }).prepend(sagaMiddleware).concat(logger),
});


sagaMiddleware.run(rootSaga);

export default store;