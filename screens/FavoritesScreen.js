import React from 'react';
import { View, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import MealsList from '../components/MealsList';
import CustomerHeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';

const FavoritesScreen = (props) => {

    const favMeals = useSelector(state => state.meals.favoriteMeals);

    if (favMeals.length === 0 || !favMeals) {
        return (
            <View style={styles.content}>
                <DefaultText>No favorites. Start Adding Some</DefaultText>
            </View>
        );
    }

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

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default FavoritesScreen;