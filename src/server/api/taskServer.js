import Base from './Base';
import {baseUrl} from '../config'
import {Task} from '@/datas'
class TaskServer extends Base {
  constructor(){
    super();
    this.url = baseUrl +'/task'
    let clan = window.localStorage.getItem('clan')||0;
    let otid = clan ? 2 : 0;
    this.header = {
      "GxUser-PosOtype":otid,
      "GxUser-PosOid": clan
    }
  }
  retrieve(option={}){
    this.getHeader();
    return new Promise((resolve,reject)=>{
      this.post('/retrieve',option).then(res=>this._handle(resolve,reject,res,Task)).catch(err=>reject(err));
    })
  }
  take(taskId){
    this.getHeader();
    return new Promise((resolve,reject)=>{
      this.post(`/${taskId}/take`,{}).then(res=>this._handle(resolve,reject,res)).catch(err=>reject(err));
    })
  }
  abandon(taskId){
    this.getHeader();
    return new Promise((resolve,reject)=>{
      this.post(`/${taskId}/abandon`,{}).then(res=>this._handle(resolve,reject,res)).catch(err=>reject(err));
    })
  }
  reset(taskId){
    this.getHeader();
    return new Promise((resolve,reject)=>{
      this.post(`/${taskId}/reset`,{}).then(res=>this._handle(resolve,reject,res)).catch(err=>reject(err));
    })
  }
  submit(taskId,task){
    this.getHeader();
    return new Promise((resolve,reject)=>{
      this.post(`/${taskId}/submit`,task).then(res=>this._handle(resolve,reject,res)).catch(err=>reject(err));
    })
  }
  dispatch(taskId,userId){
    this.getHeader();
    let obj = {
      userId
    };
    let formdata = this.toformdata(obj);
    return new Promise((resolve,reject)=>{
      this.post(`/${taskId}/dispatch`,formdata).then(res=>this._handle(resolve,reject,res)).catch(err=>reject(err));
    })
  }
  burn(taskId,option={}){
    this.getHeader();
    return new Promise((resolve,reject)=>{
      this.post(`/${taskId}/burn`,option).then(res=>this._handle(resolve,reject,res)).catch(err=>reject(err));
    })
  }
  hours(taskId,option={}){
    this.getHeader();
    return new Promise((resolve,reject)=>{
      this.post(`/${taskId}/burn/retrieve`,option).then(res=>this._handle(resolve,reject,res)).catch(err=>reject(err));
    })
  }
  achievement(taskId){
    this.getHeader();
    return new Promise((resolve,reject)=>{
      this.post(`/${taskId}/achievement`,{}).then(res=>this._handle(resolve,reject,res)).catch(err=>reject(err));
    })
  }
  finish(taskId){
    this.getHeader();
    return new Promise((resolve,reject)=>{
      this.post(`/${taskId}/finish`,{}).then(res=>this._handle(resolve,reject,res)).catch(err=>reject(err));
    })
  }
  rollbackTo(taskId,achievementId){
    this.getHeader();
    let obj = {
      achievementId
    }
    let formdata = this.toformdata(obj)
    return new Promise((resolve,reject)=>{
      this.post(`/${taskId}/rollbackTo`,formdata).then(res=>this._handle(resolve,reject,res)).catch(err=>reject(err));
    })
  }
  getWorkData(taskId){
    this.getHeader();
    return new Promise((resolve,reject)=>{
      this.post(`/${taskId}/work_data`,{}).then(res=>this._handle(resolve,reject,res)).catch(err=>reject(err));
    })
  }
  getInputData(taskId){
    this.getHeader();
    return new Promise((resolve,reject)=>{
      this.post(`/${taskId}/input`,{}).then(res=>this._handle(resolve,reject,res)).catch(err=>reject(err));
    })
  }
}

export default new TaskServer();