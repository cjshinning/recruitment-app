import React from 'react'
import ReactDOM from 'react-dom'
import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {
    BrowserRouter,
    Link,
    Route,
    Redirect,
    Switch
} from 'react-router-dom'
import App from './App'
import {counter} from './index.redux'
import Auth from './Auth'
import Dashboard from './Dashboard'

const store = createStore(counter, compose(
    applyMiddleware(thunk),
    window.devToolsExtension?window.devToolsExtension():()=>{}
))

function Erying(){
    return <h1>二营</h1>
}

function Qibinglian(){
    return <h1>骑兵连</h1>
}

class Test extends React.Component{
    render(){
        console.log(this.props)
        // this.props.history.push('/')
        return <h2>测试组件 {this.props.match.params.location}</h2>
    }
}

// 登录
//     没有登录信息 统一跳转到login
// 页面     导航+显示+注销
//     一营
//     二营
//     骑兵连
// router+redux

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                {/* 只渲染命中的第一个Route */}
                <Route path="/login" exact component={Auth}></Route>
                <Route path="/dashboard" component={Dashboard}></Route>
                <Redirect to="/dashboard"></Redirect>
            </Switch>
        </BrowserRouter>
    </Provider>
), document.getElementById('root'))
