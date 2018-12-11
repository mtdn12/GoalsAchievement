import React from 'react'
import styles from './styles.module.scss'
import GoalItem from '../../molecules/GoalItem'
import { object, func } from 'prop-types'

const ListGoal = ({ items, pushGoalDetail }) => {
  return (
    <div className={styles.listGoalWrap}>
      {items && items.size === 0 ? (
        <p>No goals Found</p>
      ) : (
        items &&
        items.map(item => (
          <GoalItem
            item={item}
            key={item.get('_id')}
            pushGoalDetail={pushGoalDetail}
          />
        ))
      )}
    </div>
  )
}

ListGoal.propTypes = {
  items: object.isRequired,
  pushGoalDetail: func.isRequired,
}

export default ListGoal
