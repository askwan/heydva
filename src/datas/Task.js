import Project from './Project'
import Procedure from './Procedure'
import User from './User'

export default class Task {
  constructor(option={}){
    this.createTime = '';
    this.curtWorker = {};
    this.id = 0;
    this.consumedHours = 0;
    this.name = '';
    this.ownedClan  = {};
    this.preWorker = {};
    this.procedure = {};
    this.project  = {};
    this.status = 0;
    this.takeTime = '';
    Object.assign(this,option);
    this.project = new Project(this.project);
    this.procedure = new Procedure(this.procedure);
    this.curtWorker = new User(this.curtWorker);
    this.preWorker = new User(this.preWorker);
  }
}