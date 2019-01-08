/** @format */
import React from 'react';
import { Provider} from 'react-redux';
import configureStore from './src/configureStore'
import {AppRegistry} from 'react-native';
import App from './src/app';
import {name as appName} from './app.json';

const store = configureStore()

const reduxSample = ()=> (
    <Provider store={store}>
        <App/>
    </Provider>
)
AppRegistry.registerComponent(appName, () => reduxSample);