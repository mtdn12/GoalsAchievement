import React from 'react'
import Template from 'src/Containers/Template'
import { object, func, bool } from 'prop-types'
import ListGoal from '../../organisms/ListGoal'
import { Loader, Button } from 'semantic-ui-react'
import styles from './styles.module.scss'

const Dashboard = ({
  goals,
  pushGoalDetail,
  isLoadingItems,
  handleOpenModalCreateGoal,
  handleOpenModalEditGoal,
  handleDeleteGoalAction,
}) => {
  return (
    <Template>
      <div className={styles.dashboardWrap}>
        {isLoadingItems && <Loader size="big" active inline="centered" />}
        {!isLoadingItems && (
          <ListGoal
            items={goals}
            pushGoalDetail={pushGoalDetail}
            handleOpenModalEditGoal={handleOpenModalEditGoal}
            handleDeleteGoalAction={handleDeleteGoalAction}
          />
        )}
        <Button
          circular
          icon="plus"
          primary
          size="massive"
          inverted
          className={styles.btnAdd}
          onClick={handleOpenModalCreateGoal}
        />
      </div>
    </Template>
  )
}

Dashboard.propTypes = {
  goals: object.isRequired,
  pushGoalDetail: func.isRequired,
  isLoadingItems: bool.isRequired,
  handleOpenModalCreateGoal: func.isRequired,
  handleOpenModalEditGoal: func.isRequired,
  handleDeleteGoalAction: func.isRequired,
}

export default Dashboard
