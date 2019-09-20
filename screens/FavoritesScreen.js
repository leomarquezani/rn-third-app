import React from 'react';

import { MEALS } from '../data/dummy-data';

const FavoritesScreen = (props) => {

    const displayedMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');

    return (
        <MealList 
            listData={displayedMeals} 
            navigation={props.navigation}
        />
    );
};

FavoritesScreen.navigationOptions = {
    headerTitle: 'Your Favorites'
};

export default FavoritesScreen;