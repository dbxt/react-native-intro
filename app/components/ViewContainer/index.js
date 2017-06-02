'use strict';
import {View} from 'react-native';
import React, {Component} from 'react';

import styles from './styles';

class ViewContainer extends Component {
    render() {
        return (
            <View style={styles.viewContainer}>
                {this.props.children}
            </View>
        )
    }
}

export default ViewContainer;