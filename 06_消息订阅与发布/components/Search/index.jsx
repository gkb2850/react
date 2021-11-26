import React, { Component } from 'react'
import './index.css'
import axios from 'axios'
import PubSub from 'pubsub-js'

export default class Search extends Component {
    search = () => {
        //获取用户的输入
        // const { value } = this.keyWordElement//普通写法
        // const { keyWordElement: {value}} = this//连续解构赋值
        const { keyWordElement: {value: keyWord}} = this//连续解构赋值并重新命名
        //发布消息
        PubSub.publish('atguigu', {isFirst: false, isLoading: true})
        console.log(keyWord)
        //发送网络请求
        axios.get(`http://localhost:3000/api1/search/users?q=${keyWord}`).then(res => {
            console.log(res)
            PubSub.publish('atguigu', {isLoading: false, users: res.data.items})
        }).catch(err => {
            console.log(err)
            PubSub.publish('atguigu', {isLoading: false, err: err.message})
        })

    }
    render() {
        return (
            <section className="jumbotron">
              <h3 className="jumbotron-heading">搜索github用户</h3>
              <div>
                <input type="text" ref={ c => this.keyWordElement = c} placeholder="输入关键字搜索"/>&nbsp;<button onClick={this.search}>搜索</button>
              </div>
            </section>
        )
    }
}
