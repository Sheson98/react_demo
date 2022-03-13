import React, { Component } from 'react'
import {createIncrementAction} from '../../redux/count_action'
import {connect} from 'react-redux'

 class Count extends Component {

  add = ()=>{
    this.props.jiafa(1)
  }
  render() {
    return (
      <div>
        <h1>当前求和为:{this.props.sum}</h1>
        <button onClick={this.add}>点我加1</button>
      </div>
    )
  }
}
export default connect(
  state=>({
  sum:state
}),
{
  jiafa:createIncrementAction
})(Count) 
