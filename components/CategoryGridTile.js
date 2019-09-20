import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CategoryGridTile = (props) => {

    return (
        <TouchableOpacity style={styles.itemGrid} onPress={props.onSelect}>
            <View style={{ ...styles.container, ...{ backgroundColor: props.color }}}>
                <Text style={styles.title} numberOfLines={2}>
                    {props.title}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    itemGrid: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10
    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 3,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 14,
        textAlign: 'right'
    }
});

export default CategoryGridTile;