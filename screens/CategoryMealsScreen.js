import React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import Colors from '../Constants/Colors';

const CategoryMealsScreen = (props) => {
    const categoryId = props.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId);
    return (
        <View style={styles.screen}>
            <Text>{selectedCategory.title}</Text>
            <Text>Categories Meals Screen</Text>
            <Button title="Go to Detail" onPress={() => {
                props.navigation.navigate({routeName: 'MealDetail'});
            }}/>
            <Button title="Go Back" onPress={() => {
                props.navigation.goBack();
            }}/>
        </View>
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
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoryMealsScreen;