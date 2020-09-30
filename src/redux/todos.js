export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const FILTER_TODOS = 'FILTER_TODOS';
export const CHANGE_TODO_STATUS = 'CHANGE_TODO_STATUS';
export const TOGGLE_ALL = 'TOGGLE_ALL';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';
export const SET_TITLE = 'SET_TITLE';

export const addTodo = title => ({ type: ADD_TODO, title });
export const deleteTodo = id => ({ type: DELETE_TODO, id });
export const filterTodos = filterType => ({ type: FILTER_TODOS, filterType });
export const changeTodoStatus = id => ({ type: CHANGE_TODO_STATUS, id });
export const toggleAll = status => ({ type: TOGGLE_ALL, status });
export const clearCompleted = status => ({ type: CLEAR_COMPLETED, status });
export const setTitle = title => ({ type: SET_TITLE, title });

export const todosReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            title: action.title,
            id: +new Date(),
            completed: false,
            editing: false,
          },
        ],
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id),
      };

    case FILTER_TODOS:
      return {
        ...state,
        visibleTodos: action.filterType,
      };

    case CHANGE_TODO_STATUS:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.id) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }

          return todo;
        }),
      };

    case TOGGLE_ALL:
      return {
        ...state,
        todos: action.status
          ? (state.todos.map(todo => ({
            ...todo,
            completed: action.status,
          })))
          : (state.todos.map(todo => ({
            ...todo,
            completed: !action.status,
          }))),
      };

    case CLEAR_COMPLETED:
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.completed),
      };

    case SET_TITLE:
      return {
        ...state,
        title: action.title,
      };

    default:
      return state;
  }
};

export default todosReducer;
