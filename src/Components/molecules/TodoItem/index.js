import React from 'react'
import { Button, Loader } from 'semantic-ui-react'
import styles from './styles.module.scss'
import { func, object, string } from 'prop-types'
import cx from 'classnames'

const TodoItem = ({
  item,
  handleSetFormItem,
  openModalDeleteTodo,
  handleCheckTodo,
  isLoadingCheck,
  type,
}) => {
  return (
    <div
      onClick={type === 'todo' ? handleCheckTodo : void 0}
      className={cx(styles.itemWrap, {
        [styles.completed]: item.get('isComplete'),
      })}>
      {isLoadingCheck.get(item.get('_id')) && (
        <div className={styles.loadingWrap}>
          <Loader inline="centered" active size="big" />
        </div>
      )}
      <p>{item.get('todo')}</p>
      <div className={styles.actionWrap}>
        <Button
          icon="edit"
          primary
          circular
          onClick={handleSetFormItem(item)}
        />
        <Button icon="delete" negative circular onClick={openModalDeleteTodo} />
      </div>
    </div>
  )
}
TodoItem.propTypes = {
  item: object.isRequired,
  handleSetFormItem: func.isRequired,
  openModalDeleteTodo: func.isRequired,
  handleCheckTodo: func.isRequired,
  isLoadingCheck: object.isRequired,
  type: string.isRequired,
}

export default TodoItem
