import React, { Component } from 'react'
import { Link,Route} from 'react-router-dom'
import  About from '../About'
import  Home from '../Home'


export default class index extends Component {
  render() {
    return (
      <div>
        
          <Link to="/about"> <div style={{width:"60px"}} >About</div></Link>
          <Link to="/home"> <div style={{width:"60px"}}>Home</div></Link>
          <div style={{float:"right"}}> 
          <Route path="/about" component={About}/>
          <Route path="/home" component={Home}/>
          </div>
         

       

        
      </div>
    )
  }
}
