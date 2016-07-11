import {sprintReducer} from "./sprintReducer.ts";
import {usingStates} from "../../../test/karma-extensions/usingStates.ts";

describe('given the sprint reducer', function () {

    usingStates(sprintReducer, [
        [
            undefined,
            [{}],
            {number: 0, burnedPoints: 0, done:false}
        ],
        [
            undefined,
            [{type: 'FETCH_SPRINT_FULFILLED', payload: {number: 1}}],
            {number: 1, burnedPoints: 0, done: false}
        ]
    ]);

});
