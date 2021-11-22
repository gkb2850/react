//创建外壳组件
import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

//创建并暴露App组件
export default class App extends Component {
  state = {
    todos: [
      {
        id: '001',
        name: '吃饭',
        done: true
      },
      {
        id: '002',
        name: '敲代码',
        done: true
      },
      {
        id: '003',
        name: '睡觉',
        done: false
      },
      {
        id: '004',
        name: '逛街',
        done: false
      }
    ]
  }
  //addTodo用于添加一个todo，接受的参数是todo对象
  addTodo = (todoObj) => {
      const {todos} = this.state
      const newTodos= [todoObj, ...todos]
      this.setState({
        todos: newTodos
      })
  }
  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}/>
          <List todos={this.state.todos} />
          <Footer />
        </div>
      </div>
    )
  }
}
