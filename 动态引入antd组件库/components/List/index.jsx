import React, { Component } from 'react'
import PubSub from 'pubsub-js'
export default class index extends Component {
 
  state = {
    users:[],
    isFirst:true,
    isLoading:false,
    err:false
  }
  saveUsers = (newUsers)=>{
    this.setState({users:newUsers});
  }
  changeFirst = (obj)=>{
    this.setState({obj});
  }
  changeLoading= (obj)=>{
    this.setState({obj});
  }
  catchErr = (obj)=>{
    this.setState({obj});
  }

  componentDidMount(){
    var token = PubSub.subscribe('test',(_,data)=>{
      this.setState(data);
    });
    console.log(token)
  }

  render() {
    const {users,isLoading,isFirst,err} = this.state
    return (
    
      <div className='list'>
        {
          isFirst?<h1>欢迎来到</h1>:
          isLoading?<h1>loading.....</h1>:
          err?<h1 style={{color:'red'}}>出错了</h1>:
          users.map(user=>{
            return  <div className='card'  key={user.id}>
            <a href={user.html_url}  style={{height:"20px"}}>访问主页</a>
            <img src={user.avatar_url}  alt="" />
            </div>
           
          })
        }
      </div>
      
    )
   
  }
}
