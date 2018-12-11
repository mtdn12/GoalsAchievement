import React from 'react'
import { object, bool } from 'prop-types'
import { Loader } from 'semantic-ui-react'
import Template from 'src/Containers/Template'
import GoalInfo from '../../organisms/GoalInfo'
import styles from './styles.module.scss'

const GoalDetail = ({ item, isLoadingItem }) => {
  return (
    <Template>
      <div className={styles.goalWrap}>
        {isLoadingItem && <Loader active size="large" inline="centered" />}
        {!isLoadingItem && <GoalInfo item={item} />}
      </div>
    </Template>
  )
}
GoalDetail.propTypes = {
  item: object.isRequired,
  isLoadingItem: bool.isRequired,
}

export default GoalDetail
