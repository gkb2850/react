import React, { Component } from 'react'

const data = [
    {
        id: '01',
        content: '你好，中国'
    },
    {
        id: '02',
        content: '你好，昨天的自己'
    },
    {
        id: '03',
        content: '你好，明天的自己'
    }
]
export default class Detail extends Component {
    render() {
        //接收params参数
        const { id, title } = this.props.match.params
        const findResult = data.find((obj) => {
            return obj.id === id
        })
        return (
            <ul>
                <li>ID: {id}</li>
                <li>TITLE: {title}</li>
                <li>CONENT: {findResult.content}</li>
            </ul>
        )
    }
}
