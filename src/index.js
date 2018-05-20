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
import {counter,addGun,removeGun,addGunAsync} from './index.redux'

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

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <ul>
                    <li>
                        <Link to="/">一营</Link>
                    </li>
                    <li>
                        <Link to="/erying">二营</Link>
                    </li>
                    <li>
                        <Link to="/qibinglian">骑兵连</Link>
                    </li>
                </ul>
                {/* <Redirect to="/qibinglian"></Redirect> */}
                <Switch>
                    {/* 只渲染命中的第一个Route */}
                    <Route path="/" exact component={App}></Route>
                    <Route path="/erying" component={Erying}></Route>
                    <Route path="/qibinglian" component={Qibinglian}></Route>
                    <Route path="/:location" component={Test}></Route>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
), document.getElementById('root'))
