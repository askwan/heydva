import Base from './Base';
import {baseUrl} from '../config'

class ConfiginfoServer extends Base {
  constructor(){
    super();
    this.url = baseUrl+'/core/configinfo';
  }
  queryotype(option={}){
    this.getHeader();
    return new Promise((resolve,reject)=>{
      this.post('/queryotype',option).then(res=>{
        this._handle(resolve,reject,res);
      }).catch(err=>reject(err));
    })
  }
}

export default new ConfiginfoServer();