import React, { Component } from 'react'
import Item from '../Item/item'
import '../List/list.css'

export default class List extends Component {

  render() {
    const {todos,delTodo,updateTodo} = this.props
    
    return (
      <ul className='todo-main'>
      {
        todos.map((todo)=>{return <Item key={todo.id} {...todo}  updateTodo={updateTodo} delTodo={delTodo} />})
      }
      </ul>
    )
  }
}
