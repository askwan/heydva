import Base from './Base';
import {baseUrl} from '../config'

class ClanServer extends Base {
  constructor(){
    super();
    this.url = baseUrl+'/clan';
    let clan = window.localStorage.getItem('clan')||0;
    let otid = clan ? 2 : 0
    this.header = {
      "GxUser-PosOtype":otid,
      "GxUser-PosOid": clan
    }
  }
  createmember(option={}){
    let formdata = this.toformdata(option);
    this.getHeader();
    return new Promise((resolve,reject)=>{
      this.post('/createmember',formdata).then(res=>{
        this._handle(resolve,reject,res);
      }).catch(err=>reject(err));
    })
  }
}

export default new ClanServer();