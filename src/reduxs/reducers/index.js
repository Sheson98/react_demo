
import count from './count'
import person from './person'
import {combineReducers}  from 'redux'//applyMiddleware 异步调用中间件

export  default combineReducers({
    count,person
})
