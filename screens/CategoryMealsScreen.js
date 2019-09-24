import React from 'react';
import { View, StyleSheet} from 'react-native';
import { useSelector } from 'react-redux';

import { CATEGORIES } from '../data/dummy-data';

import MealsList from '../components/MealsList'
import DefaultText from '../components/DefaultText';


const CategoryMealsScreen = (props) => {

    const categoryId = props.navigation.getParam('categoryId');

    const availableMeals = useSelector(state => state.meals.filteredMeals);

    const displayedMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0);

    if (displayedMeals.length === 0) {
        return (
            <View style={StyleSheet.content}>
                <DefaultText>No meals found, check your filters</DefaultText>
            </View>
        );
    }

    return (
        <MealsList 
            listData={displayedMeals}
            navigation={props.navigation}
        />
    );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
    const categoryId = navigationData.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId);

    return {
        headerTitle: selectedCategory.title
    };
};

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoryMealsScreen;