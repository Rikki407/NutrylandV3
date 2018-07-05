import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

const Card = ({ onPress, children }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View>{children}</View>
        </TouchableOpacity>
    );
};

export default Card;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    }
});
