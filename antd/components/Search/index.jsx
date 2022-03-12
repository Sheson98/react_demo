import React, { Component } from 'react'
import axios  from 'axios'
import PubSub from 'pubsub-js'
export default class index extends Component {

  
  
  search = ()=>{
   
    //取值
    const {keyWordNode:{value}} = this
    PubSub.publish('test',{isFirst:false})
    
    //发送网络请求
    axios.get(`https://api.github.com/search/users?q=${value}`).then(
      response=>{
        PubSub.publish('test',{users:response.data.items,isLoading:false,err:false})
      },
      error=>{
        PubSub.publish('test',{err:true})
      }
    )
 
    
  }
  render() {
    return (
      <div className='search'>
      <h2>Search Github User</h2>
      <input type="text" placeholder='输入关键字搜索' ref={(c)=>{this.keyWordNode = c}}/>
      <button onClick={this.search}>Search</button>
     </div>
    )
  }
}
