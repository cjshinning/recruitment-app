import React from 'react'
import ReactDOM from 'react-dom'
import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {BrowserRouter,Link,Route} from 'react-router-dom'
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
                <Route path="/" exact component={App}></Route>
                <Route path="/erying" component={Erying}></Route>
                <Route path="/qibinglian" component={Qibinglian}></Route>
            </div>
        </BrowserRouter>
    </Provider>
), document.getElementById('root'))
