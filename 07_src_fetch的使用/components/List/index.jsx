import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'

export default class List extends Component {
    state = {//初始化状态
      users: [],
      isFirst: true,//是否第一次打开页面
      isLoading: false, //是否加载中
      err: '', //错误信息
    }
    componentDidMount() {
        //订阅消息
        this.listSub = PubSub.subscribe('atguigu', (_, data) => {
            console.log(data)
            this.setState(data)
        })
    }
    componentWillUnmount() {
        PubSub.unsubscribe(this.listSub)
    }
    render() {
        const { users, isFirst, isLoading, err } = this.state
        return (
            <div className="row">
                {   isFirst ? <h2>欢迎使用，输入关键字，随后点击搜索</h2>
                    : isLoading ? <h2>Loading.......</h2>
                    : err ? <h2>{err}</h2> :
                    users.map((userObj) => {
                        return (
                            <div className="card" key={userObj.id}>
                              <a href={userObj.html_url} target="_blank" rel="noreferrer">
                                <img alt="head_portrait" src={userObj.avatar_url} style={{width: '100px'}}/>
                              </a>
                              <p className="card-text">{userObj.login}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
