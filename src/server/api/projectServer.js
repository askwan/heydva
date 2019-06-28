import Base from './Base';
import {baseUrl} from '../config';
import {Project} from '@/datas';

class ProjectServer extends Base {
  constructor(){
    super();
    this.url = baseUrl+'/project';
    let clan = window.localStorage.getItem('clan')||0;
    let otid = clan ? 2 : 0;
    this.header = {
      "GxUser-PosOtype":otid,
      "GxUser-PosOid": clan
    }
  }
  /**
   * 创建项目
   * @param {Project} option 
   */
  create(option={}){
    this.getHeader();
    return new Promise((resolve,reject)=>{
      this.post('/create',option).then(res=>{
        this._handle(resolve,reject,res);
      }).catch(err=>reject(err));
    })
  }
  /**
   * 更新项目
   * @param {Project} option 
   */
  updateProject(option={}){
    this.getHeader();
    return new Promise((resolve,reject)=>{
      this.put(`/${option.id}`,option).then(res=>{
        this._handle(resolve,reject,res);
      }).catch(err=>reject(err));
    })
  }
  /**
   * 获取项目列表
   * option 过滤项
   * @param {object} option 
   */
  getProject(option){
    this.getHeader();
    return new Promise((resolve,reject)=>{
      this.post('/retrieve',option).then(res=>{
        this._handle(resolve,reject,res,Project);
      }).catch(err=>reject(err));
    })
  }
  /**
   * 启动项目
   * projectId 项目id
   * @param {number} projectId 
   */
  startProject(projectId){
    this.getHeader();
    return new Promise((resolve,reject)=>{
      this.post(`/${projectId}/start`,{}).then(res=>{
        this._handle(resolve,reject,res);
      }).catch(err=>reject(err));
    })
  }
  /**
   * 获取项目中工艺的工序
   * projectId 项目id
   * @param {number} projectId 
   */
  getCraftByProject(projectId){
    this.getHeader();
    return new Promise((resolve,reject)=>{
      this.get(`/${projectId}/craft`,{}).then(res=>{
        this._handle(resolve,reject,res);
      }).catch(err=>reject(err));
    })
  }
  /**
   * 暂停项目
   * projectId 项目id
   * @param {number} projectId 
   */
  pauseProject(projectId){
    this.getHeader();
    return new Promise((resolve,reject)=>{
      this.post(`/${projectId}/pause`,{}).then(res=>{
        this._handle(resolve,reject,res);
      }).catch(err=>reject(err));
    })
  }
  /**
   * 删除项目
   * projectId 项目id
   * @param {number} projectId 
   */
  deleteProject(projectId){
    this.getHeader();
    return new Promise((resolve,reject)=>{
      this.delete(`/${projectId}`,{}).then(res=>{
        this._handle(resolve,reject,res);
      }).catch(err=>reject(err));
    })
  }
  /**
   * 重启项目
   * projectId 项目id
   * @param {number} projectId 
   */
  resumeProject(projectId){
    this.getHeader();
    return new Promise((resolve,reject)=>{
      this.post(`/${projectId}/resume`,{}).then(res=>{
        this._handle(resolve,reject,res);
      }).catch(err=>reject(err));
    })
  }
  /**
   * 项目回滚至指定工序
   * projectId 项目id
   * procedureId 工序id
   * resetCurProcTask 是否重置当前工序
   * @param {number} projectId 
   * @param {number} procedureId 
   * @param {boolean} resetCurProcTask 
   */
  roolbackToProject(projectId,procedureId,resetCurProcTask=true){
    this.getHeader();
    let obj = {
      procedureId,
      resetCurProcTask
    }
    let formdata = this.toformdata(obj);
    return new Promise((resolve,reject)=>{
      this.post(`/${projectId}/rollbackTo`,formdata).then(res=>{
        this._handle(resolve,reject,res);
      }).catch(err=>reject(err));
    })
  }
  /**
   * projectId 项目id
   * @param {number} projectId 
   */
  resetProject(projectId){
    this.getHeader();
    return new Promise((resolve,reject)=>{
      this.post(`/${projectId}/reset`,{}).then(res=>{
        this._handle(resolve,reject,res);
      }).catch(err=>reject(err));
    })
  }
  /**
   * 更新项目工序
   * projectId 项目id
   * procedure 工序对象
   * @param {number} projectId 
   * @param {number} procedure 
   */
  updateProjectProcedure(projectId,procedure){
    this.getHeader();
    return new Promise((resolve,reject)=>{
      this.post(`/${projectId}/procedure/${procedure.id}`,procedure).then(res=>{
        this._handle(resolve,reject,res);
      }).catch(err=>reject(err));
    })
  }
  /**
   * 放弃项目
   * option 放弃说明
   * @param {object} option 
   */
  abandonProject(option={}){
    this.getHeader();
    return new Promise((resolve,reject)=>{
      this.post(`/${option.id}/abandon`,option).then(res=>{
        this._handle(resolve,reject,res);
      }).catch(err=>reject(err));
    })
  }
  /**
   * 获取项目中工序详情
   * projectId 项目id
   * procedureId 工序id
   * @param {number} projectId 
   * @param {number} procedureId 
   */
  getProcedureDetail(projectId,procedureId){
    this.getHeader();
    return new Promise((resolve,reject)=>{
      this.get(`/${projectId}/procedure/${procedureId}`,{}).then(res=>{
        this._handle(resolve,reject,res);
      }).catch(err=>reject(err));
    })
  }
  /**
   * 获取所有项目创建人
   * clanId 团队id
   * @param {number} clanId 
   */
  getAuthors(clanId){
    this.getHeader();
    return new Promise((resolve,reject)=>{
      this.get(`/clan/${clanId}/filters`,{}).then(res=>{
        this._handle(resolve,reject,res);
      }).catch(err=>reject(err));
    })
  }
  /**
   * 下发项目
   * projectId 项目id
   * userId 下发人员id
   * @param {number} projectId 
   * @param {number} userId 
   */
  dispatch(projectId,userId){
    this.getHeader();
    let obj = {
      userId
    }
    let formdata = this.toformdata(obj);
    return new Promise((resolve,reject)=>{
      this.post(`/${projectId}/dispatch`,formdata).then(res=>{
        this._handle(resolve,reject,res);
      }).catch(err=>reject(err));
    })
  }
  /**
   * 完成项目
   * projectId 项目id
   * @param {number} projectId 
   */
  submitProject(projectId){
    this.getHeader();
    return new Promise((resolve,reject)=>{
      this.post(`/${projectId}/submit`,{}).then(res=>{
        this._handle(resolve,reject,res);
      }).catch(err=>reject(err));
    })
  }

}

export default new ProjectServer();