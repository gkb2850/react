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
                            </li>
                        )
                    })
                }
              </ul>
              <hr />
              {/* 声明接收params参数 */}
              {/* <Route path="/home/message/detail/:id/:title" component={Detail}></Route> */}

              {/* search参数无需声明接收 */}
              <Route path="/home/message/detail" component={Detail}></Route>
            </div>
        )
    }
}
