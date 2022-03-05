import React, { Component } from 'react'
import './App.css'
import axios  from 'axios'
export default  class App extends Component{

  getStudentData = ()=>{
    axios.defaults.baseURL = 'http://localhost:5000';
    axios({
      method:"GET",
      url:'/posts'
    }).then((response)=>{
      console.log(response);
    },(error)=>{
      console.log(error);
    })
  }
  render(){
    return (  
    <div>
      <button onClick={this.getStudentData}> 点我获取学生数据 </button>
    </div>)
  }
}
