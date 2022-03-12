import React, { Component } from 'react'
import { NavLink,Route} from 'react-router-dom'
export default class index extends Component {
  render() {
    return (
      <div>
          <NavLink {...this.props}/>     
      </div>
    )
  }
}
