import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class Home extends Component {
    render() {
        return (
            <View
                style={{
                    width: this.props.width / 2 - 30,
                    height: this.props.width / 2 - 30,
                    borderWidth: 0.5,
                    borderColor: '#dddddd'
                }}
            >
                <View style={{ flex: 1 }}>
                    <Image
                        style={{
                            flex: 1,
                            width: null,
                            height: null,
                            resizeMode: 'cover'
                        }}
                        source={require('../../../../assets/splash.png')}
                    />
                </View>
                <View
                    style={{
                        flex: 1,
                        alignItems: 'flex-start',
                        justifyContent: 'space-evenly',
                        paddingLeft: 10
                    }}
                >
                    <Text
                        style={{
                            fontSize: 10,
                            color: '#b63838'
                        }}
                    >
                        PRIVATE ROOM - 2 BEDS
                    </Text>
                    <Text style={{ fontSize: 12, fontWeight: 'bold' }}>
                        {this.props.itemName}
                    </Text>
                    <Text style={{ fontSize: 10 }}>₹{this.props.itemPrice}</Text>
                </View>
            </View>
        );
    }
}

export default Home;
