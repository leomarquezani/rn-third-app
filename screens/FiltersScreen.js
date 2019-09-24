import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useDispatch} from 'react-redux';

import CustomerHeaderButton from '../components/HeaderButton';
import Colors from '../Constants/Colors';
import { setFilters } from '../store/actions/meals'

const FilterSwitch = props => {
    return (
        <View style={styles.filterContainer}>
            <Text>{props.label}</Text>
            <Switch
                value={props.state}
                onValueChange={props.onChange}
                trackColor={{ true: Colors.primaryColor }}
            />
        </View>
    );
}

const FiltersScreen = (props) => {
    const { navigation } = props;
    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVeganFree, setIsVeganFree] = useState(false);
    const [isVegetariaFree, setIsVegetarianFree] = useState(false);

    const dispatch = useDispatch();

    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegan: isVeganFree,
            vegetarian: isVegetariaFree
        };

        dispatch(setFilters(appliedFilters));
    }, [isGlutenFree, isVeganFree, isVegetariaFree, isLactoseFree, dispatch]);

    useEffect(() =>{
        navigation.setParams({save: saveFilters});
    }, [saveFilters]);

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters</Text>
            <FilterSwitch 
                label="Gluten Free"
                state={isGlutenFree}
                onChange={newValeu => setIsGlutenFree(newValeu)}
            />
            <FilterSwitch 
                label="Lactose Free"
                state={isLactoseFree}
                onChange={newValeu => setIsLactoseFree(newValeu)}
            />
            <FilterSwitch 
                label="Vegan Free"
                state={isVeganFree}
                onChange={newValeu => setIsVeganFree(newValeu)}
            />
            <FilterSwitch 
                label="Vegetarian Free"
                state={isVegetariaFree}
                onChange={newValeu => setIsVegetarianFree(newValeu)}
            />
        </View>
    );
};

FiltersScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Filters',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={CustomerHeaderButton}>
                <Item
                    title="Menu"
                    iconName="ios-menu"
                    onPress={() => {
                        navData.navigation.toggleDrawer();
                    }} />
            </HeaderButtons>
        ),
        headerRight: (
            <HeaderButtons HeaderButtonComponent={CustomerHeaderButton}>
                <Item
                    title="Save"
                    iconName="ios-save"
                    onPress={navData.navigation.getParam('save')} />
            </HeaderButtons>
        )
    };

};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 15
    },
    title: {
        fontFamily: 'open-sans-bold',
        textAlign: 'center',
        fontSize: 20,
        margin: 20
    }
});

export default FiltersScreen;