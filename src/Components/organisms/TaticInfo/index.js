import React from 'react'
import { object } from 'prop-types'
import moment from 'moment'
import { Progress } from 'semantic-ui-react'
import styles from './styles.module.scss'
const TaticInfo = ({ item }) => {
  return (
    <div className={styles.taticItem}>
      <div className={styles.taticInfo}>
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
    </div>
  )
}

TaticInfo.propTypes = {
  item: object.isRequired,
}

export default TaticInfo
