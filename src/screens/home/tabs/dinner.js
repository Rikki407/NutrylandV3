import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

class Dinner extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Dinner Screen</Text>
            </View>
        );
    }
}

export { Dinner };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
