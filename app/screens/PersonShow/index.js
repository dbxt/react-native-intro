'use strict';
import React, {Component} from 'react';
import {Text, Image, TouchableOpacity} from 'react-native';
import _ from "lodash";
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from "./styles";

import DrawerItem from "../../components/DrawerItem";
import ViewContainer from "../../components/ViewContainer";

class PersonShowScreen extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        drawerLabel: (<DrawerItem icon="user" />)
    });

    render() {
        const { params } = this.props.navigation.state;
        const person = params.person;
        //const personImage = require(person.photo);
        return (
            <ViewContainer>
                <TouchableOpacity onPress={this._navigateToPeopleList.bind(this)}>
                    <Icon name="chevron-left" size={20} style={{margin: 15}} color="#900"/>
                </TouchableOpacity>
                <Text style={{marginTop: 10, textAlign: "center", fontSize: 20}}>{`PERSON DETAIL SCREEN`}</Text>
                <Image
                    style={{
                        width: 120,
                        height: 120,
                        backgroundColor: 'transparent',
                        margin: 20,
                    }}
                    source={[ {uri: person.photo} ]}
                />
                <Text style={styles.personName}>{_.capitalize(person.name)} {_.capitalize(person.surname)}</Text>
            </ViewContainer>
        );
    }


    _navigateToPeopleList() {
        const { navigate } = this.props.navigation;
        navigate('PeopleList');
    }
}

export default PersonShowScreen;