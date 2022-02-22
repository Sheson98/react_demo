import React, { Component } from 'react'
import '../Item/item.css'

export default class Item extends Component {

  state = {move:false}
  changeHover  = (flag)=>{
     return ()=>{
      this.setState({move:flag})
     }

  }
  handeCheck = (id)=>{
    return (event)=>{
      debugger
      const {updateTodo} = this.props
      updateTodo(id,event.target.checked);
    }
  }


  render() {
    const {id,name,done} = this.props
    return (
      <li  style={{backgroundColor:this.state.move?"rgb(51 51 51 / 9%)":"white"}} onMouseMove={this.changeHover(true)} onMouseLeave={this.changeHover(false)}>
              <label>
                <input type="checkbox" defaultChecked={done==true?"checked":""}  onChange={this.handeCheck(id)}/>
                <span>{name}</span>
              </label>
      </li>
      
    )
  }
}
