import Base from './Base';
import {baseUrl} from '../config'

class CraftServer extends Base {
  constructor(){
    super();
    this.url = baseUrl+'/craft';
    let clan = window.localStorage.getItem('clan');
    this.header = {
      "GxUser-PosOtype":2,
      "GxUser-PosOid": clan
    }
  }
  createCraft(option={}){
    this.getHeader();
    return new Promise((resolve,reject)=>{
      this.put('/create',option).then(res=>{
        this._handle(resolve,reject,res);
      }).catch(err=>reject(err));
    })

  }
  deleteCraft(craftId){
    this.getHeader();
    return new Promise((resolve,reject)=>{
      this.delete(`/${craftId}`,{}).then(res=>{
        this._handle(resolve,reject,res)
      }).catch(err=>reject(err));
    })
  }
  copyCraft(option={}){
    this.getHeader();
    let formdata = this.toformdata({newCraftName:option.newCraftName})
    return new Promise((resolve,reject)=>{
      this.post(`/${option.craftId}/copy`,formdata).then(res=>{
        this._handle(resolve,reject,res)
      }).catch(err=>reject(err))
    })
  }
  craftRetrieve(option={}){
    this.getHeader();
    return new Promise((resolve,reject)=>{
      this.post('/retrieve',option).then(res=>{
        this._handle(resolve,reject,res)
      }).catch(err=>reject(err));
    })
  }
  updateCraft(option={}){
    this.getHeader();
    return new Promise((resolve,reject)=>{
      this.post('/update',option).then(res=>{
        this._handle(resolve,reject,res)
      }).catch(err=>reject(err));
    })
  }
  queryCraft(craftId){
    this.getHeader();
    return new Promise((resolve,reject)=>{
      this.get('/'+craftId+'/dag',{}).then(res=>{
        this._handle(resolve,reject,res)
      }).catch(err=>reject(err));
    })
  }
  exportCraft(craftId){

    return new Promise((resolve,reject)=>{
      this.createAxiosInstance({responseType:'arraybuffer'}).get(`${this.url}/${craftId}/export`,{}).then(res=>{

        var blob = new Blob([JSON.stringify(res.data)], {type: 'application/json;charset=utf-8'}); //application/vnd.openxmlformats-officedocument.wordprocessingml.document这里表示doc类型
        var filename = res.data.name+'.craft';
        var downloadElement = document.createElement('a');
        var href = window.URL.createObjectURL(blob); //创建下载的链接
        downloadElement.style.display = 'none';
        downloadElement.href = href;
        downloadElement.download =filename ; //下载后文件名
        document.body.appendChild(downloadElement);
        downloadElement.click(); //点击下载
        document.body.removeChild(downloadElement); //下载完成移除元素
        window.URL.revokeObjectURL(href); //释放掉blob对象
        
      }).catch(err=>reject(err));

    })
  }
  importCraft(clanId,option){
    let obj = this.toformdata(option);
    this.getHeader();
    return new Promise((resolve,reject)=>{
      this.uploadFile(`${this.url}/import/clan/${clanId}/`,obj).then(res=>this._handle(resolve,reject,res)).then(err=>reject(err));
    })
  }
  validateCraft(craftId){
    this.getHeader();
    return new Promise((resolve,reject)=>{
      this.post(`/${craftId}/validate`,{}).then(res=>this._handle(resolve,reject,res)).then(err=>reject(err));
    })
  }
  activateCraft(craftId){
    this.getHeader();
    return new Promise((resolve,reject)=>{
      this.post(`/${craftId}/activate`,{}).then(res=>this._handle(resolve,reject,res)).then(err=>reject(err));
    })
  }
  getAuthors(clanId){
    this.getHeader();
    return new Promise((resolve,reject)=>{
      this.get(`/clan/${clanId}/authors`,{}).then(res=>this._handle(resolve,reject,res)).then(err=>reject(err));
    })
  }
}

export default new CraftServer();