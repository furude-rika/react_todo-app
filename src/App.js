import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TodoList } from './components/TodoList';
import { TodosFilter } from './components/TodosFIlter';

import { FILTERS } from './constants';
import {
  addTodo,
  filterTodos,
  toggleAll,
  clearCompleted,
  setTitle,
} from './redux/todos';

function App() {
  const todos = useSelector(state => state.todos);
  const visibleTodos = useSelector(state => state.visibleTodos);
  const todoTitle = useSelector(state => state.title);
  const dispatch = useDispatch();

  const createTodo = (title) => {
    const action = addTodo(title);

    dispatch(action);
  };

  const filteredTodos = todos.filter((todo) => {
    switch (visibleTodos) {
      case FILTERS.completed:
        return todo.completed;

      case FILTERS.active:
        return !todo.completed;

      default:
        return todo;
    }
  });

  const filterTodosFunc = (filter) => {
    const action = filterTodos(filter);

    dispatch(action);
  };

  const areAllCompleted = useMemo(
    () => todos.every(todo => todo.completed), [todos],
  );

  const toggleAllFunc = (status) => {
    const action = toggleAll(status);

    dispatch(action);
  };

  const activeTodos = useMemo(
    () => todos.filter(todo => !todo.completed), [todos],
  );

  const completedTodos = useMemo(
    () => todos.filter(todo => todo.completed), [todos],
  );

  const clearCompletedFunc = () => {
    const action = clearCompleted();

    dispatch(action);
  };

  const setTitleFunc = (title) => {
    const action = setTitle(title);

    dispatch(action);
  };

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>

        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <input
            type="text"
            className="new-todo"
            value={todoTitle}
            placeholder="What needs to be done?"
            onChange={(event) => {
              setTitleFunc(event.target.value);
            }}
            onKeyDown={(event) => {
              if (event.key === 'Enter' && todoTitle.trim()) {
                createTodo(todoTitle.trim());
                setTitleFunc('');
              }
            }}
          />
        </form>
      </header>

      <section className="main">
        <input
          type="checkbox"
          id="toggle-all"
          checked={todos.length > 0 && areAllCompleted}
          className="toggle-all"
          onChange={() => {
            toggleAllFunc(areAllCompleted);
          }}
        />
        <label htmlFor="toggle-all">Mark all as complete</label>

        <TodoList todos={filteredTodos} />
      </section>

      {todos.length > 0 && (
        <footer className="footer">
          <TodosFilter
            filterTodos={filterTodosFunc}
            activeTodos={activeTodos}
            completedTodos={completedTodos}
            clearCompleted={clearCompletedFunc}
            visibleTodos={visibleTodos}
          />
        </footer>
      )}
    </section>
  );
}

export default App;
