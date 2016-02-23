import {sprintReducer} from "./sprintReducer.ts";

describe('given the sprint reducer', function () {

    describe('when initializing', function () {
        var state = sprintReducer(undefined, undefined);

        it('should return the initial state', function () {
            expect(state).toEqual({number: 0, burnedPoints: 0});
        });
    });

    describe('when fetched a sprint', function () {
        var state = sprintReducer({}, {
            type: 'FETCH_SPRINT_FULFILLED',
            payload: {
                number: 1
            }
        });

        it('should set the sprint number', function () {
            expect(state.number).toEqual(1);
        });
    });

});
