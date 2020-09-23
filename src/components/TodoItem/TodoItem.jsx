import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const TodoItem = ({
  id,
  title,
  completed,
  changeStatus,
  deleteTodo,
  changeTitle,
}) => {
  const [newTitle, setNewTitle] = useState(title);
  const [editing, setEditing] = useState(false);

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
            changeStatus(id);
          }}
        />
        <label
          onDoubleClick={() => {
            setEditing(true);
          }}
        >
          {title}
        </label>
        <button
          type="button"
          className="destroy"
          onClick={() => {
            deleteTodo(id);
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
            setNewTitle(event.target.value);
          }}
          onBlur={() => {
            if (newTitle.trim()) {
              changeTitle(id, newTitle);
            } else {
              deleteTodo(id);
            }

            setEditing(false);
          }}
          onKeyDown={(event) => {
            if (event.key === 'Enter' && newTitle.trim()) {
              changeTitle(id, newTitle);
              setEditing(false);
            }

            if (event.key === 'Enter' && newTitle.trim() === '') {
              deleteTodo(id);
            }

            if (event.key === 'Escape') {
              setNewTitle(title);
              setEditing(false);
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
  changeStatus: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  changeTitle: PropTypes.func.isRequired,
};
