import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import { Lunch, Dinner, Postworkout } from './tabs';
import Breakfast from './tabs/breakfast';

export default createBottomTabNavigator(
    {
        // Breakfast: {
        //     screen: Breakfast,
        //     navigationOptions: {
        //         tabBarLabel: 'Breakfast',
        //         tabBarIcon: ({ tintColor }) => (
        //             <Icon name="md-sunny" color={tintColor} size={24} />
        //         )
        //     }
        // },
        Lunch: {
            screen: Lunch,
            navigationOptions: {
                tabBarLabel: 'Lunch',
                tabBarIcon: ({ tintColor }) => (
                    <IconMC name="food" color={tintColor} size={24} />
                )
            }
        },
        Dinner: {
            screen: Dinner,
            navigationOptions: {
                tabBarLabel: 'Dinner',
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="ios-moon" color={tintColor} size={24} />
                )
            }
        },
        Postworkout: {
            screen: Postworkout,
            navigationOptions: {
                tabBarLabel: 'Postworkout',
                tabBarIcon: ({ tintColor }) => (
                    <IconMC name="run-fast" color={tintColor} size={24} />
                )
            }
        }
    },
    {
        tabBarOptions: {
            activeTintColor: '#EA9E3F',
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
