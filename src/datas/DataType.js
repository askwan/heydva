

export default class DataType {
  constructor(option={}){
    let _dataType = {
      author: '',
      clan: {},
      code: 'utf8',
      description: '',
      dim: 0,
      fileRules: [{
        pattern:'',
        description:'',
        entry:true,
        id:1,
        directory:false,
        count:1
      }],
      id: '',
      logo: '',
      name: '',
      type: {},
      useNumber: '',
      version: 1
    };
    Object.assign(this,_dataType,option);
  }
  toAccept(){
    let accept = '';
    this.fileRules.forEach((rule,index)=>{
      accept += `.${rule.pattern}`;
      if(index<this.fileRules.length-1) accept+=',';
    })
    return accept;
  }
}