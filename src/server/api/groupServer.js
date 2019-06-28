import Base from './Base';
import {baseUrl} from '../config'

class GroupServer extends Base {
  constructor(){
    super();
    this.url = baseUrl+'/core/group'
    let group = window.localStorage.getItem('groupId');
    this.header = {
      "GxUser-PosOtype":2,
      "GxUser-PosOid": group
    }
  }
  create(option={}){
    this.header = {
      "GxUser-PosOtype":0,
      "GxUser-PosOid": 0
    }
    return new Promise((resolve,reject)=>{
      this.post('/create',option).then(res=>this._handle(resolve,reject,res)).catch(err=>reject(err));
    })
  }
  del(option={}){

    let formdata = this.toformdata(option);
    return new Promise((resolve,reject)=>{
      this.post('/del',formdata).then(res=>this._handle(resolve,reject,res)).catch(err=>reject(err));
    })
  }

  updategroup(option={}){
    return new Promise((resolve,reject)=>{
      this.post('/updategroup',option).then(res=>this._handle(resolve,reject,res)).catch(err=>reject(err));
    })
  }

  querygroup(option={}){
    this.header = {
      "GxUser-PosOtype":0,
      "GxUser-PosOid": 0
    }
    return new Promise((resolve,reject)=>{
      this.post('/querygroup',option).then(res=>this._handle(resolve,reject,res)).catch(err=>reject(err));
    })
  }
  encrypt(option={}){
    return new Promise((resolve,reject)=>{
      this.post('/encrypt',option).then(res=>this._handle(resolve,reject,res)).catch(err=>reject(err));
    })
  }
  invite(option={}){
    this.getHeader();
    return new Promise((resolve,reject)=>{
      this.post('/invite',option).then(res=>this._handle(resolve,reject,res)).catch(err=>reject(err));
    })
  }
  addmemberbyuids(option={}){
    this.getHeader();
    return new Promise((resolve,reject)=>{
      this.post('/addmemberbyuids',option).then(res=>this._handle(resolve,reject,res)).catch(err=>reject(err));
    })
  }
  addmember(option={}){
    this.getHeader();
    return new Promise((resolve,reject)=>{
      let formdata = this.toformdata(option)
      this.post('/addmember',formdata).then(res=>this._handle(resolve,reject,res)).catch(err=>reject(err));
    })
  }
  removemember(option={}){
    this.getHeader();
    let formdata = this.toformdata(option);
    return new Promise((resolve,reject)=>{
      this.post('/removemember',formdata).then(res=>this._handle(resolve,reject,res)).catch(err=>reject(err));
    })
  }
  updatemember(option={}){
    this.getHeader();
    return new Promise((resolve,reject)=>{
      this.post('/updatemember',option).then(res=>this._handle(resolve,reject,res)).catch(err=>reject(err));
    })
  }
  querymember(option={}){
    this.getHeader();
    return new Promise((resolve,reject)=>{
      this.post('/querymember',option).then(res=>this._handle(resolve,reject,res)).catch(err=>reject(err));
    })
  }
  setmenberpurview(option={}){
    this.getHeader();
    let formdata = this.toformdata(option)
    return new Promise((resolve,reject)=>{
      this.post('/setmenberpurview',formdata).then(res=>this._handle(resolve,reject,res)).catch(err=>reject(err));
    })
  }
  transfermanager(option={}){
    let formdata = this.toformdata(option)
    this.getHeader();
    return new Promise((resolve,reject)=>{
      this.post('/transfermanager',formdata).then(res=>this._handle(resolve,reject,res)).catch(err=>reject(err));
    })
  }
}

export default new GroupServer();