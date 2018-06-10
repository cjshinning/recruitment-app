import React from 'react'
import Logo from '../../component/logo/logo'
import { List, InputItem, WhiteSpace, WingBlank, Button } from 'antd-mobile'
import {connect} from 'react-redux'
import {login} from '../../redux/user.redux'
import {Redirect} from 'react-router-dom'

function hello(){
    console.log('hello imooc I love react')
}

function WrapperHello(fn){
    return function(){
        console.log('before say hello')
        fn()
        console.log('after say hello')
    }
}

hello = WrapperHello(hello)

hello()

@connect(
    state=>state.user,
    {login}
)

class Login extends React.Component{
    constructor(){
        super()
        this.state = {
            user: '',
            pwd: ''
        }
        this.register = this.register.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
    }
    register(){
        this.props.history.push('/register')
    }
    handleChange(key, val){
        this.setState({
            [key]: val
        })
    }
    handleLogin(){
        this.props.login(this.state)
    }
    render(){
        return (
            <div>
                {this.props.redirectTo && this.props.redirectTo!=='/login' ? <Redirect to={this.props.redirectTo} /> : null}
                <Logo></Logo>
                <WingBlank>
                    <List>
                        {this.props.msg?<p className='error-msg'>{this.props.msg}</p>:null}
                        <InputItem
                            onChange={v=>this.handleChange('user', v)}
                        >用户</InputItem>
                        <InputItem
                            onChange={v=>this.handleChange('pwd', v)}
                            type="password"
                        >密码</InputItem>
                    </List>
                    <WhiteSpace></WhiteSpace>
                    <Button type="primary" onClick={this.handleLogin}>登录</Button>
                    <WhiteSpace></WhiteSpace>
                    <Button type="primary" onClick={this.register}>注册</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Login