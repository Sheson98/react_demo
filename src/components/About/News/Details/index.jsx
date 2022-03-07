import React, { Component } from 'react'



export default class details extends Component {
    render() {
        const {match:{params:data}} = this.props
        return (
        <div>
          {
              data.content
          }
        </div>
        )
  }
}
