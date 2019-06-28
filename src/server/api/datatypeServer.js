import Base from './Base';
import {baseUrl} from '../config'
class DataTypeServer extends Base {
  constructor(){
    super();
    this.url = baseUrl+'/datatype';
    let clan = window.localStorage.getItem('clan');
    this.header = {
      "GxUser-PosOtype":2,
      "GxUser-PosOid": clan
    }
  }
  create(option={}){
    this.getHeader();
    return new Promise((resolve,reject)=>{
      this.put('/create',option).then(res=>{
        this._handle(resolve,reject,res)
      }).catch(err=>reject(err));
    })
  }
  deleteDataType(option={}){
    this.getHeader();
    return new Promise((resolve,reject)=>{
      this.delete('',option).then(res=>{
        this._handle(resolve,reject,res);
      }).catch(err=>reject(err));
    })
  }
  update(option={}){
    this.getHeader();
    return new Promise((resolve,reject)=>{
      this.post('/update',option).then(res=>{
        this._handle(resolve,reject,res);
      }).catch(err=>reject(err));
    })

  }
  query(option={}){
    this.getHeader();
    return new Promise((resolve,reject)=>{
      this.post('/retrieve',option).then(res=>{
        this._handle(resolve,reject,res)
      }).catch(err=>reject(err));
    })
  }

  getauthors(clanId){
    this.getHeader();
    return new Promise((resolve,reject)=>{
      this.get(`/clan/${clanId}/authors`,{}).then(res=>{
        this._handle(resolve,reject,res)
      }).catch(err=>reject(err));
    })
  }
  
}

export default new DataTypeServer();