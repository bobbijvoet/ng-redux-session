import {combineReducers} from 'redux';
import {stepsReducer} from "./stepsReducer.ts";
import {addressReducer} from "./addressReducer.ts";

rootReducerConfig.$inject = ['$ngReduxProvider'];

function rootReducerConfig($ngReduxProvider) {
    var reducer = combineReducers({
        stepsState: stepsReducer,
        address:addressReducer
    });

    $ngReduxProvider.createStoreWith(reducer, [
        'thunkMiddleware',
        'promiseMiddleware',
        'loggerMiddleware'
    ]);
}

export {rootReducerConfig};
