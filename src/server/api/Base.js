import axios from 'axios';

export default class Base {
  constructor(option = {}) {
    this.sdomains = option.sdomains;
    this.header = { "GxUser-PosOtype": 0, "GxUser-PosOid": 0 };
  }
  get(name, options, header = {}) {
    let url = this.url + name;
    return new Promise((resolve, reject) => {
      this.createAxiosInstance().get(url, {
        params: options,
        header
      })
        .then(res => {
          if (res.status === 200) {
            resolve(res.data)
          } else {
            reject(res);
          }
        })
        .catch(err => {

          reject(err)
        })
    })
  }
  post(name, options, header) {
    let url = this.url + name;
    return new Promise((resolve, reject) => {
      this.createAxiosInstance().post(url, options, header)
        .then(res => {
          if (res.status === 200) {
            resolve(res.data)
          } else {
            reject(res);
          }
        })
        .catch(err => {
          reject(err)
        })
    })
  }
  postFormData(name, options, header) {
    let url = this.url + name;
    return new Promise((resolve, reject) => {
      this.createAxiosInstance(header).post(url, options)
        .then(res => {
          if (res.status === 200) {
            resolve(res.data)
          } else {
            reject(res);
          }
        })
        .catch(err => {
          reject(err)
        })
    })
  }
  uploadFile(url, formData) {
    // let config = {headers:{'Content-Type':'multipart/form-data'}};
    let header = Object.assign({}, this.header, { 'Content-Type': 'multipart/form-data' })
    // header = Object.assign({},)
    return new Promise((resolve, reject) => {
      this.createAxiosInstance().post(url, formData, header)
        .then(res => {
          if (res.status === 200) {
            resolve(res.data)
          } else {
            reject(res);
          }
        })
        .catch(err => {
          reject(err)
        })
    })
  }
  put(name, options, header) {
    let url = this.url + name;
    return new Promise((resolve, reject) => {
      this.createAxiosInstance(header).put(url, options)
        .then(res => {
          if (res.status === 200) {
            resolve(res.data)
          } else {
            reject(res);
          }
        })
        .catch(err => {
          reject(err)
        })
    })
  }
  delete(name, options, header) {
    let url = this.url + name;
    return new Promise((resolve, reject) => {
      this.createAxiosInstance(header).delete(url, { data: options }).then(res => {

        if (res.status === 200) {
          resolve(res.data)
        } else {
          reject(res);
        }
      })
        .catch(err => {
          reject(err)
        })
    })
  }
  patch(name, options, header) {
    let url = this.url + name;
    return new Promise((resolve, reject) => {
      this.createAxiosInstance(header).patch(url, options).then(res => {
        if (res.status === 200) {
          resolve(res.data)
        } else {
          reject(res)
        }
      })
        .catch(err => reject(err))
    })
  }

  _handle(resolve, reject, res,Type) {
    if (res.status === 200) {
      if(typeof Type === 'function') {
        res.data.items = res.data.items.map(el => new Type(el));
      }
      resolve(res.data)
    }else if(res.status === 450){
      window.location.href = window.location.origin + window.location.pathname + '#/login';
    } else if (res.status === 10001) {
      reject(res);
    } else if (res.status === 10101) {
      window.localStorage.clear();
      window.location.href = window.location.origin + window.location.pathname + '#/login';
    } else {
      reject(res);
    }
  }
  getToken() {
    let token = window.localStorage.getItem('token');
    let hash = window.location.hash;
    if( !hash.includes('login') && !hash.includes('regist')){
      if(!token) window.location.href = window.location.origin + window.location.pathname + '#/login';
    }
    return token;
  }
  
  formatePosi() {
    if (!Number(this.header['GxUser-PosOid'])) {
      this.header = {
        "GxUser-PosOtype": 0,
        "GxUser-PosOid": 0
      }
    }
  }

  toformdata(option) {
    let formdata = new FormData();
    for (let key in option) {
      formdata.append(key, option[key])
    }
    return formdata;
  }
  createAxiosInstance(option = {}) {
    this.formatePosi();
    let headers = {
      token: this.getToken()
    };

    Object.assign(headers, this.header, option);
    
    return axios.create({
      headers:headers
    });
  }
  getHeader(){
    let clanId = window.localStorage.getItem('clan');
    let id = Number(clanId);
    let otid = 2;
    if(!id) {
      id = 0;
      otid = 0;
    }
    this.header = {
      "GxUser-PosOtype":otid,
      "GxUser-PosOid": id
    }
    return 0;
    // return 
  }
}