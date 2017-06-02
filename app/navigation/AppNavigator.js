import React from 'react';
import { DrawerNavigator } from 'react-navigation';

import PeopleListScreen from "../screens/PeopleList"
import PersonShowScreen from "../screens/PersonShow"

const AppNavigator = DrawerNavigator({
    PeopleList: { screen: PeopleListScreen },
    PersonShow: { screen: PersonShowScreen },
});

export default AppNavigator;