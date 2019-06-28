import Base from './Base'
import {baseUrl} from '../config'
class UserServer extends Base {
  constructor(){
    super();
    this.url = baseUrl+'/auth';
  }
  login(option={}){
    // option = {
    //   username:'xhli',
    //   password:'a123456'
    // }
    let formdata = this.toformdata(option)
    return new Promise((resolve,reject)=>{
      this.post('/login',formdata).then(res=>{
        this._handle(resolve,reject,res);
      }).catch(err=>reject(err));
    })
  }
  register(option={}){
    return new Promise((resolve,reject)=>{
      this.post('/register',option).then(res=>this._handle(resolve,reject,res)).catch(err=>reject(err));
    })
  }
  logout(option={}){
    return new Promise((resolve,reject)=>{
      this.post('/logout',option).then(res=>this._handle(resolve,reject,res)).catch(err=>reject(err));
    })
  }
  getUser(option){
    return new Promise((resolve,reject)=>{
      this.get('/checkToken',option).then(res=>this._handle(resolve,reject,res)).catch(err=>reject(err));
    })
  }
}
export default new UserServer();