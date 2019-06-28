import Base from './Base';
import {baseUrl,publicUrl} from '../config'
import hat from 'hat'

class FileServer extends Base {
  constructor(){
    super();
    this.url = baseUrl+'/image';
    let clan = window.localStorage.getItem('clan');
    this.header = {
      "GxUser-PosOtype":2,
      "GxUser-PosOid": clan
    }
  }
  uploadImage(option){
    this.getHeader();
    return new Promise((resolve,reject)=>{
      let url = this.url+'/upload';
      let formdata = this.toformdata(option);
      this.uploadFile(url,formdata).then(res=>{
        this._handle(resolve,reject,res)
      }).catch(err=>reject(err));
    })

  }
  imageUrl(id){
    return this.url+`/${id}`
  }
  uploadFiles(option){
    this.getHeader();
    return new Promise((resolve,reject)=>{
      let url = publicUrl+'/file/upload';
      let formdata = this.toformdata(option);
      this.uploadFile(url,formdata).then(res=>{
        this._handle(resolve,reject,res)
      }).catch(err=>{
        reject(err)
      });
    })
  }
  uploadBigFiles(option){
    this.getHeader();
    let bytesPerPiece = 1024*1024*5;
    let file = option.file;
    let md5 = hat();
    let start = 0,end,arr=[];
    let totalPieces = Math.ceil(file.size/bytesPerPiece);
    let i = 0;
    while(start<file.size){
      end = start+bytesPerPiece;
      
      if(end>file.size){
        end = file.size;
      }
      let chunk = file.slice(start,end);
      arr.push({
        uid:option.uid,
        isSlice:true,
        chunks:totalPieces,
        chunkIndex:i,
        chunkSize:chunk.size,
        sliceMd5:md5,
        startIndex:start,
        endIndex:end,
        file:chunk
      })
      i++;
      start = end;
    }

    // return new Promise((resolve,reject)=>{
    //   let url = publicUrl+'/file/block/upload';
    //   let formdata = this.toformdata(option);
    //   this.uploadFile(url,formdata).then(res=>{
    //     this._handle(resolve,reject,res)
    //   }).catch(err=>reject(err));
    // })
  }
  fileUrl(id){
    return `${publicUrl}/file/download?uri=${id}`
  }
}

export default new FileServer();