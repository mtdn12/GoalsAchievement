import React from 'react'
import Template from 'src/Containers/Template'
import { object, func, bool } from 'prop-types'
import ListGoal from '../../organisms/ListGoal'
import { Loader } from 'semantic-ui-react'
import styles from './styles.module.scss'

const Dashboard = ({ goals, pushGoalDetail, isLoadingItems }) => {
  return (
    <Template>
      <div className={styles.dashboardWrap}>
        {isLoadingItems && <Loader size="large" active inline="centered" />}
        {!isLoadingItems && (
          <ListGoal items={goals} pushGoalDetail={pushGoalDetail} />
        )}
      </div>
    </Template>
  )
}

Dashboard.propTypes = {
  goals: object.isRequired,
  pushGoalDetail: func.isRequired,
  isLoadingItems: bool.isRequired,
}

export default Dashboard
