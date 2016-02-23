ThunkMiddleware.$inject = [];

function ThunkMiddleware() {

    return middleware;

    function middleware(store) {
        return function (next) {
            return function (action) {
                return typeof action === 'function' ? action(store.dispatch, store.getState) : next(action);
            };
        };
    }
}

export {ThunkMiddleware}
