import ReactDOM from 'react-dom';
import dva from 'dva';
import createLoading from 'dva-loading';
import './index.css';
import '@/assets/public/index.scss';
import '@/assets/public.scss';

import zh_CN from 'antd/lib/locale-provider/zh_CN';
import { LocaleProvider, message } from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

// 1. Initialize
const app = dva({
  onError(e){
    if(typeof e === 'object'){
      message.error(e.message);
    }else {
      console.log(e,'error');
    }
  }
});

// 2. Plugins
// app.use({});
app.use(createLoading());
// 3. Model
// app.model(require('./models/example').default);
app.model(require('./models/page').default);
app.model(require('./models/children1').default);
app.model(require('./models/children2').default);

app.model(require('./models/global').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
// app.start('#root');
const App = app.start();
ReactDOM.render(<LocaleProvider locale={zh_CN}><App /></LocaleProvider>,document.getElementById('root'))
