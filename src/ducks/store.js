import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import promiseMiddleware from "redux-promise-middleware";


import lesson from './lessonReducer';

import user from './userReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({lesson, user})

const middlewares = composeEnhancers(applyMiddleware(promiseMiddleware()));

const store = createStore(reducers, middlewares);

export default store;