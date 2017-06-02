import React, {Component} from 'react';
import { DrawerNavigator, DrawerItems } from 'react-navigation';

import PeopleListScreen from "../screens/PeopleList"
import PersonShowScreen from "../screens/PersonShow"

const AppNavigator = DrawerNavigator({
    PeopleList: { screen: PeopleListScreen },
    PersonShow: { screen: PersonShowScreen },
},
{
    drawerWidth: 100,
    drawerPosition: 'left',

    contentComponent: props => <DrawerItems {...props} />
});

export default AppNavigator;