import React from 'react'
import Logo from '../../component/logo/logo'
import { List, InputItem, WhiteSpace, WingBlank, Button } from 'antd-mobile'
import {connect} from 'react-redux'
import {login} from '../../redux/user.redux'
import {Redirect} from 'react-router-dom'
import imoocForm from '../../component/imooc-form/imooc-form'

// function hello(){
//     console.log('hello imooc I love react')
// }

// function WrapperHello(fn){
//     return function(){
//         console.log('before say hello')
//         fn()
//         console.log('after say hello')
//     }
// }

// hello = WrapperHello(hello)

// hello()

// 属性代理
// function WrapperHello(Comp){
//     class WrapComp extends Comp{
//         componentDidMount(){
//             console.log('高阶组件新增的生命周期，加载完成')
//         }
//         render(){
//             return <Comp></Comp>     
//         }
//     }
    // class WrapComp extends React.Component{
    //     render(){
    //         return(
    //             <div>
    //                 <p>这是HOC高阶组件特有的元素</p>
    //                 <Comp name='text' {...this.props}></Comp>
    //             </div>
    //         )
    //     }
    // }
//     return WrapComp
// }



// @WrapperHello
// class Hello extends React.Component{
//     render(){
//         return <h2>hello imooc I love React&Redux</h2>
//     }
// }

@connect(
    state=>state.user,
    {login}
)
@imoocForm

class Login extends React.Component{
    constructor(){
        super()
        this.register = this.register.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
    }
    register(){
        this.props.history.push('/register')
    }
    handleLogin(){
        this.props.login(this.props.state)
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
                            onChange={v=>this.props.handleChange('user', v)}
                        >用户</InputItem>
                        <InputItem
                            onChange={v=>this.props.handleChange('pwd', v)}
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