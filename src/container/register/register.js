import React from 'react'
import Logo from '../../component/logo/logo'
import { List, InputItem, WhiteSpace, WingBlank, Button, Radio } from 'antd-mobile'

class Register extends React.Component{
    constructor(){
        super()
        this.state = {
            type: 'genius'  //或者boss
        }
    }
    render(){
        const RadioItem = Radio.RadioItem;
        return (
            <div>
                <Logo></Logo>
                <WingBlank>
                    <List>
                        <InputItem>用户名</InputItem>
                        <InputItem>密码</InputItem>
                        <InputItem>确认密码</InputItem>
                        <RadioItem checked={this.state.type==='genius'}>牛人</RadioItem>
                        <RadioItem checked={this.state.type==='boss'}>Boss</RadioItem>
                    </List>
                    <WhiteSpace></WhiteSpace>   
                    <Button type="primary" onClick={this.register}>注册</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Register