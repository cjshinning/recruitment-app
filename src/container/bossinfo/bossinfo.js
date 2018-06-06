
import React from 'react'
import { NavBar,InputItem,WingBlank,TextareaItem,Button,WhiteSpace } from 'antd-mobile'
import AvatarSelector from '../../component/avatar-selector/avatar-selector'

class BossInfo extends React.Component{
    constructor(){
        super()
        this.state = {
            title: '',
            company: '',
            money: '',
            desc: '',
            avatar:''
        }
    }
    onChange(key,val){
        this.setState({
            [key]: val
        })
    }
    render(){
        return (
            <div>
                <NavBar mode="dark">BOSS信息完善页</NavBar>
                <AvatarSelector
                    selectAvatar={(imgname)=>{
                        this.setState({
                            avatar:imgname
                        })
                    }}
                ></AvatarSelector>
                <InputItem onChange={v=>this.onChange('title',v)}>
                    招聘职位
                </InputItem>
                <InputItem onChange={v=>this.onChange('company',v)}>
                    公司名称
                </InputItem>
                <InputItem onChange={v=>this.onChange('money',v)}>
                    职位薪资
                </InputItem>
                <TextareaItem
                    onChange={v=>this.onChange('desc',v)}
                    rows={3}
                    autoHeight
                    title="职位要求"
                />
                <WhiteSpace/>
                <WingBlank>
                    <Button type="primary">保存</Button>
                </WingBlank>
            </div>
        )
    }
}

export default BossInfo