import React from 'react'
import { object, func, bool } from 'prop-types'
import { Loader, Button, Label, Image } from 'semantic-ui-react'
import styles from './styles.module.scss'
import ModalPageTemplate from '../../templates/ModalPageTemplate'
import InputTodo from '../../molecules/InputTodo'
import TodoItem from '../../../Containers/TodoItem'

const DailyTodo = ({
  dailyTodos,
  isLoadingDailyTodos,
  handleGoBack,
  formItem,
  handleAction,
  isLoadingAction,
  handleResetFormItem,
  handleSetFormItem,
}) => {
  return (
    <ModalPageTemplate title="Daily Todo" handleGoBack={handleGoBack}>
      <div id={styles.todoWrap}>
        {isLoadingDailyTodos && <Loader active inline="centered" size="big" />}
        {!isLoadingDailyTodos &&
          dailyTodos && (
            <div className={styles.contentWrap}>
              <InputTodo
                item={formItem}
                handleAction={handleAction}
                isLoadingAction={isLoadingAction}
                cancelEdit={handleResetFormItem}
              />
              <div>
                {dailyTodos.map(todo => (
                  <TodoItem
                    type="dailyTodo"
                    item={todo}
                    key={todo.get('_id')}
                    handleSetFormItem={handleSetFormItem}
                  />
                ))}
              </div>
            </div>
          )}
      </div>
    </ModalPageTemplate>
  )
}

DailyTodo.propTypes = {
  handleGoBack: func.isRequired,
  dailyTodos: object.isRequired,
  isLoadingDailyTodos: bool.isRequired,
  formItem: object.isRequired,
  handleAction: func.isRequired,
  isLoadingAction: bool.isRequired,
  handleResetFormItem: func.isRequired,
  handleSetFormItem: func.isRequired,
}

export default DailyTodo
