import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './router';
import store from './store';

import 'normalize.css';
import 'antd/dist/antd.css';
import './react/style/index.less';
import './react/style/common.less';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
