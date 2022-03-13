import React, { Component } from 'react'
import  {connect}  from 'react-redux' //引入"桥梁" 使得 UI组件与容器组件交互
import  {createIncrementAction ,createDecrementAction} from '../../redux/count_action'

//a函数的返回值作为状态传递给了UI组件 state 来源于UI组件 的props
const mapStateToProps = state=>  ({count:state})   //接收来自UI组件的pros中的state  用于传递状态

//a函数的返回值作为状态传递给了UI组件  方法   来源于UI组件 的props
const mapDispatchToProps = dispatch=>  ({ 
    jia:value=> dispatch(createIncrementAction(value)),
    jian:value=> dispatch(createDecrementAction(value))
  }) //接收来自UI组件的pros中的回调函数
//用于传递中的数据 


 class Count extends Component {
  state = {sum:0}
  componentDidMount(){
      
  }

  increment = ()=>{
      let {value} = this.selectDom
      this.props.jia(value*1)
  }

  decrement = ()=>{
      let {value} = this.selectDom
      this.props.jian(value*1)
  }

  decrementIfOdd = ()=>{

      
  }

  incrementAnsyc = ()=>{
      let {value} = this.selectDom
  }


render() {
  return (
    <div>
      <h1>times:{this.props.count}</h1>
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
export default  connect(
    state=>  ({count:state}),
    // dispatch=>  ({ 
    //     jia:value=> dispatch(createIncrementAction(value)),
    //     jian:value=> dispatch(createDecrementAction(value))
    //   })
      
    //简写方式
    {
        jia:createIncrementAction,
        jian:createDecrementAction
    }
      )(Count) //进行交互
