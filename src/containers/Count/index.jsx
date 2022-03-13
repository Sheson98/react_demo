import React, { Component } from 'react'
import {Increment} from '../../reduxs/actions/count'
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
  sum:state.count
}),
{
  jiafa:Increment
})(Count) 
