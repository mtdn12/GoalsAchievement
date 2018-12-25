import React from 'react'
import styles from './styles.module.scss'
import { Progress, Button } from 'semantic-ui-react'
import { object, func } from 'prop-types'
import moment from 'moment'

const GoalItem = ({
  item,
  pushGoalDetail,
  handleOpenModalEditGoal,
  handleDeleteGoalAction,
}) => {
  const itemEdit = {
    name: item.get('name'),
    timeEnd: moment(item.get('timeEnd')).format('YYYY-MM-DD'),
    id: item.get('_id'),
    description: item.get('description'),
  }
  return (
    <div className={styles.itemWrap}>
      <div className={styles.actionWrap}>
        <Button
          circular
          icon="edit"
          primary
          onClick={handleOpenModalEditGoal(itemEdit)}
        />
        <Button
          circular
          icon="delete"
          negative
          onClick={handleDeleteGoalAction(item)}
        />
      </div>
      <p>
        <span className={styles.subtitle}>Name:</span> {item.get('name')}
      </p>
      <p>
        <span className={styles.subtitle}>Time End: </span>{' '}
        {moment(item.get('timeEnd')).format('DD/MM/YYYY')}
      </p>
      <p>
        <span className={styles.subtitle}>Owner:</span>{' '}
        {item.getIn(['user', 'name'])}
      </p>
      <div>
        <span className={styles.subtitle}>Completed:</span>
        <Progress
          progress
          color="blue"
          percent={item.get('perCent') && item.get('perCent').toFixed(0)}
        />{' '}
      </div>
      <Button primary fluid onClick={pushGoalDetail(item.get('_id'))}>
        Detail
      </Button>
    </div>
  )
}

GoalItem.propTypes = {
  item: object.isRequired,
  pushGoalDetail: func.isRequired,
  handleOpenModalEditGoal: func.isRequired,
  handleDeleteGoalAction: func.isRequired,
}

export default GoalItem
