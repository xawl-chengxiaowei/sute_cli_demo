import { createStore,applyMiddleware,compose } from 'redux'

import thunk from 'redux-thunk';//中间件
import Reducer  from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;//redux 扩展的使用

const store =  createStore(Reducer,composeEnhancers(
    applyMiddleware(thunk)
))

export default store