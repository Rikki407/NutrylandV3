import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import SnackBar from 'react-native-snackbar-component';

class Lunch extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SnackBar
                    visible
                    textMessage="Hello There!"
                    actionHandler={() => {
                        console.log('snackbar button clicked!');
                    }}
                    actionText="let's go"
                />{' '}
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
