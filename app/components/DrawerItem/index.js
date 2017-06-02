'use strict';
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

class DrawerItem extends Component {
    render() {
        return (
            <Icon name={this.props.icon} size={35} style={{margin: 15}} color="#900"/>
        )
    }
}

export default DrawerItem;