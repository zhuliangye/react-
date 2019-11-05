import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style'
import './static/bootstrap/css/bootstrap.css'
import store from "./store/store";
import {Provider} from 'react-redux'
import 'antd/dist/antd.css';
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);


