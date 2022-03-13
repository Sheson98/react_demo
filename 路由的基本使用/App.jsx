import React, { Component } from 'react'
import 'element-theme-default';
import './App.css'
import Search from './components/Search'
import List from './components/List'
import Nav from './components/Nav'


export default  class App extends Component{
 
  render(){
    return (  
      <div className="container">
        <Search/>
        <List/>
        <Nav/>


      </div>)
  }
}

