'use strict';
import React, {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    personRow: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        height: 50
    },
    personName: {
        marginLeft: 25
    },
    personMoreIcon: {
        color: "green",
        height: 20,
        width: 20,
        marginRight: 25
    }
});

export default styles;