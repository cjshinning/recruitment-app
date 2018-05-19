import React from 'react'
import {Button,List} from 'antd-mobile'
// import 'antd-mobile/dist/antd-mobile.css'

class App extends React.Component{
  render(){
    let boss = '李云龙'
    return (
      <div>
        <h2>独立团，团长是{boss}</h2>
        <Yiying laoda='张大喵'></Yiying>
        <Qibinglian laoda='孙德胜'></Qibinglian>
      </div>
    )
  }
}

function Qibinglian(props){
  return <h2>骑兵连连长{props.laoda}，冲啊！</h2>
}

class Yiying extends React.Component{
  constructor(){
    super()
    this.state = {
      solders: [
        '虎子',
        '柱子',
        '王根生'
      ]
    }
    // this.addSolder = this.addSolder.bind(this)
  }
  componentWillMount(){
    console.log('组件将要被加载')
  }
  componentDidMount(){
    console.log('组件加载完成')
  }
  addSolder(){
    this.setState({
      solders: [...this.state.solders, '新兵蛋子'+ Math.random()]
    })
  }
  render(){
    console.log('组件正在加载')
    return (
      <div>
        <h2>一营营长{this.props.laoda}</h2>
        <Button type="primary" onClick={()=>this.addSolder()}>新兵入伍</Button>

        <List renderHeader={()=>'士兵列表'}>
          {this.state.solders.map(v=>{
            return (
              <List.Item key={v}>
                {v}
              </List.Item>
            )
          })}
        </List>
        {/* <ul>
          {this.state.solders.map(v=>{
            return <li key={v}>{v}</li>
          })}
        </ul> */}
      </div>
    )
  }
}

export default App 