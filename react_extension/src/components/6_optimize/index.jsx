import React, { PureComponent } from 'react'
import './index.css'

export default class Parent extends PureComponent {
    state = {carName: '长安unik', stus: ['小张', '小李', '小王']}
    changeCar = () => {
        this.setState({carName: '奥迪'})
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     return !this.state.carName === nextState.carName
    // }
    addStu = () => {
        this.setState({stus: ['笑', ...this.state.stus]})
    }
    render() {
        console.log('parent---render')
        return (
            <div className="parent">
                <h3>我是Parent组件</h3>
                <div>我的车名字是：{this.state.carName}</div>
                <button onClick={this.changeCar}>点我换车</button>
                <button onClick={this.addStu}>添加一个笑</button>
                <Child carName={this.state.carName} />
            </div>
        )
    }
}


class Child extends PureComponent {
    // shouldComponentUpdate(nextProps) {
    //     return !this.props.carName === nextProps.carName
    // }
    render() {
        console.log('child---render')
        return (
            <div className="child">
                <h3>我是Child组件</h3>
                <div>我接到的车是：{this.props.carName}</div>
            </div>
        )
    }
}