import User from "./User";

export default class Project {
  constructor(option={}){
    let clan = window.localStorage.getItem('clan');
    this.name = '';
    this.des = '';
    this.craft = {
      id:''
    };
    this._workload = {};
    this.workload = 0;
    this.priority = 1;
    this.storage = {
      protocol:'ecs://',
      host:'bt1.geosts.ac.cn'
    };
    this.unit = '';
    this.manager = {
      id:''
    };
    this.pos={
      id:Number(clan)
    };
    this.measure=0;
    this.days = 0;
    this.user = {}
    this.deadline = new Date();
    Object.assign(this,option);
    this._workload = {
      unit:this.unit,
      workload:this.workload
    }
    this.user = new User(this.user);
    this.manager = new User(this.manager);
  }
}