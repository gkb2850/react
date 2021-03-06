import React, { Component } from 'react'
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/count_action'
//引入connect用于连接UI组件与redux
import { connect } from 'react-redux'

//定义UI组件
class Count extends Component {
    increment = () => {
        let { value } = this.selectNumber
        this.props.jia(value * 1)
    }
    decrement = () => {
        let { value } = this.selectNumber
        this.props.jian(value * 1)
    }
    incrementIfOdd = () => {
        let { value } = this.selectNumber
        if (this.props.count % 2 !== 0) {
            this.props.jia(value * 1)
        }
    }
    incrementAsync = () => {
        let { value } = this.selectNumber
        this.props.jiaAsync(value * 1, 500)
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>当前的求和为： {this.props.count}</h1>
                <select ref={ c => this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
                <button onClick={this.incrementAsync}>异步加</button>
            </div>
        )
    }
}

//使用connect()()创建并暴露一个Count的容器组件
export default connect(
    state => ({ count: state}), 
    //mapDispatchToProps的一般写法
    // dispatch =>  ({
    //     jia: data => dispatch(createIncrementAction(data)),
    //     jian: data => dispatch(createDecrementAction(data)),
    //     jiaAsync: (data, time) => dispatch(createIncrementAsyncAction(data, time))
    // })
    //mapDispatchToProps的简写
    {
        jia:createIncrementAction,
        jian: createDecrementAction,
        jiaAsync: createIncrementAsyncAction
    }
)(Count)