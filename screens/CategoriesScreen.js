import React from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import Colors from '../Constants/Colors';


const CategoriesScreen = (props) => {

    const renderGridItem = (itemData) => {
        return (
            <TouchableOpacity style={styles.itemGrid} onPress={() => {
                props.navigation.navigate({ 
                    routeName: 'CategoryMeals',
                    params: {
                        categoryId: itemData.item.id
                    } 
                });
            }}>
                <View>
                    <Text>
                        {itemData.item.title}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <FlatList
            keyExtractor={(item, index) => item.id}
            data={CATEGORIES} renderItem={renderGridItem} numColumns={2}
        />
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemGrid: {
        flex: 1,
        margin: 15,
        height: 150
    }
});

export default CategoriesScreen;