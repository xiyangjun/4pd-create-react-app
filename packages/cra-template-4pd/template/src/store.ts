import { createStore, applyMiddleware, compose } from 'redux';
import { AppReducer } from './react/reducer';
import createSagaMiddleware from '@redux-saga/core';
import { demoSaga } from './react/saga/demo.saga';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(AppReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(demoSaga);

export default store;
