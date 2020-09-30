import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { useSelector, useDispatch } from 'react-redux';
import {
  setEditing,
  setNewTitle,
  changeTitle,
  deleteTodo,
  changeTodoStatus,
} from '../../redux/store';

export const TodoItem = ({ id, title, completed, editing }) => {
  const newTitle = useSelector(state => state.newTitle);
  const dispatch = useDispatch();

  const changeTitleFunc = (todoId, value) => {
    const action = changeTitle(todoId, value);

    dispatch(action);
  };

  const setNewTitleFunc = (todoId, value) => {
    const action = setNewTitle(todoId, value);

    dispatch(action);
  };

  const setEditingFunc = (status, todoId) => {
    const action = setEditing(status, todoId);

    dispatch(action);
  };

  const deleteTodoFunc = (todoId) => {
    const action = deleteTodo(todoId);

    dispatch(action);
  };

  const changeTodoStatusFunc = (todoId) => {
    const action = changeTodoStatus(todoId);

    dispatch(action);
  };

  return (
    <li
      className={classNames({
        view: !completed,
        completed,
        editing,
      })}
    >
      <div className="view">
        <input
          type="checkbox"
          checked={completed}
          className="toggle"
          onChange={() => {
            changeTodoStatusFunc(id);
          }}
        />
        <label
          onDoubleClick={() => {
            setEditingFunc(true, id);
          }}
        >
          {title}
        </label>
        <button
          type="button"
          className="destroy"
          onClick={() => {
            deleteTodoFunc(id);
          }}
        />
      </div>
      {editing && (
        <input
          autoFocus
          type="text"
          className="edit"
          value={newTitle}
          onChange={(event) => {
            setNewTitleFunc(event.target.value);
          }}
          onBlur={() => {
            if (newTitle.trim()) {
              changeTitleFunc(id, newTitle);
            } else {
              deleteTodoFunc(id);
            }

            setEditingFunc(false, id);
          }}
          onKeyDown={(event) => {
            if (event.key === 'Enter' && newTitle.trim()) {
              changeTitleFunc(id, newTitle);
              setEditingFunc(false, id);
            }

            if (event.key === 'Enter' && newTitle.trim() === '') {
              deleteTodoFunc(id);
            }

            if (event.key === 'Escape') {
              changeTitleFunc(title);
              setEditingFunc(false, id);
            }
          }}
        />
      )}
    </li>
  );
};

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  editing: PropTypes.bool.isRequired,
};
