'use strict';
import React, {Component} from 'react';
import {Text, View, ListView, TouchableOpacity} from 'react-native';
import "isomorphic-fetch";
import _ from "lodash";
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from "./styles";
import people from "./test-data";

import DrawerItem from "../../components/DrawerItem";
import ViewContainer from "../../components/ViewContainer";

class PeopleListScreen extends Component {
    static navigationOptions = ({navigation, screenProps}) => ({
        drawerLabel: (<DrawerItem icon="users"/>)
    });

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
        this.state = {
            peopleDataSource: ds.cloneWithRows(people)
        };
    }

    componentWillMount() {
        this._fetchData();
    }

    _fetchData() {
        fetch('http://uinames.com/api/?amount=25')
            // .then((response) => {
            //     alert(JSON.stringify(response.json()))
            // })
            .then((responseJson) => {
                alert(JSON.stringify(responseJson))
            })
            .catch((error) => {
                console.error(error);
            });
        // return [
        //     {"firstName": "bob", "lastName": "robertson", "roomNumber": 30},
        //     {"firstName": "peter", "lastName": "peterson", "roomNumber": 20},
        //     {"firstName": "steve", "lastName": "stevenson", "roomNumber": 10}
        // ];
    }

    render() {
        return (
            <ViewContainer>
                <ListView
                    dataSource={this.state.peopleDataSource}
                    style={{marginTop: 10}}
                    renderRow={(person) => {
                        return this._renderPersonRow(person)
                    }}
                />
            </ViewContainer>
        );
    }

    _renderPersonRow(person) {
        return (
            <TouchableOpacity style={styles.personRow} onPress={(event) => this._navigateToPersonShow(person)}>
                <Text style={styles.personName}>{_.capitalize(person.firstName)} {_.capitalize(person.lastName)}</Text>
                <View style={{flex: 1}}/>
                <Icon name="chevron-right" size={15} color="#900"/>
            </TouchableOpacity>
        )
    }

    _navigateToPersonShow(person) {
        const {navigate} = this.props.navigation;
        navigate('PersonShow', {person: person});
    }
}

export default PeopleListScreen;