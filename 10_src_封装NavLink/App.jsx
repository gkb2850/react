import React, { Component } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'//Home是路由组件
import About from './pages/About'//About是路由组件
import Header from './components/Header'//Header是一般组件
import MyNavLink from './components/MyNavLink'

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <Header></Header>
          </div>
        </div>
          <div className="row">
            <div className="col-xs-2 col-xs-offset-2">
              <div className="list-group">
                {/* 原生html中，靠<a>跳转不同的页面 */}
                {/* <a className="list-group-item" href="./about.html">About</a>
                <a className="list-group-item active" href="./home.html">Home</a> */}
                {/* 在React中靠路由链接实现切换组件 */}
                {/* NavLink默认给选中的加上active类名 如果想改就加activeClassName */}
                  <MyNavLink to="/home">Home</MyNavLink>
                  <MyNavLink to="/about">About</MyNavLink>
              </div>
            </div>
            <div className="col-xs-6">
              <div className="panel">
                <div className="panel-body">
                  {/* 注册路由 react-router-dom v5版本 */}
                    <Route path="/about" component={About} />
                    {/* <Route path="/home" component={Home} /> */}
                    <Route path="/home" render={routeProps => (
                      <Home routeProps={routeProps} animate={true} />
                    )}></Route>
                    {/* 注册路由 react-router-dom v6版本 */}
                    {/* <Routes>
                      <Route path="/about" element={<About />} />
                      <Route path="/home" element={<Home />} />
                    </Routes> */}
                </div>
              </div>
            </div>
          </div>
      </div>
    )
  }
}
