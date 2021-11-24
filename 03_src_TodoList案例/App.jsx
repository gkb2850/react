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
  updateTodo = (id, value) => {
    const { todos } = this.state
    let newTodos = todos.map(i => {
      if (i.id === id) return {...i, done: value}
      else return i
    })
    this.setState({
      todos: newTodos
    })
  }
  deleteTodo = (id) => {
    const { todos } = this.state
    let newTodos = todos.filter(i => i.id !== id)
    this.setState({
      todos: newTodos
    })
  }
  checkAllTodo = (value) => {
    const { todos } = this.state
    let newTodos = todos.map(i => {
      return {...i, done: value}
    })
    this.setState({
      todos: newTodos
    })
  }
  deleteTodoAll = () => {
    const { todos } = this.state
    let newTodos = todos.filter(i => !i.done)
    let selTodos = todos.filter(k => k.done)
    if (selTodos.length) {
      if (window.confirm('确定清除所有已完成的?')) this.setState({todos: newTodos})
    } else {
      alert('请先选择')
    }
  }
  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}/>
          <List todos={this.state.todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
          <Footer todos={this.state.todos} checkAllTodo={this.checkAllTodo}  deleteTodoAll={this.deleteTodoAll}/>
        </div>
      </div>
    )
  }
}
