import Base from './Base';
import {baseUrl} from '../config'

class LinkServer extends Base {
  constructor(){
    super();
    this.url = baseUrl+'/craft';
    let clan = window.localStorage.getItem('clan');
    this.header = {
      "GxUser-PosOtype":2,
      "GxUser-PosOid": clan
    }
  }
  addLink(craftId,option){
    this.getHeader();
    return new Promise((resolve,reject)=>{
      this.put(`/${craftId}/link`,option).then(res=>this._handle(resolve,reject,res)).catch(err=>reject(err));
    })
  }
  updateLink(craftId,link){
    this.getHeader();
    return new Promise((resolve,reject)=>{
      this.post(`/${craftId}/link/${link.id}`,{multiplicity:link.multiplicity}).then(res=>this._handle(resolve,reject,res)).catch(err=>reject(err));
    })
  }
  deleteLink(craftId,linkId){
    this.getHeader();
    return new Promise((resolve,reject)=>{
      this.delete(`/${craftId}/link/${linkId}`,{}).then(res=>this._handle(resolve,reject,res)).catch(err=>reject(err));
    })
  }
}

export default new LinkServer();