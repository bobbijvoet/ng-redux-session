

let nextId = 0;
function TodoActions() {

    return {
        addTodo: addTodo
    };

    function addTodo(text) {
        return {
            type: 'ADD_TODO',
            id:nextId,
            text
        }
    }

}

export {TodoActions};
