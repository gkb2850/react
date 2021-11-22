import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
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
        const { value } = event.target
        this.props.handleCheck(this.props.id, value)
    }
    deleteTodo = () => {
        this.props.deleteTodo(this.props.id)
    }
    render() {
        const { name, done } = this.props
        return (
            <li style={{backgroundColor: this.state.mouse ? '#ddd' : '#fff'}} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
              <label>
                <input type="checkbox" defaultChecked={done} onChange={this.handleCheck} />
                <span>{name}</span>
              </label>
              <button className="btn btn-danger" onClick={this.deleteTodo} style={{display: this.state.mouse ? 'block' : 'none'}}>删除</button>
            </li>
        )
    }
}
