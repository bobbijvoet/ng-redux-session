import {stepsReducer} from "./stepsReducer.ts";
import {StepsActions} from "./../actions/stepsActions.ts"

if (!Array.prototype.find) {
    Array.prototype.find = function (predicate) {
        if (this === null) {
            throw new TypeError('Array.prototype.find called on null or undefined');
        }
        if (typeof predicate !== 'function') {
            throw new TypeError('predicate must be a function');
        }
        var list = Object(this);
        var length = list.length >>> 0;
        var thisArg = arguments[1];
        var value;

        for (var i = 0; i < length; i++) {
            value = list[i];
            if (predicate.call(thisArg, value, i, list)) {
                return value;
            }
        }
        return undefined;
    };
}


describe('given the sprint reducer', function () {

    var state = stepsReducer(undefined, undefined);

    describe('when initializing', function () {
        it('should set the initial step', function () {
            expect(state.currentStep.name).toEqual('stap1');
        });
    });

    describe('when navigate to next step', function () {
        beforeEach(function () {
            var action = {
                type: 'NEXT_STEP'
            };
            state = stepsReducer(state, action);
        });

        it('should set the sprint number', function () {
            expect(state.index).toEqual(1);
        });
    });

    describe('when navigate to prev step', function () {
        beforeEach(function () {
            var action = {
                type: 'PREV_STEP'
            };
            state = stepsReducer(state, action);
        });

        it('should set the sprint number', function () {
            expect(state.index).toEqual(0);
        });
    });

    describe('when navigate to step', function () {
        beforeEach(function () {
            var action = {
                type: 'GOTO_STEP',
                payload: {
                    step: 2
                }
            };
            state = stepsReducer(state, action);
        });

        it('should set the sprint number', function () {
            expect(state.index).toEqual(2);
        });
    });
});
