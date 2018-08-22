import React, { Component } from 'react';
import {
    Text,
    View,
    SafeAreaView,
    ScrollView,
    Image,
    Dimensions
} from 'react-native';
import  from '../../../actions';
import Category from './category';
import Home from './home';

const { width } = Dimensions.get('window');
class Breakfast extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView scrollEventThrottle={16}>
                    <View
                        style={{
                            flex: 1,
                            backgroundColor: 'white',
                            paddingTop: 20
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 24,
                                fontWeight: '700',
                                paddingHorizontal: 20
                            }}
                        >
                            What can we help you find Varun?
                        </Text>
                        <View style={{ height: 130, marginTop: 20 }}>
                            <ScrollView
                                horizontal
                                showsHorizontalScrollIndicator={false}
                            >
                                <Category
                                    imageUri={require('../../../../assets/splash.png')}
                                    name="Home"
                                />
                                <Category
                                    imageUri={require('../../../../assets/splash.png')}
                                    name="Experiences"
                                />
                                <Category
                                    imageUri={require('../../../../assets/splash.png')}
                                    name="Restaurant"
                                />
                            </ScrollView>
                        </View>
                        <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                            <Text style={{ fontSize: 24, fontWeight: '700' }}>
                                Introducing Airbnb Plus
                            </Text>
                            <Text style={{ fontWeight: '100', marginTop: 10 }}>
                                A new selection of homes verified for quality
                                and comfort
                            </Text>
                            <View
                                style={{
                                    width: width - 40,
                                    height: 200,
                                    marginTop: 20
                                }}
                            >
                                <Image
                                    style={{
                                        flex: 1,
                                        height: null,
                                        width: null,
                                        resizeMode: 'cover',
                                        borderRadius: 5,
                                        borderWidth: 1,
                                        borderColor: '#dddddd'
                                    }}
                                    source={require('../../../../assets/splash.png')}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={{ marginTop: 40 }}>
                        <Text
                            style={{
                                fontSize: 24,
                                fontWeight: '700',
                                paddingHorizontal: 20
                            }}
                        >
                            Homes around the world
                        </Text>
                        <View
                            style={{
                                paddingHorizontal: 20,
                                marginTop: 20,
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                justifyContent: 'space-between'
                            }}
                        >
                            <Home width={width} />
                            <Home width={width} />
                            <Home width={width} />
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

export { Breakfast };
