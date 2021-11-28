//引入react核心库
import React from 'react'
//引入ReactDOM
import ReactDOM from 'react-dom'
//引入App组件
import App from './App'
import { HashRouter } from 'react-router-dom'

//渲染app组件到页面
ReactDOM.render(
<HashRouter>
    <App />
</HashRouter>
, document.getElementById('root'))
