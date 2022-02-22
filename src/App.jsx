import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import Header from './Header/header'
import List   from './List/list'
import Footer from './Footer/footer'
import './App.css'

export default class App extends Component {
  state = {todos:[
    {"id":1,"name":"吃饭",done:false},
    {"id":2,"name":"睡觉",done:false},
    {"id":3,"name":"写代码",done:true},
    {"id":4,"name":"洗澡",done:true}
  ]}

  addTodo = (todoObj)=>{
    const {todos} = this.state
    const newTodos = [todoObj,...todos]
    this.setState({todos:newTodos})
    return ;
  }
  updateTodo =(id,done)=>{
    const {todos} = this.state
    let newtodos = todos.map(m=>{
      if(m.id === id) return {...m,done}
      else{
        return m;
      }
    })
    this.setState({todos:newtodos})
  }
  render() {
    return (
      <div className='todo-container'>
        <div className='todo-wrap'>
          <Header addTodo ={this.addTodo} />
          <List todos={this.state.todos} updateTodo={this.updateTodo}/>
          <Footer/>
        </div>
         
      </div>
      
    )
  }
}
