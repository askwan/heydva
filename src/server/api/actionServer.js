import Base from './Base';
import {baseUrl} from '../config'

class ActionServer extends Base {
  constructor(){
    super();
    this.url = baseUrl+'/core/action';
  }
  getAction(option={}){   
    this.getHeader();
    return new Promise((resolve,reject)=>{
      this.post('/query',option).then(res=>{
        this._handle(resolve,reject,res);
      }).catch(err=>reject(err));
    })
  }
}

export default new ActionServer();