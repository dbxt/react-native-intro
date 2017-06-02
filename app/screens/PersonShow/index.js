'use strict';
import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import _ from "lodash";;
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from "./styles";

import ViewContainer from "../../components/ViewContainer";
import TouchableItem from "react-navigation/src/views/TouchableItem";

class PersonShowScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const { params } = this.props.navigation.state;
        const person = params.person;
        return (
            <ViewContainer>
                <TouchableOpacity onPress={this._navigateToPeopleList.bind(this)}>
                    <Icon name="chevron-left" size={15} color="#900"/>
                </TouchableOpacity>
                <Text style={{marginTop: 10, fontSize: 20}}>{`PERSON SHOW SCREEN`}</Text>
                <Text style={styles.personName}>{_.capitalize(person.firstName)} {_.capitalize(person.lastName)}</Text>
            </ViewContainer>
        );
    }


    _navigateToPeopleList() {
        const { navigate } = this.props.navigation;
        navigate('PeopleList');
    }
}

export default PersonShowScreen;