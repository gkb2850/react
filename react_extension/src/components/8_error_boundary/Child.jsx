import React, { Component } from 'react'

export default class Child extends Component {
    state = {
        // users: [
        //     {id: '001', name: 'tom', age: 15},
        //     {id: '002', name: 'jerry', age: 18},
        //     {id: '003', name: 'peiqi', age: 19}
        // ]
        users: 'abc'
    }
    render() {
        return (
            <div>
                <h2>我是Child组件</h2>
                {
                    this.state.users.map(i => {
                        return <h4 key={i.id}>{i.name} - {i.age}</h4>
                    })
                }
            </div>
        )
    }
}
