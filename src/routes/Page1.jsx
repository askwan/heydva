import React, { Component } from 'react'
import { connect } from 'dva';
import { Button, DatePicker, Modal } from 'antd';
import { Link } from 'dva/router'
import VertRoute from '../VertRoute';
import Children1 from './Children1';
import Children2 from './Children2';
import './page.scss';

export class Page1 extends Component {
  state={
    show:false
  }
  open=()=>{
    this.setState({
      show:true
    })
  }
  close=()=>{
    this.setState({
      show:false
    })
  }
  render() {
    return (
      <div>
        <Link to='/page/children1'>
          <Button>children1</Button>
        </Link>
        <Link to='/page/children2'>
          <Button type='primary'>children2</Button>
        </Link>
        <DatePicker />
        <Button onClick={this.open}>diagol</Button>

        <div>
          <VertRoute path='/page/children1' component={Children1} />
          <VertRoute path='/page/children2' component={Children2} />
        </div>
        <Modal visible={this.state.show} onCancel={this.close} maskClosable={true}>
          something
        </Modal>
      </div>
    )
  }
}

export default connect()(Page1)
