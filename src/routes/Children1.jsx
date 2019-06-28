import React, { Component } from 'react'
import {connect} from 'dva'
import { Input } from 'antd';

export class Children1 extends Component {
  componentDidMount(){
    let {dispatch} = this.props;
    dispatch({
      type:'children1/setValue'
    })
  }
  changeValue=(e)=>{
    const {dispatch} = this.props;
    dispatch({
      type:'children1/changeInput',
      payload:e.target.value
    })
  }
  render() {
    return (
      <div>
        children1
        <div>
          <span className='font-18'>{this.props.inputValue}</span>
          <Input onChange={this.changeValue} />
        </div>
      </div>
    )
  }
}

// const mapStateToProps = (state) => {
//   return {...state.page}
// }

const mapStateToProps = (state) => {
  return {...state.children1}
}

export default connect(mapStateToProps)(Children1)

