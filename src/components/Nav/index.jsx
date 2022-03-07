import React, { Component } from 'react'
import { NavLink,Route,Switch} from 'react-router-dom'
import  About from '../About'
import  Home from '../Home'
import  MyNavLink from '../MyNavLink'


export default class index extends Component {
  render() {
    return (
      <div>
          <MyNavLink activeClassName=''  children="ABout"  to="/about"/> 
          <MyNavLink  activeClassName='' children="Home" to="/home"/>
          <div style={{float:"right"}}> 

         
          <Switch>
            <Route path="/about" component={About}/>
            <Route path="/home" component={Home}/>
          </Switch>  
        
        
          </div>
       

      </div>
    )
  }
}
