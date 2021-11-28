import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import MyNavLink from '../../components/MyNavLink'
import New from './News'
import Message from './Messages'

export default class Home extends Component {
    render() {
        console.log(this)
        return (
            <div>
              <h2>Home组件内容</h2>
              <div>
                <ul className="nav nav-tabs">
                  <li>
                    <MyNavLink to="/home/new">New</MyNavLink>
                  </li>
                  <li>
                    <MyNavLink to="/home/Message">Message</MyNavLink>
                  </li>
                </ul>
                {/* 注册路由 */}
                <Switch>
                    <Route path="/home/new" component={New}></Route>
                    <Route path="/home/Message" component={Message}></Route>
                    <Redirect to="/home/new"></Redirect>
                </Switch>
              </div>
            </div>
        )
    }
}
