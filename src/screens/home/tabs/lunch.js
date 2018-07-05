import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

class Lunch extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Lunch Screen</Text>
            </View>
        );
    }
}

export { Lunch };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
