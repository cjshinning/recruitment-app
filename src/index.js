import {createStore} from 'redux'

// 创建reducer
function counter(state=0, action){
    switch(action.type){
        case 'ADD_GUN':
            return state + 1
        case 'REMOVE_GUN':
            return state - 1
        default:
            return 10
    }
}

// 1.新建store
let store = createStore(counter)

const init = store.getState(store)
console.log(init)

function listner(){
    const current = store.getState()
    console.log(`现在的机枪有${current}把`)
}

store.subscribe(listner)

store.dispatch({type: 'ADD_GUN'})
store.dispatch({type: 'ADD_GUN'})
store.dispatch({type: 'REMOVE_GUN'})