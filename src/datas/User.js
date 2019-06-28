class Role {
  constructor(option){
    this.purview = option.purview||0;
    this.rid = option.rid||0;
  }
}

export default class User {
  constructor(option={}){
    this.alias = '';
    this.avatar = '';
    this.cTime = '';
    this.id = 0;
    this.name = '';
    this.role = {};
    this.type = {};
    this.uTime = '';
    Object.assign(this,option);
    this.alias = this.alias || this.name;
    this.role = new Role(this.role)
  }
}