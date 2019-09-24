import { MEALS } from '../../data/dummy-data';
import { TOGGLE_FAVORITE, SET_FILTERS } from '../actions/meals';

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
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
        case SET_FILTERS:
            const appliedFilters = action.filters;
            const updatedFilteredMeals = state.meals.filter(meal => {
                if (appliedFilters.glutenFree && !meal.isGlutenFree) {
                    return false;
                }
                if (appliedFilters.lactoseFree && !meal.isLactoseFree) {
                    return false;
                }
                if (appliedFilters.vegetarian && !meal.isVegetarian) {
                    return false;
                }
                if (appliedFilters.vegan && !meal.isVegan) {
                    return false;
                }
                return true;
            });
            return { ...state, filteredMeals: updatedFilteredMeals };
        default:
            return state
    }
}

export default mealsReducer;