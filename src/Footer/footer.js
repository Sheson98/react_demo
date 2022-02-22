import React, { Component } from 'react'
import '../Footer/footer.css'
export default class Footer extends Component {
  render() {
    return (
      <div className='todo-footer'>
          <label>
            <input  type="checkbox"/>
          </label>
          <span>
            <span>
            已完成0/全部
            </span>
          </span>
          <button className='btn btn-danger'>清除已完成任务</button>
      </div>
    )
  }
}
