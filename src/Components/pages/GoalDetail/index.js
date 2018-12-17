import React from 'react'
import { object, bool, func } from 'prop-types'
import { Loader } from 'semantic-ui-react'
import Template from 'src/Containers/Template'
import GoalInfo from '../../organisms/GoalInfo'
import styles from './styles.module.scss'

const GoalDetail = ({
  item,
  isLoadingItem,
  handleOpenModalEditGoal,
  handleDeleteGoalAction,
  handleOpenModalCreateObjective,
}) => {
  return (
    <Template>
      <div className={styles.goalWrap}>
        {isLoadingItem && <Loader active size="large" inline="centered" />}
        {!isLoadingItem && (
          <GoalInfo
            item={item}
            handleOpenModalEditGoal={handleOpenModalEditGoal}
            handleDeleteGoalAction={handleDeleteGoalAction}
            handleOpenModalCreateObjective={handleOpenModalCreateObjective}
          />
        )}
      </div>
    </Template>
  )
}
GoalDetail.propTypes = {
  item: object.isRequired,
  isLoadingItem: bool.isRequired,
  handleOpenModalEditGoal: func.isRequired,
  handleDeleteGoalAction: func.isRequired,
  handleOpenModalCreateObjective: func.isRequired,
}

export default GoalDetail
