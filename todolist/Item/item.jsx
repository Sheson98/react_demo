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
      const {updateTodo} = this.props
      updateTodo(id,event.target.checked);
    }
  }
  handeDelete = (id)=>{
    return ()=>{
      if(window.confirm("确定删除?")){this.props.delTodo(id);}
       
    }

  }

  render() {
    const {id,name,done} = this.props;
    const {move} = this.state
    return (
      <li  style={{backgroundColor:this.state.move?"rgb(51 51 51 / 9%)":"white"}} onMouseMove={this.changeHover(true)} onMouseLeave={this.changeHover(false)}>
              <label>
                <input type="checkbox" checked={done==true?"checked":""}  onChange={this.handeCheck(id)}/>
                <span>{name}</span>
              </label>
              <button className='btn btn-danger' style={{display:move?'block':'none'}} onClick={this.handeDelete(id)}>删除</button>
      </li>
      
    )
  }
}
