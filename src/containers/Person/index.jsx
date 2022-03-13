import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import { connect } from 'react-redux';
import {createAddPersonAction} from '../../reduxs/actions/person'
class Person extends Component {
    addPerson =()=>{
        const name = this.namaNode.value;
        const age = this.ageNode.value;
        const personObj = {id:nanoid(),name,age}
        this.props.add(personObj);
    }


  render() {
    return (
      <div>
          <h2>我是Person组件 上方求和为{this.props.sum}</h2>
          <input type="text" placeholder='输入姓名' ref={event=>this.namaNode = event} />
          <input type="text" placeholder='输入年龄' ref={event=>this.ageNode = event} />
          <button onClick={this.addPerson}>添加</button>
          <ul>
             {this.props.yiduiren.map(m=>{
                 return <li key= {m.id}>名称:{m.name} 年龄:{m.age}</li>
             })}
          </ul>
      </div>
    )
  }
}
export default connect(
    state=>({
       yiduiren:state.person,
       sum:state.he
    }),
    {
        add:createAddPersonAction
    }
)(Person)