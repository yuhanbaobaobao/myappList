import React from 'react';
import {render} from 'react-dom';
import App from './containers/index';
import store from './store/configStore';
import {Provider} from 'react-redux';

render(
    <Provider store={store} >
    <App />
    </Provider>,
    document.getElementById('root')
);



