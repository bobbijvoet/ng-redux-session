function getActionTypes(actions) {
    return actions.map(function(action) {
        return action.type + '';
    }).join(' -> ');
}

export {getActionTypes}
