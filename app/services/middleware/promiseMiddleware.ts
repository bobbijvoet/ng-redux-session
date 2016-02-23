PromiseMiddleware.$inject = ['$q'];

function PromiseMiddleware($q) {
    return middleware;

    function middleware(store) {
        return function (next) {
            return function (action) {
                if (!actionContainsPromise(action)) {
                    return next(action);
                }

                next(createAction(action, {
                    suffix: 'PENDING',
                    payload: action.payload.data
                }));

                // Convert to array if needed
                if (!Array.isArray(action.payload.promise)) {
                    action.payload.promise = [action.payload.promise];
                }

                // Chain all promises
                action.payload.promise.reduce(function (promise, nextPromise) {
                    return promise.then(function () {
                        return nextPromise.then(function (response, x, y) {
                            next(createAction(action, {
                                suffix: 'FULFILLED',
                                payload: response
                            }));
                        }, function (error) {
                            next(createAction(action, {
                                suffix: 'REJECTED',
                                payload: error,
                                error: true
                            }));
                        });
                    });
                }, $q.resolve());
            };
        };
    }

    function createAction(baseAction, options) {
        options = options || {};

        var result = {
            type: baseAction.type + '_' + options.suffix,
            payload: options.payload
        };

        if (baseAction.meta) {
            result.meta = baseAction.meta;
        }

        if (options.error) {
            result.error = options.error;
        }

        return result;
    }

    function actionContainsPromise(action) {
        var payload = action.payload;

        if (payload !== null && typeof payload === 'object') {
            return payload.promise && (typeof payload.promise.then === 'function' || Array.isArray(action.payload.promise));
        }
    }
}

export {PromiseMiddleware};
