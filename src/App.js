import React from 'react'

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
  addSolder(){
    console.log('hello add solder')
    this.setState({
      solders: [...this.state.solders, '新兵蛋子'+ Math.random()]
    })
  }
  render(){
    return (
      <div>
        <h2>一营营长{this.props.laoda}</h2>
        <button onClick={()=>this.addSolder()}>新兵入伍</button>
        <ul>
          {this.state.solders.map(v=>{
            return <li key={v}>{v}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default App 