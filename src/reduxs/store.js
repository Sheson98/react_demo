import {composeWithDevTools} from 'redux-devtools-extension'
import { createStore ,applyMiddleware,combineReducers}  from 'redux'//applyMiddleware 异步调用中间件
import thunk from 'redux-thunk'//thunk 异步调用中间件

import  reducer from './reducers'

 export default createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))