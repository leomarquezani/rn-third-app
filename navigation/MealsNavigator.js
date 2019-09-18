import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../Constants/Colors';

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
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Colors.primaryColor
            },
            headerTintColor: 'white'
        }
    }
);

export default createAppContainer(MealsNavigator);