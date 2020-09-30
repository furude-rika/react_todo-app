export const CHANGE_TITLE = 'CHANGE_TITLE';
export const SET_EDITING = 'CHANGE_EDITING';
export const SET_NEW_TITLE = 'SET_NEW_TITLE';

export const changeTitle = (id, title) => ({ type: CHANGE_TITLE, id, title });
export const setEditing = (editing, id) => ({ type: SET_EDITING, editing, id });
export const setNewTitle = title => ({ type: SET_NEW_TITLE, title });

export const queryReducer = (state, action) => {
  switch (action.type) {
    case CHANGE_TITLE:
      return {
        ...state,
        newTitle: action.title,
        todos: state.todos.map((todo) => {
          if (todo.id === action.id) {
            return {
              ...todo,
              title: action.title,
            };
          }

          return todo;
        }),
      };

    case SET_EDITING:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.id) {
            return {
              ...todo,
              editing: action.editing,
            };
          }

          return todo;
        }),
      };

    case SET_NEW_TITLE:
      return {
        ...state,
        newTitle: action.title,
      };

    default:
      return state;
  }
};

export default queryReducer;
