import { nanoid } from 'nanoid'
import React, { Component } from 'react'
import '../Header/header.css'
export default class Header extends Component {
  pushItem = (event)=>{
    if(event.keyCode === 13){
      if(event.target.value.trim() ===''){ alert("输入为空");return}
      const todoObj = {id:nanoid(),name:event.target.value,done:false}
      this.props.addTodo(todoObj)
    }else{
      return  false
    }
    event.target.value ="";
  }
  render() {
    return (
      <div className='todo-header'>
            <input type="text" placeholder='请输入名称，回车确定' onKeyUp={this.pushItem}/>
      </div>
    )
  }
}
