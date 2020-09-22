import React, { useState, useEffect, useMemo } from 'react';
import { TodoList } from './components/TodoList';
import { TodosFilter } from './components/TodosFIlter';

import { FILTERS } from './constants';

function App() {
  const [todos, setTodos] = useState([]);
  const [visibleTodos, setVisibleTodos] = useState([]);
  const [todoTitle, setTodoTitle] = useState('');
  const [todosStatus, setTodosStatus] = useState('');

  useEffect(() => {
    setVisibleTodos(todos);
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

  const getTodos = (status) => {
    switch (status) {
      case FILTERS.all:
        setVisibleTodos(todos);
        setTodosStatus(FILTERS.all);
        break;
      case FILTERS.completed:
        setVisibleTodos(todos.filter(todo => todo.completed));
        setTodosStatus(FILTERS.completed);
        break;
      case FILTERS.active:
        setVisibleTodos(todos.filter(todo => !todo.completed));
        setTodosStatus(FILTERS.active);
        break;
      default:
        break;
    }
  };

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

  const areAllCompleted = todos.every(todo => todo.completed);

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
    setTodos(todos.filter(todo => !todo.completed));
  };

  const changeTitle = (todoId, newTitle) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          title: newTitle,
        };
      }

      return todo;
    });

    setTodos(newTodos);
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
          todos={visibleTodos}
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
            todosStatus={todosStatus}
            getTodos={getTodos}
          />
        </footer>
      )}
    </section>
  );
}

export default App;
