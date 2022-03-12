import React, { Component } from 'react'
import { Route ,Switch} from 'react-router-dom'
import MyNavLink from '../MyNavLink'
import Message from './Message/index'
import News from './News/index'
export default class index extends Component {
  render() {
    return (
      <div>
        <h1>我是about 的内容</h1>
        <div>
          <MyNavLink  activeClassName=''  children="message" to="/about/message"/>
          <MyNavLink  activeClassName=''  children="news" to="/about/news"/>
           
          <Switch>
            <Route path="/about/message" component={Message}/>
            <Route path="/about/news" component={News}/>
          </Switch>  
        
        </div>

      </div>
      
    )
  }
}
