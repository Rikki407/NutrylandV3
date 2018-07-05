import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { Breakfast, Lunch, Dinner, Postworkout } from './';

export default createBottomTabNavigator(
    {
        Breakfast: {
            screen: Breakfast,
            navigationOptions: {
                tabBarLabel: 'Breakfast',
                tabBarIcon: ({ tintColor }) => (
                    <Icon
                        type="FontAwesome"
                        name="utensils"
                        style={{ fontSize: 24, tintColor }}
                    />
                )
            }
        },
        Lunch: {
            screen: Lunch,
            navigationOptions: {
                tabBarLabel: 'Lunch',
                tabBarIcon: ({ tintColor }) => (
                    <Icon
                        type="FontAwesome"
                        name="utensils"
                        style={{ fontSize: 24, tintColor }}
                    />
                )
            }
        },
        Dinner: {
            screen: Dinner,
            navigationOptions: {
                tabBarLabel: 'Dinner',
                tabBarIcon: ({ tintColor }) => (
                    <Icon
                        type="FontAwesome"
                        name="utensils"
                        style={{ fontSize: 24, tintColor }}
                    />
                )
            }
        },
        Postworkout: {
            screen: Postworkout,
            navigationOptions: {
                tabBarLabel: 'Postworkout',
                tabBarIcon: ({ tintColor }) => (
                    <Icon
                        type="FontAwesome"
                        name="utensils"
                        style={{ fontSize: 24, tintColor }}
                    />
                )
            }
        }
    },
    {
        tabBarOptions: {
            activeTintColor: 'red',
            inactiveTintColor: 'grey',
            style: {
                backgroundColor: 'white',
                borderTopWidth: 0,
                shadowOffset: { width: 5, height: 3 },
                shadowColor: 'black',
                shadowOpacity: 0.5,
                elevation: 5
            }
        }
    }
);
