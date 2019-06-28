import Base from './Base';
import {baseUrl} from '../config'

class PurviewServer extends Base {
  constructor(){
    super();
    this.url = baseUrl +'/core/user'
  }
  getPreview(option={otId:0,posId:0}){
    // console.log(option,777);
    this.header = {
      "GxUser-PosOtype":option.otId,
      "GxUser-PosOid": option.posId
    }
    // if(!option.posId) option.otId = 0;
    // console.log(option.otId,option.posId,Number(option.posId),'444444');
    return new Promise((resolve,reject)=>{
      this.post('/mypurview',{}).then(res=>{
        this._handle(resolve,reject,res)
      }).catch(err=>reject(err));
    })
  }
}

export default new PurviewServer();