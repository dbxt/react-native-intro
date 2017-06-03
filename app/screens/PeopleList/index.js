'use strict';
import React, {Component} from 'react';
import {Text, View, ListView, TouchableOpacity} from 'react-native';
import "fetch-everywhere";
import _ from "lodash";
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from "./styles";

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
            peopleDataSource: null
        };

        this._fetchData(this, ds)
    }

    _fetchData(context, ds){
        fetch('http://uinames.com/api/?amount=25&ext')
            .then(function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(function(people) {
                context.setState({ peopleDataSource: ds.cloneWithRows(people)});
                console.log(people);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
            <ViewContainer>
                { this.state.peopleDataSource !== null ? (
                <ListView
                    dataSource={this.state.peopleDataSource}
                    style={{marginTop: 10}}
                    renderRow={(person) => {
                        return this._renderPersonRow(person)
                    }}
                />
                ) : (
                    <Text>No Data</Text>
                )}
            </ViewContainer>
        );
    }

    _renderPersonRow(person) {
        return (
            <TouchableOpacity style={styles.personRow} onPress={(event) => this._navigateToPersonShow(person)}>
                <Text style={styles.personName}>{_.capitalize(person.name)} {_.capitalize(person.surname)}</Text>
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