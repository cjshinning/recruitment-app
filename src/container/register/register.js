import React from 'react'
import Logo from '../../component/logo/logo'
import { List, InputItem, WhiteSpace, WingBlank, Button, Radio } from 'antd-mobile'

class Register extends React.Component{
    constructor(){
        super()
        this.state = {
            user: '',
            pwd: '',
            repeatpwd: '',
            type: 'genius'  //或者boss
        }
        this.handleRegister = this.handleRegister.bind(this)
    }
    handleChange(key, val){
        this.setState({
            [key]: val
        })
    }
    handleRegister(){
        console.log(this.state)
    }
    render(){
        const RadioItem = Radio.RadioItem;
        return (
            <div>
                <Logo></Logo>
                <WingBlank>
                    <List>
                        <InputItem
                            onChange={v=>this.handleChange('user', v)}
                        >用户名</InputItem>
                        <InputItem
                            type="password"
                            onChange={v=>this.handleChange('pwd', v)}
                        >密码</InputItem>
                        <InputItem
                            type="password"
                            onChange={v=>this.handleChange('repeatpwd', v)}
                        >确认密码</InputItem>
                        <RadioItem 
                            checked={this.state.type==='genius'}
                            onChange={()=>this.handleChange('type', 'genius')}
                        >牛人</RadioItem>
                        <RadioItem 
                            checked={this.state.type==='boss'}
                            onChange={()=>this.handleChange('type', 'boss')}
                        >Boss</RadioItem>
                    </List>
                    <WhiteSpace></WhiteSpace>   
                    <Button type="primary" onClick={this.handleRegister}>注册</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Register