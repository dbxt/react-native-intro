import React, {Component} from 'react';
import {AppRegistry} from 'react-native';

import AppNavigator from './app/navigation/AppNavigator'

export default class ReactNativeIntro extends Component {
    render() {
        return (
            <AppNavigator/>
       )
    }
}

AppRegistry.registerComponent('ReactNativeIntro', () => ReactNativeIntro);