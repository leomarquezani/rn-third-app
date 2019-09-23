import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { MEALS } from '../data/dummy-data';
import MealsList from '../components/MealsList';
import CustomerHeaderButton from '../components/HeaderButton';

const FavoritesScreen = (props) => {

    const displayedMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');

    return (
        <MealsList 
            listData={displayedMeals} 
            navigation={props.navigation}
        />
    );
};

FavoritesScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Your Favorites',
        headerLeft: 
            <HeaderButtons HeaderButtonComponent={CustomerHeaderButton}>
                <Item 
                    title="Menu" 
                    iconName="ios-menu" 
                    onPress={() => {
                        navData.navigation.toggleDrawer();
                    }}/>
            </HeaderButtons>
    };
};

export default FavoritesScreen;