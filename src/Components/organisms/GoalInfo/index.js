import React from 'react'
import moment from 'moment'
import { object } from 'prop-types'
import { Progress } from 'semantic-ui-react'
import styles from './styles.module.scss'
import ObjectiveInfo from '../ObjectiveInfo'

class GoalInfo extends React.Component {
  handleHorizontalWheel = e => {
    e.preventDefault()
    const area = document.querySelector('#horizontalWheel')
    if (e.deltaY < 0) {
      area.scrollLeft += e.deltaY
    } else {
      area.scrollLeft += e.deltaY
    }
  }
  render() {
    const { item } = this.props
    return (
      <div className={styles.infoWrap}>
        <div className={styles.generalInfo}>
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
              color="brown"
              percent={item.get('percent')}
            />{' '}
          </div>
        </div>
        <div
          className={styles.objectivesWrap}
          id="horizontalWheel"
          onWheel={this.handleHorizontalWheel}>
          <div className={styles.objectivesBox}>
            {item.get('objectives') &&
              item.get('objectives').size > 0 &&
              item
                .get('objectives')
                .map((obj, index) => <ObjectiveInfo item={obj} key={index} />)}
          </div>
        </div>
      </div>
    )
  }
}

GoalInfo.propTypes = {
  item: object.isRequired,
}

export default GoalInfo
