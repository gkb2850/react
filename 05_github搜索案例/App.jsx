import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {
  state = {//初始化状态
    users: [],
    isFirst: true,//是否第一次打开页面
    isLoading: false, //是否加载中
    err: '', //错误信息
  }
  updateAppState = (stateObj) => {
    this.setState(stateObj)
  }
  render() {
    return (
      <div className="container">
        <Search updateAppState={this.updateAppState}></Search>
        <List {...this.state}></List>
      </div>
    )
  }
}
