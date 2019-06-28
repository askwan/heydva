
const P1 = (timer) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('hello world timer:' + timer)
    }, timer);
  })
}


export default {

  namespace: 'children1',

  state: {
    inputValue: '',
    say:'something'
  },

  subscriptions: {
    setup({ dispatch, history },done) {  // eslint-disable-line
      // done('ffofd')
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
    *setValue(action, { call, put,select }) {
      let response = yield call(P1, 1000);
      // const children1 = yield select(state=>{
      //   console.log(state,'fdsfsdf');
      //   return state.children1
      // });
      // console.log(children1,'state')
      yield put({ type: 'changeInput', payload: response })
    }
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
    changeInput(state, { payload }) {
      let { inputValue } = state;
      inputValue = payload;
      return { ...state, inputValue }
    }
  },

};
