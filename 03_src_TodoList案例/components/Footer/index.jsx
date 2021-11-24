import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class Footer extends Component {
    static propTypes = {
        todos: PropTypes.array.isRequired
    }
    handleCheckAll = (event) => {
        this.props.checkAllTodo(event.target.checked)
    }
    deleteTodoAll = () => {
        this.props.deleteTodoAll()
    }
    render() {
        const { todos } = this.props
        //已完成的个数
        const doneCount = todos.reduce((pre, current) => {
            return pre + (current.done ? 1 : 0)
        }, 0)
        //总数
        const total = todos.length
        return (
            <div className="todo-footer">
              <label>
                <input type="checkbox" checked={(doneCount === total) && total !== 0 ? true : false} onChange={this.handleCheckAll} />
              </label>
              <span>
                <span>已完成{doneCount}</span> / 全部{total}
              </span>
              <button className="btn btn-danger" onClick={this.deleteTodoAll}>清除已完成任务</button>
            </div>
        )
    }
}
