##  路由的基本使用
        1.明确好界面中的导航区，展示区
        2.导航区的a标签改为Link标签
            <Link to="/xxxxx">Demo</Link>
        3.展示区写Route标签进行路径匹配
            <Route path="/xxxxx" component={Dome} />
        4.<App>的最外层包裹了一个<BrowserRouter>或<HashRouter>
##  路由组件与一般组件
        1.写法不同：
            一般组件：<Demo />
            路由组件： <Route path="/demo" component={Demo} />
        2.存放的位置不同
            一般组件：components
            路由组件：pages
        3.接收到的props不同
            一般组件：写组件标签时传递了什么，就能收到什么
            路由组件：接收到三个固定的属性
                    history:
                            go: ƒ go(n)
                            goBack: ƒ goBack()
                            goForward: ƒ goForward()
                            listen: ƒ listen(listener)
                            push: ƒ push(path, state)
                            replace: ƒ replace(path, state)
                    location:
                            pathname: "/home"
                            search: ""
                            state: undefined
                    match:
                            params: {}
                            path: "/home"
                            url: "/home"