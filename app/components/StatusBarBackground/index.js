'use strict';
import { View } from 'react-native';
import React, { Component } from 'react';
import styles from './styles';

class StatusBarBackground extends Component {
    render() {
        return (
            <View style={[styles.statusBarBackground, {backgroundColor: this.props.backgroundColor}]}>
                {this.props.children}
            </View>
        )
    }
}

export default StatusBarBackground;