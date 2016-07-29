let nextId = 0;
function TodoActions() {

    return {
        addTodo: addTodo,
        toggleTodo: toggleTodo,
        setVisibilityFilter:setVisibilityFilter
    };

    function addTodo(text) {
        return {
            type: 'ADD_TODO',
            id:nextId++,
            text
        }
    }

    function toggleTodo(id){
        return {
            type:'TOGGLE_TODO',
            id
        }
    }

    function setVisibilityFilter(filter) {
        return {
            type:'SET_VISIBILITY_FILTER',
            filter
        }
    }

}

export {TodoActions};
