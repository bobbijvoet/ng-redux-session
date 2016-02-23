import {combineReducers} from 'redux';
import {storiesReducer} from "./storiesReducer.ts";
import {sprintsReducer} from "./sprintsReducer.ts";

rootReducerConfig.$inject = ['$ngReduxProvider'];

function rootReducerConfig($ngReduxProvider) {
    let reducer = combineReducers({
        //stories: storiesReducer,
        //sprints: sprintsReducer
    });

    $ngReduxProvider.createStoreWith(reducer, [
        //'thunkMiddleware',
        //'promiseMiddleware',
        //'loggerMiddleware'
    ]);

}

export {rootReducerConfig};
