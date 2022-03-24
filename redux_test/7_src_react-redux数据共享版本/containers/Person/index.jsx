import React, { Component } from 'react'
import { connect } from 'react-redux'
import { nanoid } from 'nanoid'
import { creatAddPersonAction } from '../../redux/actions/person'

class Person extends Component {
    addPerson = () => {
        const name = this.nameNode.value
        const age = this.ageNode.value
        const personObj = {id: nanoid(), name, age}
        this.props.add(personObj)
        this.nameNode.value = ''
        this.ageNode.value = ''
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <h2>我是Person组件，上方组件求和为：{this.props.count}</h2>
                <input ref={c => this.nameNode = c} type="text" placeholder="输入名字" />
                <input ref={c => this.ageNode = c} type="text" placeholder="输入年龄" />
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    {
                        this.props.person.map(i => {
                            return (
                                <li key={i.id}>名字{i.name}---年龄{i.age}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default connect(state => ({person: state.person, count: state.count}), {
    add: creatAddPersonAction
})(Person)
