import React, { Component } from 'react'
import qs from 'querystring'

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
        // const { id, title } = this.props.match.params

        //接收search参数
        const { search } = this.props.location
        const { id, title } = qs.parse(search.slice(1))

        
        console.log(this.props)
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
