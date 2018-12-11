import React from 'react'
import styles from './styles.module.scss'
import moment from 'moment'
import { object } from 'prop-types'
import { Progress } from 'semantic-ui-react'
import StrategyInfo from '../StrategyInfo'

const ObjectiveInfo = ({ item }) => {
  return (
    <div className={styles.objectiveItem}>
      <div className={styles.generalInfo}>
        <p>
          <span className={styles.subtitle}>Name:</span> {item.get('name')}
        </p>
        <p>
          <span className={styles.subtitle}>Time End: </span>{' '}
          {moment(item.get('timeEnd')).format('DD/MM/YYYY')}
        </p>
        <div>
          <span className={styles.subtitle}>Completed:</span>
          <Progress progress color="blue" percent={item.get('percent')} />{' '}
        </div>
      </div>
      <div className={styles.strategiesWrap}>
        {item.get('strategiesDetail') &&
          item.get('strategiesDetail').size > 0 &&
          item
            .get('strategiesDetail')
            .map(obj => <StrategyInfo item={obj} key={obj.get('_id')} />)}
      </div>
    </div>
  )
}

ObjectiveInfo.propTypes = {
  item: object.isRequired,
}

export default ObjectiveInfo
