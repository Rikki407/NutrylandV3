import React from 'react';
import { Image, Dimensions, View } from 'react-native';
import {
    Container,
    Header,
    Content,
    Card,
    CardItem,
    Thumbnail,
    Text,
    Button,
    Left,
    Icon,
    Body,
    Right
} from 'native-base';
const { width } = Dimensions.get('window');

const MenuItemsCard = ({ imgUrl, itemName }) => {
    return (
        <View>
            <Content
                style={{
                    width: width - 40,
                    alignSelf: 'center',
                    marginTop: 10
                }}
            >
                <Card>
                    <CardItem cardBody>
                        <Image
                            source={{ uri: imgUrl }}
                            style={{ height: 200, width: null, flex: 1 }}
                        />
                    </CardItem>
                    <CardItem>
                        <Body
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <Text
                                style={{
                                    fontWeight: '600'
                                }}
                            >
                                {itemName}
                            </Text>
                        </Body>

                        <Right>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            >
                                <Button transparent success>
                                    <Icon
                                        type="FontAwesome"
                                        name="minus-circle"
                                        style={{ fontSize: 28 }}
                                    />
                                </Button>
                                <Text
                                    style={{
                                        fontSize: 22,
                                        color: '#1CB686',
                                        marginHorizontal: 2
                                    }}
                                >
                                    0
                                </Text>
                                <Button transparent success>
                                    <Icon
                                        type="FontAwesome"
                                        name="plus-circle"
                                        style={{ fontSize: 28 }}
                                    />
                                </Button>
                            </View>
                        </Right>
                    </CardItem>
                </Card>
            </Content>
        </View>
    );
};

export default MenuItemsCard;
