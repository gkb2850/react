import React, { Component } from 'react'
import './index.css'
import axios from 'axios'
import PubSub from 'pubsub-js'

export default class Search extends Component {
    search = async () => {
        //获取用户的输入
        // const { value } = this.keyWordElement//普通写法
        // const { keyWordElement: {value}} = this//连续解构赋值
        const { keyWordElement: {value: keyWord}} = this//连续解构赋值并重新命名
        //发布消息
        PubSub.publish('atguigu', {isFirst: false, isLoading: true})
        console.log(keyWord)
        //发送网络请求---使用axios发送
        //#region 
        // axios.get(`http://localhost:3000/api1/search/users2?q=${keyWord}`).then(res => {
        //     console.log(res)
        //     PubSub.publish('atguigu', {isLoading: false, users: res.data.items})
        // }).catch(err => {
        //     console.log(err)
        //     PubSub.publish('atguigu', {isLoading: false, err: err.message})
        // })
        //#region 
        //发送网络请求---使用fetch发送（未优化）
        fetch(`/api1/search/users2?q=${keyWord}`).then(
            response => {
                console.log('联系服务器成功')
                return response.json()
            },
            error => {
                    console.log('联系服务器失败', error) 
                    return new Promise((resolve) => {
                        resolve(2)
                    })
            }
        ).then(
            responses => {
                console.log('获取数据成功')
                console.log(responses)
            }, 
            err => {
                console.log('获取数据失败', err)
            }
        )
        //发送网络请求---使用fetch发送（优化1）
        // fetch(`/api1/search/users2?q=${keyWord}`).then(
        //     response => {
        //     console.log('联系服务器成功')
        //     return response.json()
        // }).then(
        //     response => {
        //         console.log('获取数据成功')
        //         console.log(response)
        //     }).catch(err => {//统一处理错误
        //     console.log(err)
        // })
        // //发送网络请求---使用fetch发送（优化2）
        // try {
        //     const response = await fetch(`/api1/search/users2?q=${keyWord}`)
        //     const data = await response.json()
        //     console.log(data)
        //     PubSub.publish('atguigu', {isLoading: false, users: data.items})
        // } catch(err) {
        //     console.log('错误了', err)
        //     PubSub.publish('atguigu', {isLoading: false, err: err})
        // }
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
