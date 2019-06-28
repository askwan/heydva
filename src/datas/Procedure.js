export default class Procedrue {
  constructor(option={},isNew){
    
    this.isNew = isNew;
    this.name = "";
    this.craftId = '';
    this.planHours = 1;
    this.level = 1;
    this.dataStorage = {};
    this.workMeasure = 0;
    this.qcMeasure = 0;
    this.outputSchema = {
      dataType:{
        id:''
      }
    };
    this.unit = '';
    
    this.takeRule = {
      arguments:[{}],
      name:'',
      ruleId:'',
      enable:true
    };
    this.submitRule = {
      arguments:[{}],
      name:'',
      ruleId:'',
      enable:false
    };
    this.qcRule = {
      arguments:[{}],
      name:'',
      ruleId:'',
      enable:true
    };
    this.genRule = {
      arguments:[{}],
      name:'',
      ruleId:'',
      enable:true
    };
    this.qStandard = [];
    this.qcSchema = {
      dataType:{
        id:''
      }
    }
    this.workRule = {
      name:'',
      content:'',
      attachments:[{
        name:'',
        format:'',
        uri:''
      }]
    };
    // console.log(option,77878877,'form')
    Object.assign(this,option);
    if(!this.outputSchema.dataType){
      this.outputSchema.dataType = {};
    }
    if(!this.qcSchema.dataType){
      this.qcSchema.dataType = {};
    }
    // this.form = [this.form.x,this.form.y];
  }
}