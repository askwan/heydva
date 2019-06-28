import Base from './Base'
import {baseUrl} from '../config'

class UserServer extends Base {
  constructor(){
    super();
    this.url = baseUrl+'/core/user'
  }
  getPreview(option={otId:0,posId:0}){
    if(!option.posId) option.otId = 0;
    this.header = {
      "GxUser-PosOtype":option.otId||0,
      "GxUser-PosOid": option.posId||0
    }
    return new Promise((resolve,reject)=>{
      this.post('/mypurview',{}).then(res=>{
        this._handle(resolve,reject,res)
      }).catch(err=>reject(err));
    })
  }
  updateUser(option){
    this.header = {
      "GxUser-PosOtype":0,
      "GxUser-PosOid": 0
    }
    return new Promise((resolve,reject)=>{
      this.post('/update',option).then(res=>this._handle(resolve,reject,res)).catch(err=>reject(err));
    })
  }
  getUser(option){
    this.header = {
      "GxUser-PosOtype":0,
      "GxUser-PosOid": 0
    }
    return new Promise((resolve,reject)=>{
      this.post('/query',option).then(res=>this._handle(resolve,reject,res)).catch(err=>reject(err));
    })
  }
}

export default new UserServer();