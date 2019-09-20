import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../Constants/Colors';
import FavoritesScreen from '../screens/FavoritesScreen';

const MealsNavigator = createStackNavigator(
    {
        Categories: {
            screen: CategoriesScreen,
            navigationOptions: {
                headerTitle: 'Meals Categories'
            }
        },
        MealDetail: MealDetailScreen,
        CategoryMeals: CategoryMealsScreen,
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Colors.primaryColor
            },
            headerTintColor: 'white'
        }
    }
);

const MealsFavTabNavigator = createBottomTabNavigator(
    {
        Meals: {
            screen: MealsNavigator,
            navigationOptions: {
                tabBarIcon: (tabInfo) => {
                    return <Ionicons 
                        name="ios-restaurant" 
                        size={25} 
                        color={tabInfo.tintColor}
                    />
                }
            }
        },
        Favorites: {
            screen: FavoritesScreen,
            navigationOptions: {
                tabBarIcon: (tabInfo) => {
                    return <Ionicons 
                        name="ios-star" 
                        size={25} 
                        color={tabInfo.tintColor}
                    />
                }
            }
        }
    },
    {
        tabBarOptions: {
            activeTintColor: Colors.accentColor
        }
    }
);

export default createAppContainer(MealsFavTabNavigator);