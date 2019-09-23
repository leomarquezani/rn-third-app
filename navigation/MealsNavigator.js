import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../Constants/Colors';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';

const defautNavOptions = {
    headerStyle: {
        backgroundColor: Colors.primaryColor
    },
    headerTintColor: 'white',
    headerTitleStyle: {
        fontFamily: 'open-sans-bold'
    },
    headerBackTitleStyle: {
        fontFamily: 'open-sans'
    }
}

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
        defaultNavigationOptions: defautNavOptions
    }
);

const FavNavigator = createStackNavigator(
    {
        Favorites: FavoritesScreen,
        MealDetail: MealDetailScreen
    },
    {
        defaultNavigationOptions: defautNavOptions
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
            screen: FavNavigator,
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
            activeTintColor: Colors.accentColor,
            labelStyle: {
                fontFamily: 'open-sans-bold'
            }
        }
    }
);

const FiltersNavigator = createStackNavigator(
    {
        FiltersScreen: FiltersScreen
    },
    {
        defaultNavigationOptions: defautNavOptions
    }
);

const MainNavigator = createDrawerNavigator(
    {
        MealsFavorites: 
        { 
            screen: MealsFavTabNavigator,
            navigationOptions: {
                drawerLabel: 'Meals'
            }
        },
        FiltersScreen: 
        { 
            screen: FiltersNavigator,
            navigationOptions: {
                drawerLabel: 'Filters'
            }
        },
    },
    {
        contentOptions: {
            activeTintColor: Colors.accentColor,
            labelStyle: {
                fontFamily: 'open-sans-bold'
            }
        }
    }
);

export default createAppContainer(MainNavigator);