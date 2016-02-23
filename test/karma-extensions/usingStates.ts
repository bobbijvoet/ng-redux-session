import {getActionTypes} from "./getActionTypes.ts";
import {testStateTransition} from "./testStateTransition.ts";
import {using} from "./using.ts";

function usingStates(reducer, statesTransitions) {
    using(statesTransitions, function(initialState, actions, expectedState) {
        it ('should be in the correct state after actions: ' + getActionTypes(actions), function() {
           testStateTransition(reducer, initialState, actions, expectedState);
        });
    });
}

export {usingStates}
