import React, { Component } from 'react'
import { Link,Route,Switch } from 'react-router-dom'
import Details  from './Details'


export default class index extends Component {

  state = {data:[
    {id:1,content:"新闻详情1"},
    {id:2,content:"新闻详情2"},
    {id:3,content:"新闻详情3"},
    {id:4,content:"新闻详情4"},
    {id:5,content:"新闻详情5"}
  ]}


  render() {
    const {data} = this.state
    return (
        <div>
           {
              data.map(item=>{
                return (
                  <li key={item.id}>
                     <Link    children={item.content}  to={{pathname:`/about/news/details`,state:{id:item.id,content:item.content}}}></Link>
                  </li>
                )
              })
           }
            <Route path="/about/news/details" component={Details}/>
         </div>
    )
  }
}
