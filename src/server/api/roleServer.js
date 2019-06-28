import Base from "./Base";
import {baseUrl} from '../config'

class RoleServer extends Base {
  constructor(){
    super();
    this.url = baseUrl+'/core/role';
    let group = window.localStorage.getItem('groupId');
    this.header = {
      "GxUser-PosOtype":2,
      "GxUser-PosOid": group
    }
  }
  createrole(option={}){
    this.getHeader();
    return new Promise((resolve,reject)=>{
      this.post('/create',option).then(res=>this._handle(resolve,reject,res)).catch(err=>reject(err));
    })
  }
  decodepurview(option={}){
    this.getHeader();
    return new Promise((resolve,reject)=>{
      this.post('/decodepurview',option).then(res=>this._handle(resolve,reject,res)).catch(err=>reject(err));
    })
  }
  deleterole(option={}){
    this.getHeader();
    return new Promise((resolve,reject)=>{
      this.post('/del',option).then(res=>this._handle(resolve,reject,res)).catch(err=>reject(err));
    })
  }
  queryroledetail(option={}){
    this.getHeader();
    return new Promise((resolve,reject)=>{
      this.post('/queryrole',option).then(res=>this._handle(resolve,reject,res)).catch(err=>reject(err));
    })
  }
  querypurview(option={}){
    this.getHeader();
    return new Promise((resolve,reject)=>{
      this.post('/querypurview',option).then(res=>this._handle(resolve,reject,res)).catch(err=>reject(err));
    })
  }
  updatepurview(option={}){
    this.getHeader();
    return new Promise((resolve,reject)=>{
      this.post('/update',option).then(res=>this._handle(resolve,reject,res)).catch(err=>reject(err));
    })
  }

}

export default new RoleServer();