import React from 'react'
import { Modal, Header } from 'semantic-ui-react'
import { func, array } from 'prop-types'
import cx from 'classnames'
import styles from './styles.module.scss'

const TodoHistoryDetailModal = ({ handleClose, items }) => {
  return (
    <Modal onClose={handleClose} size="small" open>
      <Modal.Header>
        <Header as="h3" color="blue" inverted textAlign="center">
          Detail
        </Header>
      </Modal.Header>
      <Modal.Content>
        <ul>
          {items.length > 0 ? (
            items.map(item => (
              <li
                key={item._id}
                className={cx(styles.detailItem, {
                  [styles.isDone]: item.isComplete,
                })}>
                {item.todo}
              </li>
            ))
          ) : (
            <li>No infomation</li>
          )}
        </ul>
      </Modal.Content>
    </Modal>
  )
}

TodoHistoryDetailModal.propTypes = {
  handleClose: func.isRequired,
  items: array.isRequired,
}

export default TodoHistoryDetailModal
