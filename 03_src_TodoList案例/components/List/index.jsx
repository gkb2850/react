import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'
import './index.css'

export default class List extends Component {
    static propTypes = {
        todos: PropTypes.array.isRequired,
        updateTodo: PropTypes.func.isRequired
    }
    static defaultProps = {
        todos: []
    }
    render() {
        const { todos } = this.props
        return (
            <ul className="todo-main">
                {
                    todos.map(i => {
                        return <Item key={i.id} {...i} updateTodo={this.props.updateTodo} deleteTodo={this.props.deleteTodo}/>
                    })
                }
            </ul>
        )
    }
}
