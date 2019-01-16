import React from 'react'
import { object, func, bool } from 'prop-types'
import { Loader, Button, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import styles from './styles.module.scss'
import Template from 'src/Containers/Template'
import InputTodo from '../../molecules/InputTodo'
import TodoItem from '../../../Containers/TodoItem'

const Todo = ({
  todos,
  isLoadingTodos,
  formItem,
  handleAction,
  isLoadingAction,
  handleSetFormItem,
  handleResetFormItem,
}) => {
  return (
    <Template>
      <div id={styles.todoWrap}>
        <Button floated="right" primary as={Link} to="/todo/daily">
          Set Daily
        </Button>
        <Button floated="left" primary as={Link} to="/todo/history">
          See History
        </Button>
        {isLoadingTodos && <Loader active inline="centered" size="big" />}
        {!isLoadingTodos &&
          todos && (
            <div className={styles.contentWrap}>
              <InputTodo
                item={formItem}
                handleAction={handleAction}
                isLoadingAction={isLoadingAction}
                cancelEdit={handleResetFormItem}
              />
              <div>
                {todos.map(todo => (
                  <TodoItem
                    type="todo"
                    item={todo}
                    key={todo.get('_id')}
                    handleSetFormItem={handleSetFormItem}
                  />
                ))}
              </div>
            </div>
          )}
      </div>
    </Template>
  )
}

Todo.propTypes = {
  todos: object.isRequired,
  isLoadingTodos: bool.isRequired,
  formItem: object.isRequired,
  handleAction: func.isRequired,
  isLoadingAction: bool.isRequired,
  handleSetFormItem: func.isRequired,
  handleResetFormItem: func.isRequired,
}

export default Todo
