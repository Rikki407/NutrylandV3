import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

class Postworkout extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Postworkout Screen</Text>
            </View>
        );
    }
}

export { Postworkout };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
