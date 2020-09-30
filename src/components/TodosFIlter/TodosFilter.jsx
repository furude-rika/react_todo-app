import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { FILTERS } from '../../constants';

export const TodosFilter = ({
  activeTodos,
  clearCompleted,
  completedTodos,
  visibleTodos,
  filterTodos,
}) => (
  <>
    <span className="todo-count">
      {`${activeTodos.length}
        ${activeTodos.length !== 1 ? 'items' : 'item'} left`
      }
    </span>

    <ul className="filters">
      <li>
        <a
          href="#/"
          className={classNames({
            selected: visibleTodos === FILTERS.all,
          })}
          onClick={() => filterTodos(FILTERS.all)}
        >
          All
        </a>
      </li>

      <li>
        <a
          href="#/active"
          className={classNames({
            selected: visibleTodos === FILTERS.active,
          })}
          onClick={() => filterTodos(FILTERS.active)}
        >
          Active
        </a>
      </li>

      <li>
        <a
          href="#/completed"
          className={classNames({
            selected: visibleTodos === FILTERS.completed,
          })}
          onClick={() => filterTodos(FILTERS.completed)}
        >
          Completed
        </a>
      </li>
    </ul>

    {completedTodos.length > 0 && (
      <button
        type="button"
        className="clear-completed"
        onClick={clearCompleted}
      >
        Clear completed
      </button>
    )}
  </>
);

TodosFilter.propTypes = {
  activeTodos: PropTypes.arrayOf(PropTypes.object),
  clearCompleted: PropTypes.func.isRequired,
  completedTodos: PropTypes.arrayOf(PropTypes.object),
  visibleTodos: PropTypes.string.isRequired,
  filterTodos: PropTypes.func.isRequired,
};

TodosFilter.defaultProps = {
  activeTodos: [],
  completedTodos: [],
};
