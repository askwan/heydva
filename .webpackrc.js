const path = require('path');
export default {
  "extraBabelPlugins": [
    ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": true }]
  ],
  "publicPath":"/",
  "theme":{
    "@primary-color":"#FD8200"
  },
  alias:{
    '@':path.resolve(__dirname, "src")
  },
  disableCSSModules:true,
  define:{
    "USE_COMMA":'wuhao'
  }
}