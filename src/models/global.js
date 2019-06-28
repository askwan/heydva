import {userServer,_userServer,groupServer} from '@/server'

export default {

  namespace: 'global',

  state: {
    purview:0,
    history:{},
    status:{},
    showHead:false,
    user:{},
    num:0,
    ready:false,
    group:{},
    groups:[]
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      dispatch({type:'checkToken'})
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
    *login({payload},{call,put}){
      window.localStorage.clear();
      let response = yield call(()=>userServer.login(payload));
      window.localStorage.setItem('token',response.userToken);
      window.location.href = window.location.origin + window.location.pathname;
    },
    *checkToken({payload},{call,put,select}){
      let ready = yield select(state=>{
        // console.log(state);
        return state.global.ready
      });
      let bMine = true;
      let user = yield call(()=>userServer.getUser());
      let purviewRes = yield call(()=>_userServer.getPreview({posId:window.localStorage.getItem('clan'),otId:2}));
      yield put({type:'setPurview',payload:purviewRes.purview});
      let _userRes = yield call(()=>_userServer.getUser({id:user.id}));
      yield put({type:'setUser',payload:_userRes.items[0]});
      if(purviewRes.rid === 1) bMine = false;
      let groupsRes = yield call(()=>groupServer.querygroup({bMine,parentId:0}));
      yield put({type:'setGroups',payload:groupsRes.items});
      let groupId = window.localStorage.getItem('clan');
      let group = groupsRes.items.find(el=>el.id === Number(groupId));
      if(group){
        yield put({type:'setGroup',payload:group});
        let _user = yield call(()=>groupServer.querymember({memberId:user.id,gpid:group.id}));
        if(_user.items.length>0){
          _user = _user.items[0];
          yield put({type:'setUser',payload:_user});
          yield put({type:'setPurview',payload:_user.role.purview});
        }
      }else{
        if(groupsRes.items[0]){
          yield put({type:'setGroup',payload:groupsRes.items[0]});
          window.localStorage.setItem('clan',groupsRes.items[0].id);
          window.localStorage.setItem('groupId',groupsRes.items[0].id);
        }
      }
      yield put({type:'ready'})
    }
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
    setUser(state,{payload}){
      let user = payload
      return {...state,user};
    },
    clearUser(state,action){
      window.localStorage.clear();
      let user = {};
      return {...state,user}
    },
    setPurview(state,{payload}){
      let purview = payload;
      return {...state,purview}
    },
    setGroups(state,{payload}){
      let groups = payload;
      return {...state,groups}
    },
    setGroup(state,{payload}){
      let group = payload;
      return {...state,group}
    },
    ready(state){
      let ready = true;
      return {...state,ready}
    }
  },

};
