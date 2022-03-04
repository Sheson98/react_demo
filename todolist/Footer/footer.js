import React, { Component } from 'react'
import '../Footer/footer.css'
export default class Footer extends Component {

  handecheckAll = (event)=>{
    this.props.checkAll(event.target.checked)
  }
  handeClearHadCheck = ()=>{
    this.props.clearHadCheck();
  }
  render() {
    const {todos} = this.props
    let hadCheck = todos.filter(m=>m.done === true).length
    let allCheck = todos.length
    
    return (
      <div className='todo-footer'>
          <label>
            <input  type="checkbox" checked={hadCheck === allCheck&&allCheck!=0?true:false} onChange={this.handecheckAll}/>
          </label>
          <span>
            <span>
            已完成{hadCheck}/全部{allCheck}
            </span>
          </span>
          <button className='btn btn-danger' onClick={this.handeClearHadCheck}>清除已完成任务</button>
      </div>
    )
  }
}
