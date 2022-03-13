import {INCREMENT} from '../const'


export const Increment = (data)=>{
    return({type:INCREMENT,data:data*1})
}
export const Decrement = (data)=>{
    return({type:"decrement",data:data*1})
}
//redux action 返回必须是一个Obeject 表明是同步任务 如果返回值为function 则是利用中间件去实现异步调用

export const createIncrementAnsycAction= (data,time)=>{
    return(dispatch)=>{
        setTimeout(()=>{
            dispatch(Increment(data));
        },time)
    }
}//返回值为function类型 说明是异步任务，但action 要求必须是对象，无法在action内部执行，借助store库中中间件applyMiddleware和thunk以完成异步任务