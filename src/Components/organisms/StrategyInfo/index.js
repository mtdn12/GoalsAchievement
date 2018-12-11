import React from 'react'
import { object } from 'prop-types'
import moment from 'moment'
import { Progress } from 'semantic-ui-react'
import styles from './styles.module.scss'
import TaticInfo from '../TaticInfo'

const StrategyInfo = ({ item }) => {
  return (
    <div className={styles.strategyItem}>
      <div className={styles.strategyInfo}>
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
      <div className={styles.taticsWrap}>
        {item.get('taticsDetail') &&
          item.get('taticsDetail').size > 0 &&
          item
            .get('taticsDetail')
            .map(obj => <TaticInfo item={obj} key={obj.get('_id')} />)}
      </div>
    </div>
  )
}

StrategyInfo.propTypes = {
  item: object.isRequired,
}

export default StrategyInfo
