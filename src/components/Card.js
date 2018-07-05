import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import { Icon } from 'native-base';

const Card = ({ onPress, source, children }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.containerStyle}>
            <Image
                source={source}
                style={{
                    alignSelf: 'center',
                    height: 33,
                    width: 33,
                    padding: 10,
                    paddingRight: 20
                }}
            />
            <Text
                style={{
                    padding: 10,
                    paddingLeft: 30,
                    fontSize: 18,
                    color: '#31373f'
                }}
            >
                {children}
            </Text>
        </TouchableOpacity>
    );
};

export default Card;

const styles = StyleSheet.create({
    containerStyle: {
        marginTop: 10,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 1
    }
});
