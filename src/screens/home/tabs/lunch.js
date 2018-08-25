import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Dimensions,
    Image
} from 'react-native';
import SnackBar from 'react-native-snackbar-component';
import Icon from 'react-native-vector-icons/Ionicons';
import {
    Container,
    Header,
    Left,
    Body,
    Right,
    Button,
    Segment,
    Content,
    Text
} from 'native-base';
import Category from './category';
import Home from './home';
import MenuItemsCard from '../../../components/MenuItemsCard';
const { width } = Dimensions.get('window');

class Lunch extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Container>
                    <Header hasSegment>
                        <Left>
                            <Button transparent>
                                <Icon
                                    name="md-menu"
                                    color="#f4511e"
                                    size={28}
                                />
                            </Button>
                        </Left>
                        <Body>
                            <Segment>
                                <Button
                                    first
                                    style={{
                                        borderColor: '#f4511e'
                                    }}
                                >
                                    <Text
                                        style={{
                                            color: '#f4511e'
                                        }}
                                    >
                                        High Protien
                                    </Text>
                                </Button>
                                <Button
                                    last
                                    active
                                    style={{
                                        borderColor: '#f4511e',
                                        backgroundColor: '#f4511e'
                                    }}
                                >
                                    <Text>Weight Loss</Text>
                                </Button>
                            </Segment>
                        </Body>
                        <Right />
                    </Header>
                    <Content>
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
                                        Today's Special
                                    </Text>
                                    <View
                                        style={{ height: 130, marginTop: 20 }}
                                    >
                                        <ScrollView
                                            horizontal
                                            showsHorizontalScrollIndicator={
                                                false
                                            }
                                        >
                                            <Category
                                                imageUri={require('../../../assets/NutryLandLogo.png')}
                                                name="Home"
                                            />
                                            <Category
                                                imageUri={require('../../../assets/NutryLandLogo.png')}
                                                name="Experiences"
                                            />
                                            <Category
                                                imageUri={require('../../../assets/NutryLandLogo.png')}
                                                name="Restaurant"
                                            />
                                        </ScrollView>
                                    </View>
                                    <View
                                        style={{
                                            marginTop: 40,
                                            paddingHorizontal: 20
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize: 24,
                                                fontWeight: '700'
                                            }}
                                        >
                                            Vegetarian
                                        </Text>
                                        <Text
                                            style={{
                                                fontWeight: '100',
                                                marginTop: 10
                                            }}
                                        >
                                            Paneer & Veggi Sub
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
                                                source={require('../../../assets/NutryLandLogo.png')}
                                            />
                                            <View
                                                style={{
                                                    justifyContent: 'flex-end',
                                                    alignSelf: 'center',
                                                    position: 'absolute'
                                                }}
                                            >
                                                <View
                                                    style={{
                                                        flexDirection: 'row'
                                                    }}
                                                >
                                                    <Button small warning>
                                                        <Text
                                                            style={{
                                                                fontWeight:
                                                                    '800'
                                                            }}
                                                        >
                                                            -
                                                        </Text>
                                                    </Button>
                                                    <Text
                                                        style={{
                                                            fontSize: 24,
                                                            paddingHorizontal: 2,
                                                            color: '#1CB686',
                                                            backgroundColor:
                                                                'white'
                                                        }}
                                                    >
                                                        0
                                                    </Text>
                                                    <Button small warning>
                                                        <Text
                                                            style={{
                                                                fontWeight:
                                                                    '800'
                                                            }}
                                                        >
                                                            +
                                                        </Text>
                                                    </Button>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <MenuItemsCard />
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
                    </Content>
                </Container>
                <SnackBar
                    visible
                    textMessage="Your Cart"
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
        justifyContent: 'center',
        backgroundColor: '#ffffff'
    }
});
