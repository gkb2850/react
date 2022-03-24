import React, { Component } from 'react'
import reactDOM from 'react-dom'

// class Demo extends Component {
//     state = {count: 0}
//     myRef = React.createRef()
//     componentDidMount() {
//         this.timer = setInterval(() => {
//             this.setState(state => ({count: state.count + 1}))
//         }, 1000)
//     }
//     add = () => {
//         this.setState(state => ({count: state.count + 1}))
//     }
//     unmount = () => {
//         reactDOM.unmountComponentAtNode(document.getElementById('root'))
//     }
//     show = () => {
//         alert(this.myRef.current.value)
//     }
//     componentWillUnmount() {
//         clearInterval(this.timer)
//     }
//     render() {
//         return (
//             <div>
//                 <input type="text" ref={this.myRef} />
//                 <h2>当前求和为{this.state.count}</h2>
//                 <button onClick={this.add}>点我+1</button>
//                 <button onClick={this.unmount}>卸载组件</button>
//                 <button onClick={this.show}>点击提示数据</button>
//             </div>
//         )
//     }
// }

function Demo() {
    //React.useState返回一个数组，第一个值为状态，第二个值为更新状态的方法
    const [count, setCount] = React.useState(0)
    //useEffect可以传递两个参数,第二个参数有监测的意思,不传监测所有人，[]所有人都不监测
    React.useEffect(() => {
       let timer = setInterval(() => {
           setCount(count => count + 1)
       }, 1000)
       return () => {
           clearInterval(timer)
       }
    }, [])
    const myRef = React.useRef()
    function add() {
        // setCount(count + 1)//第一种写法
        setCount(count => count + 1)//第二种写法
    }
    function unmount() {
        reactDOM.unmountComponentAtNode(document.getElementById('root'))
    }
    function show() {
        alert(myRef.current.value)
    }

    return (
        <div>
            <input type="text" ref={myRef} />
            <h2>当前求和为{count}</h2>
            <button onClick={add}>点我+1</button>
            <button onClick={unmount}>卸载组件</button>
            <button onClick={show}>点我提示数据</button>
        </div>
    )
}

export default Demo
