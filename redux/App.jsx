import React, { Component } from 'react'
import store  from './redux/store'
 import {createDecrementAction,createIncrementAction,createIncrementAnsycAction} from'./redux/count_action'

export default class App extends Component {
    state = {sum:0}
    componentDidMount(){
        store.subscribe(()=>{
            this.setState({})
        })
    }
  
    increment = ()=>{
        let {value} = this.selectDom
        store.dispatch(createIncrementAction(value));
    }

    decrement = ()=>{
        let {value} = this.selectDom
        store.dispatch(createDecrementAction(value));
    }

    decrementIfOdd = ()=>{
        let {sum} =  this.state
        let {value} = this.selectDom
        if( Number(sum)%2){
            this.setState({sum:sum+=Number(value)});
        }
      
   
        
    }

    incrementAnsyc = ()=>{
        let {value} = this.selectDom
        store.dispatch(createIncrementAnsycAction(value,500));
    }

    render() {
        return (
        <div>
            <h1>times:{store.getState()}</h1>
            <select style={{padding:"0px 20px"}} ref={ele =>{ return this.selectDom = ele}} >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <button style={{margin:"21px"}} onClick={this.increment}>+</button>
            <button  style={{margin:"21px"}} onClick={this.decrement}>-</button>
            <button  style={{margin:"21px"}} onClick={this.decrementIfOdd}>和为奇数再加</button>
            <button  style={{margin:"21px"}} onClick={this.incrementAnsyc}>异步加</button>
        </div>
        )
  }
}
