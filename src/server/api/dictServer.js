import Base from './Base';
import {baseUrl} from '../config'
class DictServer extends Base {
  constructor(){
    super();
    this.url = baseUrl;
    let clan = window.localStorage.getItem('clan');
    this.header = {
      "GxUser-PosOtype":2,
      "GxUser-PosOid": clan
    }
  }
  queryUnit(){
    return new Promise((resolve,reject)=>{
      this.get('/unit/retrieve',{}).then(res=>{
        this._handle(resolve,reject,res);
      }).catch(err=>reject(err));
    })
  }
  getRule(option={}){
    return new Promise((resolve,reject)=>{
      this.get('/v1/rule/taskRules',option).then(res=>this._handle(resolve,reject,res)).catch(err=>reject(err));
    })
  }
}

export default new DictServer();