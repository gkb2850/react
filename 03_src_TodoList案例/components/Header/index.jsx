import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'
import './index.css'

export default class Header extends Component {
    //对接收的props的类型进行限制
    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }
    handleKeyUp = (event) => {
        const { target, keyCode } = event
        if(keyCode !== 13) {
            return
        }
        //添加的todo名字不能为空
        if (target.value.trim() === '') {
            alert('输入不能为空')
            return
        }
        let newTodo = {
            id: nanoid(),
            name: target.value,
            done: false
        }
        this.props.addTodo(newTodo)
        //清空输入
        target.value = ''
    }
    render() {
        return (
            <div className="todo-header">
              <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
            </div>
        )
    }
}
