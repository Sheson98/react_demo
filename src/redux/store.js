import reducer from './conut_reducer'
import { createStore ,applyMiddleware}  from 'redux'//applyMiddleware 异步调用中间件
import thunk from 'redux-thunk'//thunk 异步调用中间件

 export default createStore(reducer,applyMiddleware(thunk))