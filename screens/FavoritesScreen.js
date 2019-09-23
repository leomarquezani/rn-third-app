import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import MealsList from '../components/MealsList';
import CustomerHeaderButton from '../components/HeaderButton';

const FavoritesScreen = (props) => {

    const favMeals = useSelector(state => state.meals.favoriteMeals);
    
    return (
        <MealsList 
            listData={favMeals} 
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