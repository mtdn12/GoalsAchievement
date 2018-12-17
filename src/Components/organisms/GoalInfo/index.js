import React from 'react'
import moment from 'moment'
import { object, func } from 'prop-types'
import { Progress, Button, Header } from 'semantic-ui-react'
import styles from './styles.module.scss'
import ObjectiveInfo from '../../../Containers/ObjectiveInfo'

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
    const {
      item,
      handleOpenModalEditGoal,
      handleDeleteGoalAction,
      handleOpenModalCreateObjective,
    } = this.props
    return (
      <div className={styles.infoWrap}>
        <div className={styles.generalInfo}>
          <div className={styles.actionWrap}>
            <Button
              icon="edit"
              circular
              primary
              onClick={handleOpenModalEditGoal}
            />
            <Button
              icon="delete"
              circular
              negative
              onClick={handleDeleteGoalAction}
            />
          </div>
          <div className={styles.item}>
            <Header as="h3" textAlign="center">
              {item.get('name')}
            </Header>
            <p>
              <b className={styles.subtitle}>Time End: </b>{' '}
              {moment(item.get('timeEnd')).format('DD/MM/YYYY')}
            </p>
            <p>
              <b>Description: </b>
              <br />
              {item.get('description')}
            </p>
            <div>
              <b
                className={styles.subtitle}
                style={{ marginBottom: '.5em', display: 'inline-block' }}>
                Completed:
              </b>
              <Progress progress color="blue" percent={item.get('percent')} />{' '}
            </div>
          </div>
          <Button fluid primary onClick={handleOpenModalCreateObjective}>
            Add Objective
          </Button>
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
  handleOpenModalEditGoal: func.isRequired,
  handleDeleteGoalAction: func.isRequired,
  handleOpenModalCreateObjective: func.isRequired,
}

export default GoalInfo
