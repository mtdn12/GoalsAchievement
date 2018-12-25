import React from 'react'
import { object, func, bool } from 'prop-types'
import { Loader, Header, Button } from 'semantic-ui-react'
import cx from 'classnames'
import styles from './styles.module.scss'
import Template from 'src/Containers/Template'

const DailyTask = ({
  items,
  isLoadingItems,
  handleCheckTask,
  handleUncheckTask,
  isLoadingCheck,
}) => {
  return (
    <Template>
      {isLoadingItems && <Loader active inline="centered" size="big" />}
      {!isLoadingItems && (
        <div className={styles.taskWrap}>
          <Header as="h1" textAlign="center" inverted>
            Daily Task
          </Header>
          <div className={styles.listTask}>
            {items &&
              items.map(item => (
                <div
                  className={cx(styles.taskItem, {
                    [styles.isDone]: item.get('isDone'),
                  })}
                  key={item.get('_id')}>
                  <p>{item.get('task')}</p>
                  {!item.get('isDone') ? (
                    <Button
                      icon="checkmark"
                      circular
                      primary
                      disabled={isLoadingCheck.get(item.get('_id'))}
                      loading={isLoadingCheck.get(item.get('_id'))}
                      onClick={handleCheckTask(item.get('_id'))}
                    />
                  ) : (
                    <Button
                      icon="cancel"
                      circular
                      negative
                      disabled={isLoadingCheck.get(item.get('_id'))}
                      loading={isLoadingCheck.get(item.get('_id'))}
                      onClick={handleUncheckTask(item.get('_id'))}
                    />
                  )}
                </div>
              ))}
          </div>
        </div>
      )}
    </Template>
  )
}

DailyTask.propTypes = {
  items: object.isRequired,
  isLoadingItems: bool.isRequired,
  handleCheckTask: func.isRequired,
  handleUncheckTask: func.isRequired,
  isLoadingCheck: object.isRequired,
}

export default DailyTask
