import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class Item extends Component {
    static propTypes = {
        updateTodo: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired
    }
    state = {
        mouse: false
    }
    handleMouse = (flag) => {
        return () => {
            this.setState({
                mouse: flag
            })
        }
    }
    //勾选选择
    handleCheck = (event) => {
        const { checked } = event.target
        this.props.updateTodo(this.props.id, checked)
    }
    deleteTodo = () => {
        if (window.confirm('确定删除吗?')) {
            this.props.deleteTodo(this.props.id)
        }
    }
    render() {
        const { name, done } = this.props
        return (
            <li style={{backgroundColor: this.state.mouse ? '#ddd' : '#fff'}} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
              <label>
                <input type="checkbox" checked={done} onChange={this.handleCheck} />
                <span>{name}</span>
              </label>
              <button className="btn btn-danger" onClick={this.deleteTodo} style={{display: this.state.mouse ? 'block' : 'none'}}>删除</button>
            </li>
        )
    }
}
