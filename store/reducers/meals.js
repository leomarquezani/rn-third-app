import { MEALS } from '../../data/dummy-data';
import { TOGGLE_FAVORITE } from '../actions/meals';

const initialState = {
    meals: MEALS,
    filteredmeals: MEALS,
    favoriteMeals: []
};

const mealsReducer = (state = initialState, action) => {

    switch (action.type) {
        case TOGGLE_FAVORITE:
            const existingIndex = state.favoriteMeals.findIndex(meal => meal.id === action.mealId);

            console.log('TOGGLE FAVORITE ', existingIndex);

            if (existingIndex >= 0) {
                console.log('IF ', updatedFavMeals);
                const updatedFavMeals = [...state.favoriteMeals];
                updatedFavMeals.splice(existingIndex, 1);

                console.log('UPDATE ', updatedFavMeals);

                return { ...state, favoriteMeals: updatedFavMeals };
            }
            else {
                console.log('ELSE');
                const meal = state.meals.find(meal => meal.id === action.mealId);
                console.log('ELSE ', meal);
                return { ...state, favoriteMeals: state.favoriteMeals.concat(meal) };
            }
        default:
            return state
    }
}

export default mealsReducer;