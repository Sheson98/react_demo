import React, { Component } from 'react'
import Count from './containers/Count' //使用react-redux 进行状态管理 引入容器组件
export default class index extends Component {
    render() {
        return (
        <div>
            <Count />
        </div>
        )
  }
}
