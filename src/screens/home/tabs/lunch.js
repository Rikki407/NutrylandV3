import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Dimensions,
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
                    <Header hasSegment style={{ backgroundColor: '#ffffff' }}>
                        <Left>
                            <Button transparent>
                                <Icon
                                    name="md-menu"
                                    color="#1CB686"
                                    size={28}
                                />
                            </Button>
                        </Left>
                        <Body>
                            <Segment>
                                <Button
                                    first
                                    style={{
                                        borderColor: '#1CB686'
                                    }}
                                >
                                    <Text
                                        style={{
                                            color: '#1CB686'
                                        }}
                                    >
                                        High Protien
                                    </Text>
                                </Button>
                                <Button
                                    last
                                    active
                                    style={{
                                        borderColor: '#1CB686',
                                        backgroundColor: '#1CB686'
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
                                        <MenuItemsCard itemName="Panner and Veggie Sub" imgUrl='http://flavouroma.com/wp-content/uploads/2017/05/paneer-bhurji-recipe-13.jpg' />
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
                                            Non Vegetarian
                                        </Text>
                                        <MenuItemsCard itemName="Chicken Ceasar Salad" imgUrl='https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--327831_11.jpg?itok=8GjuBS4F' />
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
                                            Eggiterian
                                        </Text>
                                        <MenuItemsCard itemName="Soya and Tofu Delight Sandwich" imgUrl='https://www.ndtv.com/cooks/images/grilled.sandwich.jpg' />
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
                    </Content>
                </Container>
                <SnackBar
                    visible
                    textMessage="Items in your cart"
                    actionHandler={() => {
                        console.log('snackbar button clicked!');
                    }}
                    actionText="Checkout"
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
