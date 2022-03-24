import React, { Component } from 'react'
import './index.css'

//创建Context对象
const MyContext = React.createContext()
const { Provider, Consumer } = MyContext
export default class A extends Component {
    state = {username: 'tom', age: 18}
    render() {
        const { username, age} = this.state
        return (
            <div className="parent">
                <h3>我是A组件</h3>
                <h4>我的用户名是：{this.state.username}</h4>
                <Provider value={{username, age}}>
                    <B></B>
                </Provider>
            </div>
        )
    }
}

class B extends Component {
    render() {
        return (
            <div className="child">
                <h3>我是B组件</h3>
                <h4>我从A组件接收到的用户名是：</h4>
                <C></C>
            </div>
        )
    }
}

// class C extends Component {
//     static contextType = MyContext
//     render() {
//         console.log(this)
//         return (
//             <div className="grand">
//                 <h3>我是C组件</h3>
//                 <h4>我从A组件接收到的用户名是：{this.context.username}, 年龄是：{this.context.age}</h4>
//             </div>
//         )
//     }
// }

function C() {
    return (
        <div className="grand">
            <h3>我是C组件</h3>
            <h4>我从A组件接收到的用户名是：
                <Consumer>
                    {value => `${value.username}, 年龄是：${value.age}`}
                </Consumer>
            </h4>
        </div>
    )
}


