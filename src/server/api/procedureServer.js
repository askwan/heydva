import Base from './Base';
import {baseUrl} from '../config'

class ProcedureServer extends Base {
  constructor(){
    super()
    this.url = baseUrl +"/craft"
    let clan = window.localStorage.getItem('clan');
    this.header = {
      "GxUser-PosOtype":2,
      "GxUser-PosOid": clan
    }
  }
  addProcedure(craftId,option={}){
    this.getHeader();
    return new Promise((resolve,reject)=>{
      this.put(`/${craftId}/procedure`,option).then(res=>this._handle(resolve,reject,res)).catch(err=>reject(err));
    })
  }
  updateProcedure(craftId,procedure){
    this.getHeader();
    return new Promise((resolve,reject)=>{
      this.post(`/${craftId}/procedure/${procedure.id}`,procedure).then(res=>this._handle(resolve,reject,res)).catch(err=>reject(err));
    })
  }
  deleteProcedrue(craftId,procedureId){
    this.getHeader();
    return new Promise((resolve,reject)=>{
      this.delete(`/${craftId}/procedure/${procedureId}`,{}).then(res=>this._handle(resolve,reject,res)).catch(err=>reject(err));
    })
  }
  getHeadProcedures(craftId,procedureId){
    this.getHeader();
    return new Promise((resolve,reject)=>{
      this.post(`/${craftId}/procedure/${procedureId}/heads`,{}).then(res=>this._handle(resolve,reject,res)).catch(err=>reject(err));
    })
  }
  getTailProcedures(craftId,procedureId){
    this.getHeader();
    return new Promise((resolve,reject)=>{
      this.post(`/${craftId}/procedure/${procedureId}/tails`,{}).then(res=>this._handle(resolve,reject,res)).catch(err=>reject(err));
    })
  }
  getDetailProcedure(procedureId){
    this.getHeader();
    return new Promise((resolve,reject)=>{
      this.get(`/procedure/${procedureId}`,{}).then(res=>this._handle(resolve,reject,res)).catch(err=>reject(err));
    })
  }
}


export default new ProcedureServer()