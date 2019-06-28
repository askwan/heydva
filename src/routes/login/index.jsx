import React, { Component } from 'react'

import { connect } from 'dva'

import { Card, Input, Form,Button } from 'antd';

import logo from '@/assets/logo.png'

export class index extends Component {
  state={}
  pathTo=()=>{

  }
  login=()=>{
    const {dispatch,form} = this.props
    form.validateFields((err,values)=>{
      if(!err){

        dispatch({type:'global/clearUser'})
        dispatch({
          type:'global/login',
          payload:values
        })
      }
      
    })
  }

  render() {
    const {getFieldDecorator } = this.props.form;
    return (
      <div className='fill flex-center' style={{paddingBottom:120}}>
        <Card style={{width:400}}>
          <div className="flex-center">
            {/* <div style={{width:120,height:60,background:'rgba(0,0,0,.1)'}}> */}
              <img style={{width:100,height:100}} src={logo} alt=""/>
            {/* </div> */}
          </div>
          <Form labelCol={{span:6}} wrapperCol={{span:18}}>
            <Form.Item label='用户名'>
              {
                getFieldDecorator('userName',{
                  rules:[{required:true,message:'请输入用户名'}]
                })(
                  <Input autoComplete='off' onPressEnter={this.login} />
                )
              }
            </Form.Item>
            <Form.Item label='密码'>
              {
                getFieldDecorator('password',{
                  rules:[{required:true,message:'请输入密码'}]
                })(
                  <Input.Password onPressEnter={this.login} />
                )
              }
            </Form.Item>
            
            <Form.Item wrapperCol={{span:24}}>
              <Button block type='primary' onClick={this.login}>登录</Button>
            </Form.Item>

            <Form.Item wrapperCol={{span:24}}>
              {/* <div className='pull-right'>
              <a>注册</a>
              </div> */}
              <Button block onClick={this.pathTo}>注册</Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

export default connect(mapStateToProps)(Form.create({})(index))
