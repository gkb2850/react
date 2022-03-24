import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {
    state = {
        messageArr: [
            {id: '01', title: '消息1'},
            {id: '02', title: '消息2'},
            {id: '03', title: '消息3'}
        ]
    }
    pushShow = (id, title) => {
        //push跳转+携带params参数
        // this.props.history.push(`/home/message/detail/${id}/${title}`)

        //replace跳转+携带search参数
        // this.props.history.push(`/home/message/detail?id=${id}&title=${title}`)

        //replace跳转+携带state参数
        this.props.history.push({
            pathname: '/home/message/detail',
            state: {
                id,
                title
            }
        })
    }
    replaceShow = (id, title) => {
        //replace跳转+携带params参数
        // this.props.history.replace(`/home/message/detail/${id}/${title}`)

        //replace跳转+携带search参数
        // this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`)

        //replace跳转+携带state参数
        this.props.history.replace({
            pathname: '/home/message/detail',
            state: {
                id,
                title
            }
        })
    }
    back = () => {
        this.props.history.goBack()
    }
    forward = () => {
        this.props.history.goForward()
    }
    go = () => {
        this.props.history.go(-2)
    }
    render() {
        return (
            <div>
              <ul>
                {
                    this.state.messageArr.map(i => {
                        return (
                            <li key={i.id}>
                              {/* 向路由组件传递params参数 */}
                              {/* <Link to={`/home/message/detail/${i.id}/${i.title}`}>{i.title}</Link> */}

                              {/* 向路由组件传递search参数 */}
                              <Link to={`/home/message/detail/?id=${i.id}&title=${i.title}`}>{i.title}</Link>

                              {/* 向路由组件传递state参数 */}
                              {/* <Link replace={true} to={{pathname: '/home/message/detail', state: {id: i.id, title: i.title}}}>{i.title}</Link> */}

                              &nbsp;&nbsp;<button onClick={() => this.pushShow(i.id, i.title)}>push查看</button>
                              &nbsp;&nbsp;<button onClick={() => this.replaceShow(i.id, i.title)}>replace查看</button>
                            </li>
                        )
                    })
                }
              </ul>
              <hr />
              {/* 声明接收params参数 */}
              {/* <Route path="/home/message/detail/:id/:title" component={Detail}></Route> */}

              {/* search参数无需声明接收 */}
              {/* <Route path="/home/message/detail" component={Detail}></Route> */}

              {/* state参数无需声明接收 */}
              <Route path="/home/message/detail" component={Detail}></Route>

              <button onClick={this.back}>回退</button>
              <button onClick={this.forward}>前进</button>
              <button onClick={this.go}>go</button>
            </div>
        )
    }
}
