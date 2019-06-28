import Base from './Base';
import {baseUrl} from '../config'

class InsightServer extends Base {
  constructor(){
    super();
    this.url = baseUrl+'/insight';
    let group = window.localStorage.getItem('groupId')||0;
    let otId = 2;
    if(!group) otId = 0;
    this.header = {
      "GxUser-PosOtype":otId,
      "GxUser-PosOid": group
    }
  }
  project(option={}){
    this.getHeader();
    return new Promise((resolve,reject)=>{
      this.get('/project',option).then(res=>this._handle(resolve,reject,res)).catch(err=>reject(err));
    })
  }
  // task(taskId){
  //   return new Promise((resolve,reject)=>{
  //     this.get(`/task/${taskId}/basicStat`,{}).then(res=>this._handle(resolve,reject,res)).catch(err=>reject(err));
  //   })
  // }
  user(userId){
    this.getHeader();
    return new Promise((resolve,reject)=>{
      this.get(`/user/${userId}`,{}).then(res=>this._handle(resolve,reject,res)).catch(err=>reject(err));
    })
  }
  users(option={}){
    this.getHeader();
    let formdata = this.toformdata(option)
    return new Promise((resolve,reject)=>{
      this.post(`/user`,formdata).then(res=>this._handle(resolve,reject,res)).catch(err=>reject(err));
    })
  }

}

export default new InsightServer();