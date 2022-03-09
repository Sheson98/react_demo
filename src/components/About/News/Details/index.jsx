import React, { Component } from 'react'
import qs from 'qs'


export default class details extends Component {
    render() {
        const {id,content} = this.props.location.state
        
        
        return (
        <div>
          {
              content
          }
        </div>
        )
  }
}
