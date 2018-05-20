import React from 'react'
import ReactDOM from 'react-dom'
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import App from './App'
import {counter,addGun,removeGun,addGunAsync} from './index.redux'

const store = createStore(counter, applyMiddleware(thunk))

function render(){
    ReactDOM.render(<App store={store} addGun={addGun} removeGun={removeGun} addGunAsync={addGunAsync}/>, document.getElementById('root'))
}

render()

store.subscribe(render)
