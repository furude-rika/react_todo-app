import React, { useState, useEffect, useMemo } from 'react';
import { TodoList } from './components/TodoList';
import { TodosFilter } from './components/TodosFIlter';

import { FILTERS } from './constants';

function App() {
  const [todos, setTodos] = useState([]);
  const [visibleTodos, setVisibleTodos] = useState(FILTERS.all);
  const [todoTitle, setTodoTitle] = useState('');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const createTodo = (title) => {
    setTodos([
      ...todos,
      {
        title,
        id: +new Date(),
        completed: false,
        editing: false,
      },
    ]);
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

  const changeTodoStatus = (todoId) => {
    setTodos(todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }

      return todo;
    }));
  };

  const areAllCompleted = useMemo(
    () => todos.every(todo => todo.completed), [todos],
  );

  const toggleAll = () => {
    if (areAllCompleted) {
      setTodos(todos.map(todo => ({
        ...todo,
        completed: false,
      })));
    } else {
      setTodos(todos.map(todo => ({
        ...todo,
        completed: true,
      })));
    }
  };

  const activeTodos = useMemo(
    () => todos.filter(todo => !todo.completed), [todos],
  );

  const deleteTodo = (todoId) => {
    setTodos(todos.filter(todo => todo.id !== todoId));
  };

  const completedTodos = useMemo(
    () => todos.filter(todo => todo.completed), [todos],
  );

  const clearCompleted = () => {
    setTodos(activeTodos);
  };

  const changeTitle = (todoId, newTitle) => {
    setTodos(todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          title: newTitle,
        };
      }

      return todo;
    }));
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
              setTodoTitle(event.target.value);
            }}
            onKeyDown={(event) => {
              if (event.key === 'Enter' && todoTitle.trim()) {
                createTodo(todoTitle.trim());
                setTodoTitle('');
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
          onChange={toggleAll}
        />
        <label htmlFor="toggle-all">Mark all as complete</label>

        <TodoList
          todos={filteredTodos}
          changeStatus={changeTodoStatus}
          deleteTodo={deleteTodo}
          changeTitle={changeTitle}
        />
      </section>

      {todos.length > 0 && (
        <footer className="footer">
          <TodosFilter
            activeTodos={activeTodos}
            completedTodos={completedTodos}
            clearCompleted={clearCompleted}
            visibleTodos={visibleTodos}
            setVisibleTodos={setVisibleTodos}
          />
        </footer>
      )}
    </section>
  );
}

export default App;
